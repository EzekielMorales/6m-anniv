/* ===================================================================
   Full Procedural SVG Scrapbook Loy Krathong Web App
   สุขสันต์วันครบรอบ 6 เดือนนะมิ้ว · ปั้นฉากและกระทงด้วย SVG แท้ 100%
   =================================================================== */

// Global State
let currentIndex = 0;
const totalKrathongs = 3;

const krathongMetadata = [
  { id: 'banana', name: 'กระทงใบตอง', mountId: 'mount-banana' },
  { id: 'bread', name: 'กระทงขนมปัง', mountId: 'mount-bread' },
  { id: 'coconut', name: 'กระทงกะลามะพร้าว', mountId: 'mount-coconut' }
];

// DOM Elements - Selection Screen
const carouselTrack = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('carousel-dots');
const dots = dotsContainer.querySelectorAll('.dot');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselViewport = document.getElementById('carousel-viewport');
const confirmKrathongBtn = document.getElementById('confirm-krathong-btn');
const selectScreen = document.getElementById('select-screen');
const bannerTitle = document.getElementById('banner-title');

// DOM Elements - River Stage Screen
const riverScreen = document.getElementById('river-screen');
const stageContainer = document.getElementById('stage-container');
const svgSceneMount = document.getElementById('svg-scene-mount');
const krathongActor = document.getElementById('krathong-actor');
const actorSvgMount = document.getElementById('actor-svg-mount');
const lightCandleBtn = document.getElementById('light-candle-btn');
const floatKrathongBtn = document.getElementById('float-krathong-btn');
const waterRipplesBox = document.getElementById('water-ripples-box');
const skyLanternsContainer = document.getElementById('sky-lanterns-container');

// Fireworks Text Elements
const raknaFirework = document.getElementById('rakna-firework');
const annivFirework = document.getElementById('anniv-firework');
const openNoteBtn = document.getElementById('open-note-btn');

// Note Modal Elements
const noteModal = document.getElementById('note-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const closeNoteBtn = document.getElementById('close-note-btn');
const restartFlowBtn = document.getElementById('restart-flow-btn');
const confettiBtn = document.getElementById('confetti-btn');

// Music & Sound Elements
const bgMusic = document.getElementById('bg-music');
const soundBtn = document.getElementById('sound-btn');
const soundIcon = document.getElementById('sound-icon');

let rippleInterval = null;
let lanternInterval = null;

// ==================== 1. Mount Pure SVG Assets ====================

function initSvgAssets() {
  // Mount 3 SVG Krathongs in Carousel Slides
  document.getElementById('mount-banana').innerHTML = SVG_ASSETS.banana;
  document.getElementById('mount-bread').innerHTML = SVG_ASSETS.bread;
  document.getElementById('mount-coconut').innerHTML = SVG_ASSETS.coconut;

  // Mount Pure SVG Riverside Scene
  svgSceneMount.innerHTML = SVG_SCENE;
}

// ==================== 2. Carousel Navigation ====================

function updateCarousel(index) {
  currentIndex = (index + totalKrathongs) % totalKrathongs;

  // Slide track
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Update banner title text
  bannerTitle.textContent = krathongMetadata[currentIndex].name;

  // Update slide classes
  carouselSlides.forEach((slide, idx) => {
    if (idx === currentIndex) slide.classList.add('active');
    else slide.classList.remove('active');
  });

  // Update dots
  dots.forEach((dot, idx) => {
    if (idx === currentIndex) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));
nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-index'), 10);
    updateCarousel(idx);
  });
});

// Keyboard Navigation (Arrow Keys)
window.addEventListener('keydown', (e) => {
  if (selectScreen.classList.contains('active')) {
    if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
    else if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
  }
});

// Touch Swipe Support
let touchStartX = 0;
let touchEndX = 0;

carouselViewport.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carouselViewport.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 40) {
    if (diff < 0) updateCarousel(currentIndex + 1);
    else updateCarousel(currentIndex - 1);
  }
}, { passive: true });

// ==================== 3. Sound & Music Control ====================

function playMusic() {
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().then(() => {
      soundIcon.textContent = '🔊';
    }).catch(() => {});
  }
}

soundBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!bgMusic) return;
  if (bgMusic.paused) {
    bgMusic.play();
    soundIcon.textContent = '🔊';
  } else {
    bgMusic.pause();
    soundIcon.textContent = '🔇';
  }
});

// ==================== 4. Transition: Selection -> River Scene ====================

confirmKrathongBtn.addEventListener('click', () => {
  playMusic();

  const chosenMeta = krathongMetadata[currentIndex];
  // Mount the chosen SVG into the river actor container
  actorSvgMount.innerHTML = SVG_ASSETS[chosenMeta.id];

  // Switch screens
  selectScreen.classList.remove('active');
  riverScreen.classList.add('active');

  // Reset Krathong Actor: On bank, candle unlit
  krathongActor.className = 'krathong-actor on-bank';

  // Set action buttons: Show "จุดเทียน", Hide "ลอยกระทง"
  lightCandleBtn.classList.remove('hidden');
  floatKrathongBtn.classList.add('hidden');
  openNoteBtn.classList.add('hidden');
  raknaFirework.classList.add('hidden');
  annivFirework.classList.add('hidden');
  noteModal.classList.add('hidden');

  // Start background ambient sky lanterns
  startAmbientLanterns();
});

