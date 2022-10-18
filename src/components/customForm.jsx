import React from "react";
import useSetInput from "../hooks/useSetInput";
import RenderFromInputs from "./renderFormInputs";

const CustomForm = ({ FormList, data, setData, className }) => {
  const [errors, setInput, errorValidity] = useSetInput(setData);

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
      <div className={className}>
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

export default CustomForm;
