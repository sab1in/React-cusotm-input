import { useState } from "react";

const useSetInput = (setData) => {
  const [errors, setErrors] = useState({});

  const setInput = (key, value, error) => {
    setData((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
    setErrors((pre) => {
      return {
        ...pre,
        [key]: error,
      };
    });
  };

  const errorValidity = (error, FormList) => {
    const required = FormList.filter((e) => e.require).map((e) => e.name);
    const has_fields = required.every((e) => e in error);

    return has_fields && Object.values(error).every((x) => x === false);
  };
  return [errors, setInput, errorValidity];
};

export default useSetInput;
