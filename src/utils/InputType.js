const Type = (type) => {
  return type === "file"
    ? "FileInput"
    : type === "checkbox"
    ? "Checkbox"
    : type === "select"
    ? "Select"
    : type === "range"
    ? "Range"
    : "Input";
};
export default Type;
