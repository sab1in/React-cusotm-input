import { DocValidator, ImageValidator } from "./fileValidator";

const OnChangeValidation = (data, element, error, require, fileType) => {
  let errors = error || {};
  const { type, files, name } = element;
  if (data || !require) {
    errors[name] = false;
  }
  if (type === "email") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors[name] = true;
    } else if (
      !a?.match(
        /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/gi
      )
    ) {
      errors[name] = true;
    } else errors[name] = false;
  }
  if (type === "password") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors[name] = true;
    } else if (
      !a?.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi
      )
    ) {
      errors[name] = true;
    } else errors[name] = false;
  }

  if (type === "file") {
    if (require && !files[0]) {
      errors[name] = true;
    } else if (fileType === "image") {
      !ImageValidator(files[0])
        ? (errors[name] = true)
        : (errors[name] = false);
    } else if (fileType === "document") {
      !DocValidator(files[0]) ? (errors[name] = true) : (errors[name] = false);
    } else errors[name] = false;
  }
  if (type === "text" && type === "select") {
    if (require && (data?.trim() === "" || !data)) {
      errors[name] = true;
    }
  } else if (type !== "checkbox" && type !== "range") {
    if (require && !data) {
      errors[name] = true;
    }
  }
  return errors;
};
export default OnChangeValidation;
