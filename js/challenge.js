document.addEventListener("DOMContentLoaded", (e) => {
   let count = 0;
   let intervalID;
   function startCount() {
      count += 1;
      counter.textContent = count;
   }
   const counter = document.getElementById("counter");
   setInterval(startCount, 1000);

   const pauseBtn = document.getElementById("pause");
});