// ==================== 5. Step 2A: จุดเทียน (Light Candle) ====================

lightCandleBtn.addEventListener('click', () => {
  playMusic();

  // Ignite flame by adding class to the krathong actor
  krathongActor.classList.add('candle-lit');

  // Small celebratory sparkle
  if (window.confetti) {
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#ffeaa7', '#ff7675', '#fdcb6e']
    });
  }

  // Switch buttons: Hide "จุดเทียน", Show "ลอยกระทง"
  lightCandleBtn.classList.add('hidden');
  floatKrathongBtn.classList.remove('hidden');
});

// ==================== 6. Step 2B: ลอยกระทง (Float Krathong) ====================

floatKrathongBtn.addEventListener('click', () => {
  // Hide float button
  floatKrathongBtn.classList.add('hidden');

  // Start Krathong river drift animation
  krathongActor.className = 'krathong-actor candle-lit floating';

  // Start water ripples
  startWaterRipples();

  // Launch sky fireworks sequence:
  // 1. "รักนะมิ้ว" at 3.5s
  setTimeout(triggerRaknaFirework, 3500);

  // 2. "สุขสันต์วันครบรอบ 6 เดือน" at 8.0s
  setTimeout(triggerAnnivFirework, 8000);

  // 3. Show Notebook Letter to Mew at 12.5s
  setTimeout(triggerLoveLetterModal, 12500);
});

// ==================== 7. Fireworks Sequences ====================

function triggerRaknaFirework() {
  if (window.confetti) {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.35 },
      colors: ['#ff7675', '#fd79a8', '#ffeaa7', '#a29bfe']
    });
  }

  raknaFirework.classList.remove('hidden');
}

function triggerAnnivFirework() {
  // Hide previous firework
  raknaFirework.classList.add('hidden');

  if (window.confetti) {
    confetti({
      particleCount: 85,
      spread: 90,
      origin: { y: 0.3 },
      colors: ['#ff7675', '#ffeaa7', '#00cec9', '#fdcb6e', '#e84393']
    });
  }

  annivFirework.classList.remove('hidden');
}

function triggerLoveLetterModal() {
  // Hide firework banner
  annivFirework.classList.add('hidden');

  // Reveal persistent "อ่านจดหมายถึงมิ้ว" button on the screen
  openNoteBtn.classList.remove('hidden');

  // Slide up notebook letter modal
  noteModal.classList.remove('hidden');
}

// ==================== 8. River Ambient Effects ====================

function startWaterRipples() {
  if (rippleInterval) clearInterval(rippleInterval);

  function createRipple() {
    if (!riverScreen.classList.contains('active')) return;

    const actorRect = krathongActor.getBoundingClientRect();
    const stageRect = stageContainer.getBoundingClientRect();

    const rx = actorRect.left + actorRect.width / 2 - stageRect.left;
    const ry = actorRect.bottom - 10 - stageRect.top;

    const ring = document.createElement('div');
    ring.className = 'ripple-circle';
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    ring.style.width = '60px';
    ring.style.height = '20px';

    waterRipplesBox.appendChild(ring);

    setTimeout(() => {
      if (ring.parentNode) ring.remove();
    }, 2800);
  }

  createRipple();
  rippleInterval = setInterval(createRipple, 1400);
}

function spawnSkyLantern() {
  if (!riverScreen.classList.contains('active')) return;

  const lantern = document.createElement('div');
  lantern.className = 'lantern-fly';

  const stageWidth = stageContainer.clientWidth;
  const x = Math.random() * (stageWidth - 80) + 30;
  lantern.style.left = `${x}px`;
  lantern.style.bottom = '110px';
  lantern.style.animationDuration = `${10 + Math.random() * 6}s`;

  skyLanternsContainer.appendChild(lantern);

  setTimeout(() => {
    if (lantern.parentNode) lantern.remove();
  }, 16000);
}

function startAmbientLanterns() {
  if (lanternInterval) clearInterval(lanternInterval);
  spawnSkyLantern();
  lanternInterval = setInterval(spawnSkyLantern, 3200);
}

// ==================== 9. Letter Modal Controls ====================

closeNoteBtn.addEventListener('click', () => {
  noteModal.classList.add('hidden');
});

modalBackdrop.addEventListener('click', () => {
  noteModal.classList.add('hidden');
});

openNoteBtn.addEventListener('click', () => {
  noteModal.classList.remove('hidden');
});

confettiBtn.addEventListener('click', () => {
  if (window.confetti) {
    confetti({
      particleCount: 90,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#ff7675', '#ffeaa7', '#fd79a8', '#55efc4', '#a29bfe']
    });
  }
});

// Restart Flow: Back to Selection Screen
restartFlowBtn.addEventListener('click', () => {
  noteModal.classList.add('hidden');
  riverScreen.classList.remove('active');
  selectScreen.classList.add('active');

  if (rippleInterval) clearInterval(rippleInterval);
  if (lanternInterval) clearInterval(lanternInterval);
});

// Initialize on Load
initSvgAssets();
updateCarousel(0);
