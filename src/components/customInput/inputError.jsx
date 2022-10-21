const InputError = (error) => {
  return (
    error && (
      <p className="custom-error mt-1 text-sm text-red-600">
        {error === true && "invalid data"}
      </p>
    )
  );
};

export default InputError;
