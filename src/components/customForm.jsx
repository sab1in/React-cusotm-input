import React, { useState } from "react";
import { Input, FileInput, Select, Range, Checkbox } from "./customInput";

const CustomForm = ({ FormList, data, setData }) => {
  const [errors, setErrors] = useState({});

  const setInput = (key, value, error) => {
    setData((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
    error !== null &&
      setErrors((pre) => {
        return {
          ...pre,
          [key]: error,
        };
      });
  };

  const errorValidity = (error, FormList) => {
    let requireSize = 0;
    FormList.forEach((element) => {
      requireSize = element.require ? requireSize + 1 : requireSize;
    });
    const errorSize = Object.keys(error).length;
    return (
      Object.values(error).every((x) => x === false) &&
      requireSize === errorSize
    );
  };

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
    const { type, name } = item;

    if (type === "file") {
      return (
        <FileInput
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setInput={setInput}
        />
      );
    } else if (type === "checkbox") {
      return (
        <Checkbox
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setInput={setInput}
        />
      );
    } else if (type === "range") {
      return (
        <Range
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setInput={setInput}
        />
      );
    } else if (type === "select") {
      return (
        <Select
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setInput={setInput}
        />
      );
    } else {
      return (
        <Input
          key={index}
          {...item}
          error={errors[name]}
          value={data[name]}
          setInput={setInput}
        />
      );
    }
  });
};

export default CustomForm;
