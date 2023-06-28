const SignInput = props => {
  const { name, placeholder, handle, type } = props;

  return (
    <input
      name={name}
      className={name}
      placeholder={placeholder}
      onChange={handle}
      type={type}
    />
  );
};

export default SignInput;
