import { DocValidator, ImageValidator } from "./fileValidator";

const OnChangeValidation = (data, element, error, require, fileType) => {
  let errors = error || {};
  const { type, files, name } = element;
  console.log("hi", error, data);
  if (type === "email") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors[name] = "This field is require";
    } else if (
      !a?.match(
        /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/gi
      )
    ) {
      errors[name] = "Invalid email address";
    } else delete errors[name];
  }
  if (type === "password") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors[name] = "This field is require";
    } else if (
      !a?.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi
      )
    ) {
      errors[name] =
        "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one symbol";
    } else delete errors[name];
  }

  if (type === "file") {
    if (require && !files[0]) {
      errors[name] = "This field is require";
    } else if (fileType === "image") {
      !ImageValidator(files[0])
        ? (errors[name] = "Invalid file, please uplaod image")
        : delete errors[name];
    } else if (fileType === "document") {
      !DocValidator(files[0])
        ? (errors[name] = "Invalid file, please uplaod documment")
        : delete errors[name];
    } else delete errors[name];
  }
  if (type === "text" && type === "select") {
    if (require && (data?.trim() === "" || !data)) {
      errors[name] = "This field is require";
    } else delete errors[name];
  } else if (type !== "checkbox" && type !== "range") {
    if (require && !data) {
      errors[name] = "This field is require";
    }
  }
  return errors;
};
export default OnChangeValidation;
