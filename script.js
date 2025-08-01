function showResult(e) {
  e.preventDefault();

  let p = document.getElementById("result");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let dobinput = document.getElementById("dob").value;
  let bio = document.getElementById("bio").value;
  let country = document.getElementById("country").value;
  let news = document.getElementById("newsletter").checked ? "yes" : "No";

  let formResult = `
  Name: ${name}<br>
  Email: ${email}<br>
  Date of Birth: ${dobinput}<br>
  Bio: ${bio}<br>
  Country: ${country}<br>
  Subscribe to Newsletter: ${news}
  `;

  p.innerHTML = formResult;

  let errorName = document.querySelector("#error-name");

  if (name.length < 3) {
    errorName.textContent = "Name must be atleast 3 characters";
    errorName.style.color = "red";
  } else {
    errorName.style.display = "none";
  }

  let errorSpan = document.querySelector("#error-email");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorSpan.textContent = "Please enter a valid email address.";
    errorSpan.style.color = "red";
    errorSpan.style.display = "block";
  } else {
    errorSpan.style.display = "none";
  }

  let errorDate = document.getElementById("error-date");
  if (!dobinput) {
    errorDate.textContent = "Date of birth can not be empty";
    errorDate.style.color = "red";
    errorDate.style.display = "block";
    isvalid = false;
  }
  let dob = new Date(dobInput);
  let now = new Date();
  let dobMidnight = new Date(
    dob.getFullYear(),
    dob.getMonth(),
    dob.getDate()
  ).getTime();
  let todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).getTime();

  if (dobMidnight === todayMidnight) {
    errorDate.textContent = "Don't enter today's date";
    errorDate.style.color = "red";
    errorDate.style.display = "block";
    isValid = false;
  } else if (dobMidnight > todayMidnight) {
    errorDate.textContent = "Invalid date of birth (future date)";
    errorDate.style.color = "red";
    errorDate.style.display = "block";
    isValid = false;
  } else {
    errorDate.style.display = "none";
  }
}

// function showchange() {
//   // alert("Name changed");
//   let name = document.getElementById("name").value;
// }
// function checkEmail() {
//   // alert("Name changed");
//   let email = document.getElementById("email").value;
// }

// function dateCheck() {
//   let dob = document.getElementById("dob").value;
// }
