const SignInput = props => {
  const { name, placeholder, handle, type, defaultValue } = props;

  return (
    <input
      name={name}
      className={name}
      placeholder={placeholder}
      onChange={handle}
      type={type}
      defaultValue={defaultValue}
    />
  );
};

export default SignInput;
