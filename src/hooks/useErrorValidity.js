const useErrorValidity = () => {
  return (error, FormList) => {
    const required = FormList.filter((e) => e.require).map((e) => e.name);
    const has_fields = required.every((e) => e in error);

    return has_fields && Object.values(error).every((x) => x === false);
  };
};
export default useErrorValidity;
