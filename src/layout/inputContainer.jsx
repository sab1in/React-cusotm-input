const InputContainer = ({ children, containerCss }) => {
  return (
    <div className={containerCss ? containerCss : "w-full mb-2 "}>
      {children}
    </div>
  );
};

export default InputContainer;
