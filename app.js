dateInput = document.querySelector("#dateInput");
let numberInput = document.querySelector("#numberInput");
let submitBtn = document.querySelector("#submitBtn");
let resultText = document.querySelector("#result");
let privacyMsg = document.querySelector("#privacyMsg");
let btnClose = document.querySelector("#close-button");
let footer = document.querySelector(".footer");

window.addEventListener("load", displayPrivacyMsg);
// privacyMsg.style.display = "none";

function displayPrivacyMsg() {
  setTimeout(function () {
    privacyMsg.style.display = "none";
  }, 10000);
}

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
    resultText.innerHTML = `
    <p>Congratulations! your birthday is lucky. </p>
    <img src="https://media.giphy.com/media/l2Sq2ySYEIl3mzVgk/giphy.gif" width="300px" height="250px" alt="celebration gif">
    `;
  } else {
    resultText.innerHTML = `
    <p>Sorry, your birthday is not lucky.</p
    <p>You missed by ${sum % luckyNumber} days</p>
    <img src="https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif" width="300px" height="250px" alt="sad gif">
    `;
  }

  footer.style.position = "static";
}

function hidePrivacy() {
  privacyMsg.style.display = "none";
}

submitBtn.addEventListener("click", btnClickHandler);
btnClose.addEventListener("click", hidePrivacy);
