exports.checkDivision = (start_num = 1, end_num = 60) => {
  for (let num = start_num; num <= end_num; num++) {
    let result = "The number ";
    result += num;
    if (num % 2 == 0 && num % 3 == 0) {
      result += " is divisible by 2, is divisible by 3";
    } else if (num % 2 == 0) {
      result += " is divisible by 2";
    } else if (num % 3 == 0) {
      result += " is divisible by 3";
    }
    if (num % 10 == 0) {
      result += ", is divisible by 10";
    }
    if (result.length <= 5) {
      result += " -";
    }

    console.log(result + "\n");
  }
};