// Q6 Write program to take a month as an input from the user and find out whether the month has 31 days or not.

function checkMonth(input) {
  let monthWithRequiredDays = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
  ];
  for (let i = 0; i < monthWithRequiredDays.length; i++) {
    if (input.toLowerCase() === monthWithRequiredDays[i].toLowerCase()) {
      console.log("from if block");
      return "It's a month with 31 days";
    }
  }
  return "It's NOT a month with 31 days";
}

console.log(checkMonth("july"));
