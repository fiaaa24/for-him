// ---------- WHY I LOVE YOU SECTION ----------

// 20 reasons
const reasons = [
"I love you because my heart slows down when I think of you.In a loud world, you feel like silence that heals.",
"I love you because your presence feels like home,even when everything else feels unfamiliar.",
"I love you because you make ordinary moments feel meaningful,without even trying.",
"I love you because loving you feels easy,like breathing without thinking about it.",
"I love you because your care shows in the smallest details",
"I love you because with you, I don’t feel alone,even in silence.",
"তুমি আমার সাথে কথা বললে আমার মনটা অকারণে শান্ত হয়ে যায়।দিনটা যতই খারাপ হোক, তোমার কথায় সব ধীরে ধীরে ঠিক হয়ে যায়।",
"তুমি আমার জন্য effort দাও।ছোট হলেও, সেটা সত্যিকারের।",
"I love you because you make space for my heart,even on days it feels too heavy.",
"I love you because with you, I don’t have to pretend.I can exist exactly as I am.",
"I love you because you remember things I thought were forgettable",
"I love you because you turn simple moments into memories,without realizing you’re doing it.",
"I love you because you feel like warmth on a cold day,soft, comforting, and deeply needed.",
"I love you because with you, love feels safe and safety is the most beautiful thing.",
"I love you because you feel like home,no matter where I am.",
"I love you because loving you feels like coming back to myself.",
"I love you because you make my heart feel understood,without needing too many words.",
"I love you because your love feels intentional,not accidental.",
"আমি তোমাকে ভালোবাসি কারণ তুমি “তুমি”।এর চেয়ে বড় কোনো reason আমার দরকার নেই।",
"You are simply you, and I love that."
];

// index must be declared AFTER reasons
let currentReason = 0;

// wait until page loads
window.onload = function () {
  const reasonText = document.getElementById("reasonText");
  if (reasonText) {
    reasonText.innerText = reasons[currentReason];
  }
};

function nextReason() {
  currentReason = (currentReason + 1) % reasons.length;
  const reasonText = document.getElementById("reasonText");

  // reset animation
  reasonText.style.animation = "none";
  reasonText.offsetHeight;
  reasonText.style.animation = "slideUp 0.6s ease";

  reasonText.innerText = reasons[currentReason];
}

// ---------- SECTION SWITCHING ----------
function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function toggleLetter(index) {
  const letters = document.querySelectorAll(".letter-box");

  // চাইলে একসাথে একটাই open থাকবে
  letters.forEach((box, i) => {
    if (i === index) {
      box.classList.toggle("active");
    } else {
      box.classList.remove("active");
    }
  });
}

