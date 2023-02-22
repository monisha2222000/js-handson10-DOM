const flexButton = document.getElementById("flex-button");
const flexCard = document.getElementById("flex-card");
flexButton.addEventListener("click", function () {
  flexCard.style.flexDirection = "column";
});

function timer() {
  const time = new Date();
  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  console.log(hr, min, sec);
  document.getElementById("clock").innerText = hr + ":" + min + ":" + sec;
}
setInterval(timer, 1000);

const selectValue = () => {
  document.getElementById("temp").innerText =
    document.getElementById("choose").value;
};