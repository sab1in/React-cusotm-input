const FormValidation = (data, inputs) => {
  const errors = {};
  inputs.forEach((element, index) => {
    const { type, name } = element;
    if (type === "email") {
      let a = data[name];
      if (a?.trim() === "" || !a) {
        errors[name] = "This field is require";
      } else if (
        !a?.match(
          /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/gi
        )
      ) {
        errors[name] = "Invalid email address";
      }
    }
    if (type === "password") {
      let a = data[name];
      if (a?.trim() === "" || !a) {
        errors[name] = "This field is require";
      } else if (
        !a?.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi
        )
      ) {
        errors[name] = "Invalid password";
      }
    }
    if (
      type === "text" ||
      type === "range" ||
      type === "select" ||
      type === "date"
    ) {
      let a = data[name];
      if (element?.require && (a?.trim() === "" || !a)) {
        errors[name] = "This field is require";
      }
    }
    if (type === "file" && element?.require && !data[name]) {
      errors[name] = "This field is require";
    }
  });
  return errors;
};

export default FormValidation;
