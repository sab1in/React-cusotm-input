import Type from "../utils/InputType";
import { Checkbox, Input, Range, Select, FileInput } from "./customInput";

const RenderFromInputs = ({ FormList, data, setInput, errors }) => {
  return FormList.map((item, index) => {
    const { name } = item;
    const InputNames = {
      Input,
      Checkbox,
      Select,
      Range,
      FileInput,
    };
    var FindInput = InputNames[Type(item.type)];
    return (
      <FindInput
        key={index}
        {...item}
        error={errors[name]}
        value={data[name]}
        setInput={setInput}
      />
    );
  });
};

export default RenderFromInputs;
