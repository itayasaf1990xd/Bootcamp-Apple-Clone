(() => {
  const randomSet = ["pink", "blue"];
  const randomNumber = Math.floor(Math.random() * randomSet.length);

  if (randomSet[randomNumber] === "pink") {
    document.getElementById("holiday-container").style.backgroundColor =
      "#fbedf9";
    document.getElementById("holiday-image-left").src =
      "./assets/images/airpods__b0941p5gmwj6_medium_2x.png";
    document.getElementById("holiday-image-center").src =
      "./assets/images/watch__csqqcayzqueu_largetall.png";
    document.getElementById("holiday-image-right").src =
      "./assets/images/ipadmini__f0pd6cilwaie_largetall.png";
  } else {
    document.getElementById("holiday-container").style.backgroundColor =
      "#eaf2fc";
    document.getElementById("holiday-image-left").src =
      "./assets/images/iphone__cyamwsdph26a_medium_2x.png";
    document.getElementById("holiday-image-center").src =
      "./assets/images/airpods__b0941p5gmwj6_medium_2x.png";
    document.getElementById("holiday-image-right").src =
      "./assets/images/ipad__bq6djchifrbm_medium_2x.png";
  }
})();
