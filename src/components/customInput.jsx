import React from "react";
import OnChangeValidation from "../utils/validation/OnChangeValidation";

const onChange = (e, setInput, type, require, fileType) => {
  const { value, name } = e.target;
  let temVal;
  if (type === "file") {
    if (e?.target?.files[0]) {
      temVal = e?.target?.files[0];
    }
  } else if (type === "checkbox") {
    temVal = e?.target?.checked;
  } else {
    temVal = value;
  }
  setInput(
    name,
    temVal,
    OnChangeValidation(
      (e?.target?.files && e?.target?.files[0]) || value,
      type,
      require,
      fileType
    )
  );
};

export const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  setInput,
  error,
  require,
  containerCss,
  inputCss,
  labelCss,
}) => {
  return (
    <div className={containerCss ? containerCss : "w-full mb-2"}>
      <label
        htmlFor={name}
        className={
          labelCss ? labelCss : ` block mb-2 text-sm font-medium text-gray-900`
        }
      >
        {label}
      </label>
      <input
        id={name}
        className={
          inputCss
            ? inputCss
            : "py-2 px-4 bg-gray-50 border border-gray-300 self-start transition duration-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        }
        // required
        name={name}
        type={type}
        value={value}
        // required={required}
        onChange={(e) => onChange(e, setInput, type, require)}
        placeholder={placeholder}
      />
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">
          {error === true && "invalid data"}
        </p>
      )}
    </div>
  );
};

export const FileInput = ({
  label,
  name,
  setInput,
  fileType,
  type,
  error,
  require,
  containerCss,
  inputCss,
  labelCss,
}) => {
  return (
    <div className={containerCss ? containerCss : ""}>
      <label
        className={
          labelCss ? labelCss : "block mb-2 text-sm font-medium text-gray-900 "
        }
      >
        {label}
      </label>
      <input
        name={name}
        onChange={(e) => onChange(e, setInput, type, require, fileType)}
        className={
          inputCss
            ? inputCss
            : "block w-full text-sm text-gray-900 bg-gray-50 rounded py-1 px-3 border border-gray-300 cursor-pointer  focus:outline-none "
        }
        type="file"
      />
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">
          {error === true && "invalid data"}
        </p>
      )}
    </div>
  );
};

export const Checkbox = ({
  name,
  label,
  value,
  setInput,
  type,
  error,
  require,
  containerCss,
  inputCss,
  labelCss,
}) => {
  return (
    <div className={containerCss ? containerCss : "flex mb-2 items-center"}>
      <input
        id={name}
        checked={value}
        type="checkbox"
        name={name}
        onChange={(e) => onChange(e, setInput, type, require)}
        className={
          inputCss
            ? inputCss
            : "w-4 h-4 text-blue-600 focus:outline-none cursor-pointer float-left bg-gray-100 rounded border-gray-300 "
        }
      />
      <label
        htmlFor={name}
        className={
          labelCss ? labelCss : "ml-2 text-sm font-medium text-gray-900"
        }
      >
        {label}
      </label>
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">
          {error === true && "invalid data"}
        </p>
      )}
    </div>
  );
};

export const Select = ({
  name,
  label,
  placeholder,
  options,
  setInput,
  error,
  require,
  containerCss,
  inputCss,
  labelCss,
  value,
  type,
}) => {
  return (
    <div className={containerCss ? containerCss : "w-full mb-2"}>
      <label
        className={
          labelCss
            ? labelCss
            : "custom-label block mb-2 text-sm font-medium text-gray-900"
        }
      >
        {label}
      </label>
      <select
        name={name}
        value={value}
        // required={required}
        onChange={(e) => onChange(e, setInput, type, require)}
        className={
          inputCss
            ? inputCss
            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        }
      >
        <option hidden value="">
          {placeholder}
        </option>
        {options?.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">
          {error === true && "invalid data"}
        </p>
      )}
    </div>
  );
};

export const Range = ({
  name,
  value,
  min,
  max,
  step,
  label,
  setInput,
  error,
  require,
  containerCss,
  inputCss,
  labelCss,
  type,
}) => {
  return (
    <div className={containerCss ? containerCss : "w-full mb-2 "}>
      <label
        htmlFor={name}
        className={
          labelCss ? labelCss : "ml-2 text-sm font-medium text-gray-900"
        }
      >
        {label}
      </label>
      <input
        id={name}
        value={value}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(e, setInput, type, require)}
        className={
          inputCss
            ? inputCss
            : "w-full text-blue-600 focus:outline-none cursor-pointer bg-gray-100 rounded border-gray-300 "
        }
      />
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">
          {error === true && "invalid data"}
        </p>
      )}
    </div>
  );
};
