import React from "react";

import { Input, FileInput, Select, Range, Checkbox } from "./customInput";

const CustomForm = ({ FormList, data, setData }) => {
  const onChange = (e) => {
    const { type, value, name } = e.target;
    let temVal;
    if (type === "file") {
      if (e?.target?.files[0]) {
        temVal = e?.target?.files[0];
      }
    } else if (type === "select" || type === "checkbox") {
      temVal = e?.target?.checked;
    } else {
      temVal = value;
    }
    setData((pre) => {
      return {
        ...pre,
        [name]: temVal,
      };
    });
  };

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
        <RenderFromInputs
          FormList={FormList}
          data={data}
          setData={setData}
          onChange={onChange}
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

const RenderFromInputs = ({ FormList, data, setData, onChange }) => {
  return FormList.map((item, index) => {
    const { type, name } = item;

    if (type === "file") {
      return (
        <FileInput
          key={index}
          {...item}
          value={data[name]}
          onChange={onChange}
        />
      );
    } else if (type === "checkbox") {
      return (
        <Checkbox
          key={index}
          {...item}
          value={data[name]}
          onChange={onChange}
        />
      );
    } else if (type === "range") {
      return (
        <Range key={index} {...item} value={data[name]} onChange={onChange} />
      );
    } else if (type === "select") {
      return (
        <Select key={index} {...item} value={data[name]} onChange={onChange} />
      );
    } else {
      return (
        <Input key={index} {...item} value={data[name]} onChange={onChange} />
      );
    }
  });
};

export default CustomForm;
