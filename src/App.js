import React, { useState } from "react";

import CustomForm from "./components/customForm";
import { Input } from "./components/customInput";

// for multiple input
const inputFields = [
  {
    name: "first_name",
    type: "text",
    label: "First name",
    placeholder: "Enter your first name",
    require: true,
  },
  {
    name: "last_name",
    type: "text",
    label: "Last name",
    placeholder: "Enter your last name",
    require: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    require: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    require: true,
  },

  {
    name: "dob",
    type: "date",
    label: "DOB",
    require: true,
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    placeholder: "Select gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
    require: true,
  },
  {
    name: "file",
    label: "profile",
    type: "file",
    require: true,
    fileType: "document",
  },
  {
    name: "range",
    type: "range",
    min: "1",
    step: "1",
    max: "20",
    label: "range",
    require: false,
  },
  {
    name: "is_admin",
    type: "checkbox",
    label: "Is admin",
    require: false,
  },
];

// for single Input
const single_Input = {
  name: "user_email",
  type: "email",
  label: "Email",
  placeholder: "Enter your email",
  require: true,
};

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
    range: 15,
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
      <div className="min-h-[100vh]  flex items-center">
        <CustomForm FormList={inputFields} data={data} setData={setData} />
      </div>
      <div className="w-72 mx-auto my-10">
        <Input
          {...single_Input}
          value={singleInput.email}
          error={singleInputError}
          setInput={setInput}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
