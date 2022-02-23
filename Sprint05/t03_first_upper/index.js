exports.firstUpper = (input) => {
  if (typeof input == "string") {
    let str = input.trim();
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  } else {
    return "";
  }
};
