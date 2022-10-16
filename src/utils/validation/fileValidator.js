export const ImageValidator = (file) => {
  const validExtensions = ["png", "jpg", "jpeg", "webp"];
  const fileExtension = file.type.split("/")[1];
  return validExtensions.includes(fileExtension);
};

export const DocValidator = (file) => {
  const validExtensions = ["doc", "docx", "odt", "pdf"];
  const fileExtension = file?.type?.split("/")[1];
  return validExtensions.includes(fileExtension);
};
