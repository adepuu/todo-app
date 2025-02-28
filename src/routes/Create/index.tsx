import { FC } from "react";
import * as Yup from "yup";
import Header from "../../components/Header";
import InputGroup from "../../components/InputGroup";
import { Formik } from "formik";

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
  return (
    <div className="w-full mt-20">
      <Header />
      <div className="flex flex-col justify-center items-center h-fit px-7 py-10 w-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form className="flex flex-col gap-11 w-full" onSubmit={handleSubmit}>
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
                ADD
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateToDoRoute;
