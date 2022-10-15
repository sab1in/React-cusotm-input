import React from "react";

import { Input, FileInput, Select, Range, Checkbox } from "./customInput";
import FormValidation from "../utils/validation/formValidation";

const CustomForm = ({ FormList, data, setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form
      className="w-[95%] mx-auto rounded-lg border-separate border border-slate-200 shadow-md p-4 bg-slate-100"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-0 md:gap-6   md:grid-cols-2">
        <RenderFromInputs FormList={FormList} data={data} setData={setData} />
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

const RenderFromInputs = ({ FormList, data, setData }) => {
  return FormList.map((item, index) => {
    const { type, name, label } = item;

    if (type === "file") {
      return (
        <FileInput
          key={index}
          name={name}
          value={data[name]}
          label={label}
          setData={setData}
        />
      );
    } else if (type === "checkbox") {
      return (
        <Checkbox
          key={index}
          name={name}
          value={data[name]}
          label={label}
          setData={setData}
        />
      );
    } else if (type === "range") {
      return (
        <Range
          key={index}
          name={name}
          value={data[name]}
          label={label}
          setData={setData}
          min={item.min}
          max={item.max}
          step={item.step}
        />
      );
    } else if (type === "select") {
      return (
        <Select
          key={index}
          name={name}
          value={data[name]}
          label={label}
          setData={setData}
          placeholder={item.placeholder}
          options={item.options}
        />
      );
    } else {
      return (
        <Input
          key={index}
          name={name}
          type={type}
          value={data[name]}
          label={label}
          setData={setData}
          placeholder={item.placeholder}
        />
      );
    }
  });
};

export default CustomForm;
