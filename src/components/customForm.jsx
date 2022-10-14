import React, { useState, useEffect } from "react";
import axios from "axios";

import CustomInput from "./customInput";
import FormValidation from "../utils/validation/formValidation";

const CustomForm = ({ FormList, apiUrl }) => {
  const [inputs, setInputs] = useState({});
  const [callApi, setCallApi] = useState(false);

  useEffect(() => {
    const inp = {
      errors: {},
    };
    FormList.forEach((item, index) => {
      inp[item.name] = item.defaultValue;
    });
    setInputs({ ...inp });
    // eslint-disable-next-line
  }, []);

  const onChangeFunction = (e) => {
    setInputs((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const checkboxChange = (e) => {
    setInputs((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.checked,
      };
    });
  };

  const handleFileChange = (e) => {
    if (e?.target?.files[0]) {
      setInputs((pre) => {
        return {
          ...pre,
          [e.target.name]: e.target.files[0],
        };
      });
    }
  };

  const handleError = () => {
    const err = FormValidation(inputs, FormList);
    if (err) {
      setInputs((pre) => {
        return {
          ...pre,
          errors: err,
        };
      });
    }
  };

  const apiCallFunction = (data) => {
    axios
      .post(apiUrl, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (
      typeof inputs.errors === "object" &&
      Object.keys(inputs?.errors).length === 0 &&
      callApi
    ) {
      const { errors, ...postData } = inputs;
      let includesFiles = false;
      FormList.forEach((item) => {
        if (item.type === "file") {
          includesFiles = true;
        }
      });
      if (includesFiles) {
        const formdata = new FormData();
        Object.keys(postData).forEach((key, index) => {
          formdata.append(key, postData[key]);
        });
        apiCallFunction(formdata);
      } else {
        apiCallFunction(postData);
      }
      setCallApi(false);
    } else {
      setCallApi(false);
    }
    // eslint-disable-next-line
  }, [inputs.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCallApi(true);
    handleError();
  };

  return (
    <form
      className="w-[95%] mx-auto rounded-lg border-separate border border-slate-200 shadow-md p-4 bg-slate-100"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-0 md:gap-6   md:grid-cols-2">
        {inputs &&
          FormList.map((item, index) => {
            let error = "";
            if (typeof inputs.errors === "object") {
              error = inputs.errors[item.name];
            }
            return (
              <CustomInput
                key={index}
                label={item.label}
                name={item.name}
                onChange={onChangeFunction}
                checkboxChange={checkboxChange}
                handleFileChange={handleFileChange}
                placeholder={item.placeholder}
                type={item.type}
                options={item.options}
                value={inputs[item.name]}
                min={item.min}
                step={item.step}
                max={item.max}
                error={error}
                inputStyle={item.inputStyle}
              />
            );
          })}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 w-64 float-right hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
