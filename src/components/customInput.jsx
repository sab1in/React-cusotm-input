import React from "react";

const CustomInput = ({
  name,
  type,
  value,
  onChange,
  checkboxChange,
  handleFileChange,
  placeholder,
  label,
  options,
  error,
  min,
  max,
  step,
  inputStyle,
}) => {
  if (
    type === "text" ||
    type === "password" ||
    type === "email" ||
    type === "date"
  ) {
    let val = "";
    if (value) {
      val = value;
    }
    return (
      <div className="w-full mb-2 mx-auto">
        <label
          htmlFor={name}
          className={`block mb-2 text-sm font-medium text-gray-900`}
        >
          {label}
        </label>
        <input
          id={name}
          className={`${
            inputStyle
              ? inputStyle
              : "bg-gray-50 border border-gray-300 transition duration-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          } `}
          // required
          name={name}
          type={type}
          value={val}
          // required={required}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
        {error && (
          <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  } else if (type === "select") {
    return (
      <div className="w-full mb-2 mx-auto">
        <label className="custom-label block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <select
          name={name}
          // required={required}
          onChange={(e) => onChange(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
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
  } else if (type === "checkbox") {
    return (
      <div className="flex mb-2 items-center">
        <input
          checked={value}
          type="checkbox"
          name={name}
          onChange={(e) => checkboxChange(e)}
          className="w-4 h-4 text-blue-600 focus:outline-none cursor-pointer bg-gray-100 rounded border-gray-300 "
        />
        <label
          htmlFor="checked-checkbox"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {error && (
          <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  } else if (type === "file") {
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Upload file
        </label>
        <input
          name={name}
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded py-2 px-3 border border-gray-300 cursor-pointer  focus:outline-none "
          type="file"
        />
        {error && (
          <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  } else if (type === "range") {
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
          onChange={(e) => onChange(e, value)}
          className="w-full text-blue-600 focus:outline-none cursor-pointer bg-gray-100 rounded border-gray-300 "
        />

        {error && (
          <p className="custom-error mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
  return <div>no input</div>;
};

export default CustomInput;
