const SignInput = props => {
  const { name, placeholder, handle } = props;

  return (
    <input
      name={name}
      className={name}
      placeholder={placeholder}
      onChange={handle}
    />
  );
};

export default SignInput;
