function showResult(e) {
  e.preventDefault();

  let p = document.getElementById("result");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let bio = document.getElementById("bio").value;
  let country = document.getElementById("country").value;
  let news = document.getElementById("newsletter").checked ? "yes" : "No";

  let formResult = `
  Name: ${name}<br>
  Email: ${email}<br>
  Date of Birth: ${dob}<br>
  Bio: ${bio}<br>
  Country: ${country}<br>
  Subscribe to Newsletter: ${news}
  `;

  p.innerHTML = formResult;
}

function showchange() {
  // alert("Name changed");
  let name = document.getElementById("name").value;
  let errorName = document.querySelector("#error-name");

  if (name.length < 3) {
    errorName.textContent = "Name must be atleast 3 characters";
    errorName.style.color = "red";
  } else {
    errorName.style.display = "none";
  }
}
function checkEmail() {
  // alert("Name changed");
  let email = document.getElementById("email").value;
  let errorSpan = document.querySelector("#error-email");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorSpan.textContent = "Please enter a valid email address.";
    errorSpan.style.color = "red";
    errorSpan.style.display = "block";
  } else {
    errorSpan.style.display = "none";
  }
}

function dateCheck() {
  let dob = document.getElementById("dob").value;
  let error = document.getElementById("error-date");
  let now = Date.now();

  if (dob == now) {
    error.textContent = "Don't enter todays day";
    error.style.color = "red";
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}
