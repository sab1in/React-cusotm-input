import React, { useState } from "react";

import FormValidation from "../utils/validation/formValidation";
import { Input, FileInput, Select, Range, Checkbox } from "./customInput";

const CustomForm = ({ FormList }) => {
  let inputinitialState = {};
  for (let i = 0; i < FormList.length; i++) {
    inputinitialState[FormList[i].name] = "";
  }
  const [data, setData] = useState(inputinitialState);

  const [errors, setErrors] = useState({});

  const handleError = () => {
    const err = FormValidation(data, FormList);
    if (err) {
      setErrors(err);
    }
    return err;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleError();
    if (typeof isValid === "object" && Object.keys(isValid).length === 0) {
      console.log(data);
    }
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
          setData={setData}
          setErrors={setErrors}
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

const RenderFromInputs = ({ FormList, data, setData, setErrors, errors }) => {
  return FormList.map((item, index) => {
    const { type, name } = item;

    if (type === "file") {
      return (
        <FileInput
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setData={setData}
          setErrors={setErrors}
        />
      );
    } else if (type === "checkbox") {
      return (
        <Checkbox
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setData={setData}
          setErrors={setErrors}
        />
      );
    } else if (type === "range") {
      return (
        <Range
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setData={setData}
          setErrors={setErrors}
        />
      );
    } else if (type === "select") {
      return (
        <Select
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setData={setData}
          setErrors={setErrors}
        />
      );
    } else {
      return (
        <Input
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setData={setData}
          setErrors={setErrors}
        />
      );
    }
  });
};

export default CustomForm;
