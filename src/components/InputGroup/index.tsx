interface InputGroupProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputGroup: React.FC<InputGroupProps> = (props) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <input
        {...props}
        className="py-[6px] border-b-[1px] border-tertiary w-full"
      />
      {props.error && <span className="text-red-500 text-xs">{props.error}</span>}
    </div>
  );
};

export default InputGroup;
