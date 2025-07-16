   //Touch effect handlers
    function tou1(elem) {
      elem.style.background = "white";
      elem.style.color = "#111";
      elem.style.transform = "scale(1.05)";
    }

    function touend1(elem) {
      elem.style.background = "rgba(255, 255, 255, 0.15)";
      elem.style.color = "white";
      elem.style.transform = "scale(1)";
    }
        function tou11(elem) {
      elem.style.background = "white";
      elem.style.color = "#111";
      }

    function touend11(elem) {
      elem.style.background = "rgba(255, 255, 255, 0.15)";
      elem.style.color = "white";
      }
      function updatepage(){
  const today = new Date();
  const janmasthmi = today.getDate() === 17 && today.getMonth() === 6; // July is month 6 (0-based)

  if (janmasthmi) {
  const bgImages = [
  "pppp1.jpg",  // Image 1
  "pppp2.jpg",  // Image 2
  "pppp3.jpg",  // Image 3
  "pppp4.jpg",  // Image 4
  "pppp5.jpg"  // Image 5
];

let currentBgIndex = 0;
const bg0 = document.getElementById("bg0");

function changeBackground() {
  bg0.classList.remove("fade");
  
  setTimeout(() => {
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
    bg0.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('${bgImages[currentBgIndex]}') center center/cover no-repeat`;
    bg0.classList.add("fade");
  }, 100);
  }
// Start cycling every 6 seconds
setInterval(changeBackground, 4000);
    document.getElementById("pp1").style.display= "none";
   document.getElementById("pp2").style.display= "block";
   document.getElementById("a1").src ="janmasthmi.mp3";
   setTimeout(() => {
document.getElementById("halo").style.opacity = "0";
setTimeout(() => {
document.getElementById("halo").style.display = "none";
}, 200); // wait for fade-out to complete
}, 4000); // wait before starting fade
}
  else{
  document.getElementById("pp1").style.display= "block";
   document.getElementById("pp2").style.display= "none";
   document.getElementById("bg0").style.background="linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('pppp.jpg') center center/cover no-repeat";
   document.getElementById("a1").src ="krishna.mp3"
    document.getElementById("halo").style.opacity = "0";
  }
  }
  updatepage();
  function aud(){
  a1.play();  
  }  
  