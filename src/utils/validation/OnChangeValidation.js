import { DocValidator, ImageValidator } from "./fileValidator";

const OnChangeValidation = (data, type, require, fileType) => {
  let errors = true;
  if (data || !require) {
    if (type === "text") {
      errors = data?.trim === "" && true;
    }
    errors = false;
  }
  if (!require) {
    errors = null;
  }
  if (type === "email") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors = true;
    } else if (
      !a?.match(
        /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/gi
      )
    ) {
      errors = true;
    } else errors = false;
  }
  if (type === "password") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors = true;
    } else if (
      !a?.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi
      )
    ) {
      errors = true;
    } else errors = false;
  }

  if (type === "file") {
    if (require && !data) {
      errors = true;
    } else if (fileType === "image") {
      !ImageValidator(data) ? (errors = true) : (errors = false);
    } else if (fileType === "document") {
      !DocValidator(data) ? (errors = true) : (errors = false);
    } else errors = false;
  }
  if (type === "text" && type === "select") {
    if (require && (data?.trim() === "" || !data)) {
      errors = true;
    }
  } else if (type !== "checkbox" && type !== "range") {
    if (require && !data) {
      errors = true;
    }
  }
  return errors;
};
export default OnChangeValidation;
