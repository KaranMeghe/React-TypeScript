interface InputProps {
  label: string;
  id: string;
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "checkbox"
    | "radio"
    | "file"
    | "range"
    | "submit"
    | "button"
    | "hidden";
  placeholder: string;
  value: string | number;
  setInput: (input: string | number) => void;
}

const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  setInput,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert value to number if input type is 'number'
    const newValue =
      type === "number" ? Number(event.target.value) : event.target.value;
    setInput(newValue);
  };
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
