const FormValidation = (data, inputs) => {
  const errors = {};
  console.log(inputs);
  inputs.forEach((element, index) => {
    if (element?.type === "email") {
      let a = data[element?.name];
      if (a?.trim() === "" || !a) {
        errors[element?.name] = "This field is require";
      } else if (
        !a?.match(
          /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/gi
        )
      ) {
        errors[element?.name] = "Invalid email address";
      }
    }
    if (element?.type === "password") {
      let a = data[element?.name];
      if (a?.trim() === "" || !a) {
        errors[element?.name] = "This field is require";
      } else if (
        !a?.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi
        )
      ) {
        errors[element?.name] = "Invalid password";
      }
    }
    if (
      element?.type === "text" ||
      element?.type === "range" ||
      element?.type === "select" ||
      element?.type === "date"
    ) {
      let a = data[element?.name];
      console.log("a", a);
      if (element?.require && (a?.trim() === "" || !a)) {
        errors[element?.name] = "This field is require";
      }
    }
  });
  return errors;
};

export default FormValidation;
