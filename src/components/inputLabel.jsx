const InputLabel = ({ label, labelCss }) => {
  return (
    <label
      className={
        labelCss ? labelCss : "block mb-2 text-sm font-medium text-gray-900 "
      }
    >
      {label}
    </label>
  );
};

export default InputLabel;
