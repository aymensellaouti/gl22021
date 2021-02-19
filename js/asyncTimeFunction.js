i = 5;
const idInterval = setInterval(function () {
  if (!i) {
    console.log("Boum");
    clearInterval(idInterval);
  } else {
    console.log(i--);
  }
}, 1000);
