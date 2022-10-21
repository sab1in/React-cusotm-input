import React, { useState } from "react";

import BarChart from "./components/Barchart/barChart";

import CustomForm from "./components/customForm";
import RenderFromInputs from "./components/customInput/renderFormInputs";

import { inputFields, single_Input } from "./utils/data/inputFields";
import { barData } from "./utils/data/barData";

const App = () => {
  // for multiple input
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    file: "",
    gender: "",
    is_admin: true,
    range: 0,
  });

  // for single Input
  const [singleInput, setsingleInput] = useState("");
  const [singleInputError, setsingleInputError] = useState({});

  const setInput = (key, value, error) => {
    setsingleInput(value);
    setsingleInputError(error);
  };

  return (
    <React.Fragment>
      <div className="mt-20 w-[90%] h-[80vh] m-auto">
        <BarChart barData={barData} dividerNum={10} />
      </div>

      <div className=" mt-20  flex items-center">
        <CustomForm
          FormList={inputFields}
          data={data}
          setData={setData}
          className={"grid gap-0 md:gap-6 md:grid-cols-2"}
        />
      </div>
      <div className="w-72 mx-auto my-10">
        <RenderFromInputs
          {...single_Input}
          data={singleInput?.email}
          setInput={setInput}
          error={singleInputError}
          containerCss=""
          inputCss=""
          labelCss="font-bold"
        />
      </div>
    </React.Fragment>
  );
};

export default App;
