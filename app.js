dateInput = document.querySelector("#dateInput");
let numberInput = document.querySelector("#numberInput");
let submitBtn = document.querySelector("#submitBtn");

function btnClickHandler() {
  const dateValue = dateInput.value;
  const luckyNumber = numberInput.value;
  console.log(dateValue);
  console.log(luckyNumber);

  let birthDate = parseInt(dateValue.split("-").join(""));
  console.log(birthDate);
  console.log(typeof birthDate);
  // let year = birthDate[0];
  // let month = birthDate[1];
  // let date = birthDate[2];
  // console.log(year);
  // console.log(month);
  // console.log(date);
  let sum = 0;
  while (birthDate > 0) {
    let remainder;
    remainder = birthDate % 10;
    sum = sum + remainder;
    // console.log(remainder);
    birthDate = Math.floor(birthDate / 10);
  }
  console.log("Sum is ", sum);

  const result = sum % luckyNumber === 0 ? true : false;

  if (result) {
    console.log("Congratulations your birthday is lucky");
  } else {
    console.log("Your birthday is not lucky");
    console.log(`You missed by ${sum % luckyNumber} days`);
  }
}

submitBtn.addEventListener("click", btnClickHandler);
