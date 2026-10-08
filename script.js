const button = document.getElementById("exploreButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Thanks for exploring my website! More projects coming soon.";
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    themeToggle.textContent = isDarkTheme ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDarkTheme));
});