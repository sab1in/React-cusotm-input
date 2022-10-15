import React, { useState } from "react";

import CustomForm from "./components/customForm";

const inputFields = [
  {
    name: "first_name",
    type: "text",
    label: "First name",
    placeholder: "Enter your first name",
    defaultValue: "",
    require: true,
  },
  {
    name: "last_name",
    type: "text",
    label: "Last name",
    placeholder: "Enter your last name",
    defaultValue: "",
    require: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    defaultValue: "",
    require: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    defaultValue: "",
    require: true,
  },

  {
    name: "dob",
    type: "date",
    defaultValue: "",
    label: "DOB",
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    defaultValue: "female",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    name: "file",
    label: "profile",
    defaultValue: "",
    type: "file",
  },
  {
    name: "range",
    type: "range",
    min: "1",
    step: "1",
    defaultValue: 15,
    max: "20",
    label: "range",
  },
  {
    name: "is_admin",
    type: "checkbox",
    label: "Is admin",
    defaultValue: false,
  },
];

const App = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    file: "",
    gender: "",
    is_admin: "",
    range: "",
  });
  return (
    <React.Fragment>
      <div className="min-h-[100vh] flex items-center">
        <CustomForm FormList={inputFields} data={data} setData={setData} />
      </div>
    </React.Fragment>
  );
};

export default App;
