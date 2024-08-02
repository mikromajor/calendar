export const passwordWalidator = (
  passwordValue: string
) => {
  let passwordMessage = "";
  if (passwordValue.length <= 8) {
    passwordMessage +=
      " Password must have more than 8 charts.";
  } else {
    //A password should contain at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !.
    const regexUpperCase = /^(?=.*?[A-Z]).{1,}$/;
    const regexLowerCase = /^(?=.*?[a-z]).{1,}$/;
    const regexDigit = /^(?=.*?[0-9]).{1,}$/;
    const regexSpecSymbol = /^(?=.*?[#?!@$%^&*-]).{1,}$/;

    // common Regex to cover all cases
    // const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordValue.match(regexUpperCase)) {
      passwordMessage +=
        " Password must be this at least one capital letter.";
    } else if (!passwordValue.match(regexLowerCase)) {
      passwordMessage +=
        " Password must be this at least one small letter.";
    } else if (!passwordValue.match(regexDigit)) {
      passwordMessage +=
        " Password must be this at least one digit.";
    } else if (!passwordValue.match(regexSpecSymbol)) {
      passwordMessage +=
        " Password must be this at least one special symbol.";
    }
  }
  return passwordMessage;
};
