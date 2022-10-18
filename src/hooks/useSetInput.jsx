const useSetInput = (setData, setErrors) => {
  return (key, value, error) => {
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
};

export default useSetInput;
