export const determineErrorMessage = (
  type: string,
  isNameDuplicate: boolean,
  fieldValid: boolean,
  isEmptyValue: boolean,
  value: string
): string => {
  if (isEmptyValue) {
    return "값이 비어있습니다.";
  } else if (type === "text" && isNameDuplicate) {
    return `${value}는 중복된 이름입니다.`;
  } else if (!fieldValid) {
    return type === "text"
      ? "3자 이상 입력해주세요."
      : "6자 이상 입력해주세요.";
  }
  return "";
};
