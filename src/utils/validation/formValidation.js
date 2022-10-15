import { ImageValidator, DocValidator } from "./fileValidator";

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
        errors[name] =
          "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one symbol";
      }
    }

    if (type === "file") {
      if (element?.require && !data[name]) {
        errors[name] = "This field is require";
      } else if (element?.fileType === "image") {
        !ImageValidator(data[name]) &&
          (errors[name] = "Invalid file, please uplaod image");
      } else if (element?.fileType === "document") {
        !DocValidator(data[name]) &&
          (errors[name] = "Invalid file, please uplaod document");
      }
    }
    if (type === "text" && type === "select") {
      if (element?.require && (data[name]?.trim() === "" || !data[name])) {
        errors[name] = "This field is require";
      }
    } else if (type !== "checkbox" && type !== "range") {
      if (element?.require && !data[name]) {
        errors[name] = "This field is require";
      }
    }
  });
  return errors;
};

export default FormValidation;
