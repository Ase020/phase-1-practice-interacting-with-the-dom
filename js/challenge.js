document.addEventListener("DOMContentLoaded", (e) => {
   let count = 0;
   let intervalID;
   function startCount() {
      count += 1;
      counter.textContent = count;
   }
   const counter = document.getElementById("counter");
   intervalID = setInterval(startCount, 1000);

   const pauseBtn = document.getElementById("pause");
   pauseBtn.addEventListener("click", () => {
      clearInterval(intervalID);
      buttonsArray.forEach((btn) => disableButtons(btn));
      pauseBtn.textContent = "resume";
      console.log("paused");
   });

   //    Disable buttons when on pause
   const buttons = document.getElementsByTagName("button");
   let buttonsArray = [];

   for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id !== "pause") {
         buttonsArray.push(buttons[i]);
      }
   }

   function disableButtons(btn) {
      btn.setAttribute("disable", true);
   }

   console.log(buttonsArray);
});
