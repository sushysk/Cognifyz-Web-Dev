let container = document.querySelector(".container");
let timeNow = new Date().getHours();
let greeting = "";
let bgColor = "";

if (timeNow >= 5 && timeNow < 12) {
  greeting = "Good Morning";
  bgColor = "#FFD700"; // Gold for morning
} else if (timeNow >= 12 && timeNow < 18) {
  greeting = "Good Afternoon";
  bgColor = "#FF8C00"; // Dark Orange for afternoon
} else {
  greeting = "Good Evening";
  bgColor = "#483D8B"; // Dark Slate Blue for evening
}

container.innerHTML = `<h1>${greeting}</h1>`;
container.style.backgroundColor = bgColor;
