const hobbiesUnOrderedList = document.querySelector(".hobbiesList");
const disLikeUnOrderedList = document.querySelector(".dislikeList");
const timeDisplay = document.querySelector(".time");
const hobbiesList = [
  "Listening to Music",
  "Reading news",
  "Learning",
  "Playing",
];
const disLikeList = ["Gossip", "Lazy", "Lying"];

const mapping = hobbiesList.forEach((list) => {
  const creationofList = document.createElement("li");

  creationofList.textContent = list;
  hobbiesUnOrderedList.appendChild(creationofList);
});
const dislikeMapping = disLikeList.forEach((list) => {
  const creationofList = document.createElement("li");

  creationofList.textContent = list;
  disLikeUnOrderedList.appendChild(creationofList);
});

setInterval(() => {
  const milliDate = Date.now();
  timeDisplay.textContent = milliDate;
}, 1000);
