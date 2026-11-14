document.getElementById("loginForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== "" && password !== "") {

        sessionStorage.setItem("admin", "true");

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Please enter username and password!");

    }

});