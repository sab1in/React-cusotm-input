import { DocValidator, ImageValidator } from "./fileValidator";

const OnChangeValidation = (data, element, fileType) => {
  let errors = "";
  const { type, files } = element;

  if (type === "email") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors = "This field is require";
    } else if (
      !a?.match(
        /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/gi
      )
    ) {
      errors = "Invalid email address";
    }
  }
  if (type === "password") {
    let a = data;
    if (a?.trim() === "" || !a) {
      errors = "This field is require";
    } else if (
      !a?.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi
      )
    ) {
      errors =
        "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one symbol";
    }
  }

  if (type === "file") {
    if (element?.require && files[0]) {
      errors = "This field is require";
    } else if (fileType === "image") {
      !ImageValidator(files[0]) &&
        (errors = "Invalid file, please uplaod image");
    } else if (fileType === "document") {
      !DocValidator(files[0]) &&
        (errors = "Invalid file, please uplaod documment");
    }
  }
  if (type === "text" && type === "select") {
    if (element?.require && (data?.trim() === "" || !data)) {
      errors = "This field is require";
    }
  } else if (type !== "checkbox" && type !== "range") {
    if (element?.require && !data) {
      errors = "This field is require";
    }
  }
  return errors;
};
export default OnChangeValidation;
