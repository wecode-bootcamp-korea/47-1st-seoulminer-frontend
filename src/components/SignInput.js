const SignInput = props => {
  const { name, placeholder, className, handle, type, defaultValue } = props;

  return (
    <input
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={handle}
      type={type}
      defaultValue={defaultValue}
    />
  );
};

export default SignInput;
