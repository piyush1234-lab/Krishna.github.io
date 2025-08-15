// Carousel Logic
    const slides = document.querySelector('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
      slides.style.transform = `translateX(${-i * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active-dot'));
      dots[i].classList.add('active-dot');
    }

    function nextSlide() {
      index = (index + 1) % dots.length;
      showSlide(index);
    }

    setInterval(nextSlide, 3000);

    function dottouch(i) {
      index = i;
      showSlide(index);
    }

    // Verse Logic
    const verses = document.querySelectorAll(".verse");
const audios = document.querySelectorAll(".verse-audio");
let currentVerse = 0;

function showVerse(newIndex, direction) {
  if (newIndex === currentVerse) return;

  const current = verses[currentVerse];
  const next = verses[newIndex];

  current.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  // Animate the current verse out
if (direction === "next") {
  current.style.transform = "translateX(-100%)";
} else {
  current.style.transform = "translateX(100%)";
}
current.style.opacity = "0";

// Prepare the next verse for entry
next.style.display = "block";
next.style.transition = "none"; // Disable transition during setup

if (direction === "next") {
  next.style.transform = "translateX(100%)";
} else {
  next.style.transform = "translateX(-100%)";
}
next.style.opacity = "0";

// Force reflow to allow transition to trigger
void next.offsetWidth;

  next.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  next.style.transform = "translateX(0)";
  next.style.opacity = "1";

  setTimeout(() => {
    current.style.display = "none";
  }, 600);

// 🔊 Pause all audios and remove looping
audios.forEach(audio => {
  audio.pause();
  audio.currentTime = 0;
  audio.loop = false; // Ensure only the current one loops
});

// 🔊 Play and loop current verse audio
audios[newIndex].loop = true;
audios[newIndex].play();

  currentVerse = newIndex;
}
    function next() {
    const au1 =
document.getElementById("au1")
  au1.pause();         // Stop shlok1.mp3
  au1.currentTime = 0; // Reset it
  let newIndex = (currentVerse + 1) % verses.length;
  showVerse(newIndex, "next");
}

function prev() {
const au1 =
document.getElementById("au1")
  au1.pause();
  au1.currentTime = 0;
  let newIndex = (currentVerse - 1 + verses.length) % verses.length;
  showVerse(newIndex, "prev");
}

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
    function sca(elem){
        elem.style.transform="scale(0.9)";
    }
    function desca(elem){
        elem.style.transform="scale(1)";
    }
function pl() {
  const playOnce = () => {
    if (currentVerse === 0) {
      au1.play();
    }
  };      

  document.addEventListener("click", playOnce, { once: true });
  document.addEventListener("touchstart", playOnce, { once: true });
  document.addEventListener("mousemove", playOnce, { once: true });
}

let lastPlayedAudioId = null;
let lastPlayedTime = 0;

function pauseAllAudios() {
    document.querySelectorAll("audio").forEach(audio => {
        if (!audio.paused) {
            lastPlayedAudioId = audio.id; 
            lastPlayedTime = audio.currentTime; // Save current position
        }
        audio.pause();
        audio.loop = false; // prevent unwanted loop resume
    });
}

function resumeLastAudio() {
    if (lastPlayedAudioId && document.visibilityState === "visible") {
        const audio = document.getElementById(lastPlayedAudioId);
        if (audio) {
            audio.currentTime = lastPlayedTime; // restore position
            audio.play().catch(() => {
                // autoplay may be blocked
            });
        }
    }
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        pauseAllAudios();
    } else {
        resumeLastAudio();
    }
});