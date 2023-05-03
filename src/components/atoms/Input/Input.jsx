const Input = (props) => {
  const { type, value, setValue, placeholder } = props;

  return (
    <div {...props}>
      <input
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
