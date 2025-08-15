// Touch effect handlers
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

function updatepage() {
  const today = new Date();
  const janmasthmi = today.getDate() === 16 && today.getMonth() === 7; // August is 7 (0-based)

  const bg0 = document.getElementById("bg0");
  const halo = document.getElementById("halo");

  function fadeOutIn(callback) {
    bg0.style.transition = "opacity 1s ease";
    bg0.style.opacity = "0";
    setTimeout(() => {
      callback(); 
      bg0.style.opacity = "1";
    }, 500);
  }

  if (janmasthmi) {
    const bgImages = [
      "pppp1.jpg",
      "pppp2.jpg",
      "pppp3.jpg",
      "pppp4.jpg",
      "pppp5.jpg"
    ];

    let currentBgIndex = 0;

    function changeBackground() {
      fadeOutIn(() => {
        currentBgIndex = (currentBgIndex + 1) % bgImages.length;
        const currentImage = bgImages[currentBgIndex];

        // Change background
        bg0.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('${currentImage}') center center/cover no-repeat`;

        // Show halo only for pppp1
        if (currentImage === "pppp1.jpg") {
          halo.style.display = "block";
          halo.style.opacity = "1";
        } else {
          halo.style.opacity = "0";
          setTimeout(() => { halo.style.display = "none"; }, 200);
        }
      });
    }

    // First setup
    document.getElementById("pp1").style.display = "none";
    document.getElementById("pp2").style.display = "block";
    document.getElementById("a1").src = "janmasthmi.mp3";

    // First image with halo
    bg0.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('${bgImages[0]}') center center/cover no-repeat`;
    halo.style.display = "block";
    halo.style.opacity = "1";

    // Cycle every 4s
    setInterval(changeBackground, 4000);

  } else {
    document.getElementById("pp1").style.display = "block";
    document.getElementById("pp2").style.display = "none";
    bg0.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('pppp.jpg') center center/cover no-repeat";
    document.getElementById("a1").src = "krishna.mp3";
    halo.style.opacity = "0";
    halo.style.display = "none";
  }
}
updatepage();

function aud() {
  a1.play();
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    a1.pause();
  } else {
    a1.play();
  }
});