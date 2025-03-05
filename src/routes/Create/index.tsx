import { FC } from "react";
import * as Yup from "yup";
import Header from "../../components/Header";
import InputGroup from "../../components/InputGroup";
import { Formik, FormikValues } from "formik";
import { useSearchParams, useNavigate } from "react-router-dom";
import { TODO } from "@/types";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/useToDoList";
import { addTodo, updateTodo } from "@/features/todo/slice";

const initialValues = {
  title: "",
  detail: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  detail: Yup.string()
    .min(3, "Detail must be at least 3 characters")
    .required("Detail is required"),
});

const CreateToDoRoute: FC = () => {
  const dispatch = useDispatch();
  const { todos } = useAppSelector(({ todoReducer }) => todoReducer);

  // get the id from search param
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const handleSubmit = (values: FormikValues) => {
    const newTodo: TODO = {
      id: id || "",
      title: values.title as string,
      description: values.detail as string,
      isComplete: false,
    };

    if (id) {
      dispatch(
        updateTodo({
          id,
          data: newTodo,
        })
      );
      alert("Todo updated successfully");
      navigate("/");
      return;
    }
    dispatch(addTodo(newTodo));
    alert("Todo added successfully");
    navigate("/");
  };

  const getInitialValues = () => {
    if (id) {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) {
        return initialValues;
      }
      return {
        title: todo.title,
        detail: todo.description,
      };
    }
    return initialValues;
  };
  return (
    <div className="w-full mt-20">
      <Header />
      <div className="flex flex-col justify-center items-center h-fit px-7 py-10 w-auto">
        <Formik
          initialValues={getInitialValues()}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form
              className="flex flex-col gap-11 w-full"
              onSubmit={handleSubmit}
            >
              <InputGroup
                label="Title"
                placeholder="Enter title"
                name="title"
                value={values.title}
                onChange={handleChange}
                error={errors.title}
              />
              <InputGroup
                label="Detail"
                placeholder="Enter Detail"
                name="detail"
                value={values.detail}
                onChange={handleChange}
                error={errors.detail}
              />
              <button
                type="submit"
                className="bg-primary text-white py-3 px-5 rounded-md mt-5 font-bold"
              >
                {id ? "Update" : "Create"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateToDoRoute;
