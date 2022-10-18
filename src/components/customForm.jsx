import React, { useState } from "react";
import useErrorValidity from "../hooks/useErrorValidity";
import useSetInput from "../hooks/useSetInput";
import Type from "../utils/InputType";
import { Checkbox, Input, Range, Select, FileInput } from "./customInput";

const CustomForm = ({ FormList, data, setData }) => {
  const [errors, setErrors] = useState({});

  const setInput = useSetInput(setData, setErrors);

  const errorValidity = useErrorValidity();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorValidity(errors, FormList)) {
      console.log(data);
    } else alert("Enter your details");
  };

  return (
    <form
      className="w-[95%] mx-auto rounded-lg border-separate border border-slate-200 shadow-md p-4 bg-slate-100"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-0 md:gap-6   md:grid-cols-2">
        <RenderFromInputs
          FormList={FormList}
          data={data}
          setInput={setInput}
          errors={errors}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 w-64 float-right hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

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

export default CustomForm;
