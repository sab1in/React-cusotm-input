import React from "react";
import useSetInput from "../hooks/useSetInput";
import RenderFromInputs from "./renderFormInputs";

const CustomForm = ({ FormList, data, setData }) => {
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
      <div className="grid grid-cols-3 gap-x-10 gap-y-4">
        <RenderFromInputs
          {...FormList[0]}
          data={data?.first_name}
          setInput={setInput}
          error={errors?.first_name}
          containerCss=""
          inputCss=""
          labelCss=""
        />
        <RenderFromInputs
          {...FormList[1]}
          data={data?.last_name}
          setInput={setInput}
          error={errors?.last_name}
          containerCss=""
          inputCss=""
          labelCss=""
        />
        <RenderFromInputs
          {...FormList[2]}
          data={data?.email}
          setInput={setInput}
          error={errors?.email}
          containerCss=""
          inputCss=""
          labelCss="font-bold"
        />
        <RenderFromInputs
          {...FormList[3]}
          data={data?.password}
          setInput={setInput}
          error={errors?.password}
          containerCss=""
          inputCss=""
          labelCss="font-bold"
        />
        <RenderFromInputs
          {...FormList[4]}
          data={data?.dob}
          setInput={setInput}
          error={errors?.dob}
          containerCss=""
          inputCss=""
          labelCss=""
        />
        <RenderFromInputs
          {...FormList[5]}
          data={data?.gender}
          setInput={setInput}
          error={errors?.gender}
          containerCss=""
          inputCss=""
          labelCss=""
        />
        <RenderFromInputs
          {...FormList[6]}
          data={data?.file}
          setInput={setInput}
          error={errors?.file}
          containerCss=""
          inputCss=""
          labelCss=""
        />
        <RenderFromInputs
          {...FormList[7]}
          data={data?.range}
          setInput={setInput}
          error={errors?.range}
          containerCss=""
          inputCss=""
          labelCss=""
        />
        <RenderFromInputs
          {...FormList[8]}
          data={data?.is_admin}
          setInput={setInput}
          error={errors?.is_admin}
          containerCss=""
          inputCss=""
          labelCss=""
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
