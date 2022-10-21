// for multiple input
export const inputFields = [
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
export const single_Input = {
  name: "user_email",
  type: "email",
  label: "Email",
  placeholder: "Enter your email",
  require: true,
};
