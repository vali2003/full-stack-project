// Validation for Form 7
document.getElementById("quoteForm7").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("nameError7").textContent = "";
    document.getElementById("phoneError7").textContent = "";
    document.getElementById("emailError7").textContent = "";

    var name = document.getElementById("inputName7").value.trim();
    var phone = document.getElementById("inputPhone7").value.trim();
    var email = document.getElementById("inputEmail7").value.trim();

    var isValid = true;

    if (name === "") {
        document.getElementById("nameError7").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError7").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError7").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("quoteForm7").submit();
    }
});

// Validation for Form 8
document.getElementById("quoteForm8").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("nameError8").textContent = "";
    document.getElementById("phoneError8").textContent = "";
    document.getElementById("emailError8").textContent = "";

    var name = document.getElementById("inputName8").value.trim();
    var phone = document.getElementById("inputPhone8").value.trim();
    var email = document.getElementById("inputEmail8").value.trim();

    var isValid = true;

    if (name === "") {
        document.getElementById("nameError8").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError8").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError8").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("quoteForm8").submit();
    }
});
 
    // Back to top button
   
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#c99a36 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;