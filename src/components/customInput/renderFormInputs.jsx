import Type from "../../utils/InputType";
import { Checkbox, Input, Range, Select, FileInput } from "./customInput";

const RenderFromInputs = ({
  name,
  label,
  placeholder,
  options,
  fileType,
  require,
  type,
  data,
  setInput,
  error,
  min,
  max,
  step,
  containerCss,
  inputCss,
  labelCss,
}) => {
  const InputNames = {
    Input,
    Checkbox,
    Select,
    Range,
    FileInput,
  };
  var FindInput = InputNames[Type(type)];

  return (
    <FindInput
      name={name}
      label={label}
      placeholder={placeholder}
      options={options}
      require={require}
      type={type}
      fileType={fileType}
      min={min}
      max={max}
      step={step}
      error={error}
      value={data}
      setInput={setInput}
      containerCss={containerCss}
      inputCss={inputCss}
      labelCss={labelCss}
    />
  );
};

export default RenderFromInputs;
