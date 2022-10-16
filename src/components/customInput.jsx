import React from "react";
import OnChangeValidation from "../utils/validation/OnChangeValidation";

const onChange = (e, setData, setErrors, fileType) => {
  const { type, value, name } = e.target;
  let temVal;
  if (type === "file") {
    if (e?.target?.files[0]) {
      temVal = e?.target?.files[0];
    }
  } else if (type === "select" || type === "checkbox") {
    temVal = e?.target?.checked;
  } else {
    temVal = value;
  }
  setData((pre) => {
    return {
      ...pre,
      [name]: temVal,
    };
  });
  setErrors(OnChangeValidation(value, e?.target, fileType));
};

export const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  setData,
  setErrors,
  error,
}) => {
  return (
    <div className="w-full mb-2 mx-auto">
      <label
        htmlFor={name}
        className={` block mb-2 text-sm font-medium text-gray-900`}
      >
        {label}
      </label>
      <input
        id={name}
        className={
          "py-2 px-4 bg-gray-50 border border-gray-300 transition duration-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        }
        // required
        name={name}
        type={type}
        value={value}
        // required={required}
        onChange={(e) => onChange(e, setData, setErrors)}
        placeholder={placeholder}
      />
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const FileInput = ({ name, setData, setErrors, fileType, error }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        Upload file
      </label>
      <input
        name={name}
        onChange={(e) => onChange(e, setData, setErrors, fileType)}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded py-1 px-3 border border-gray-300 cursor-pointer  focus:outline-none "
        type="file"
      />
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const Checkbox = ({ name, label, value, setData, setErrors, error }) => {
  return (
    <div className="flex mb-2 items-center">
      <input
        checked={value}
        type="checkbox"
        name={name}
        onChange={(e) => onChange(e, setData, setErrors)}
        className="w-4 h-4 text-blue-600 focus:outline-none cursor-pointer bg-gray-100 rounded border-gray-300 "
      />
      <label className="ml-2 text-sm font-medium text-gray-900">{label}</label>
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const Select = ({
  name,
  label,
  placeholder,
  options,
  setData,
  setErrors,
  error,
}) => {
  return (
    <div className="w-full mb-2 mx-auto">
      <label className="custom-label block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <select
        name={name}
        // required={required}
        onChange={(e) => onChange(e, setData, setErrors)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
        <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
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
  setData,
  setErrors,
  error,
}) => {
  return (
    <div className="w-full mb-2 mx-auto">
      <label
        htmlFor="checked-checkbox"
        className="ml-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        value={value}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(e, setData, setErrors)}
        className="w-full text-blue-600 focus:outline-none cursor-pointer bg-gray-100 rounded border-gray-300 "
      />
      {error && (
        <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
