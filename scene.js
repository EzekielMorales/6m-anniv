// Procedural Fullscreen Scrapbook Riverside Scene in Pure SVG
// วาดฉากแม่น้ำสมุดเส้นบรรทัด วัด แมวน้อย โคมลอย และกระทง ด้วย SVG แท้ 100%

const SVG_SCENE = `
<svg viewBox="0 0 1024 700" preserveAspectRatio="xMidYMid slice" class="svg-stage-canvas" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Paper Shadow -->
    <filter id="scene-paper-shadow" x="-5%" y="-5%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#2a3b4c" flood-opacity="0.18"/>
    </filter>
    <!-- Moon Glow -->
    <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff9c4" stop-opacity="1"/>
      <stop offset="60%" stop-color="#fff59d" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#fff59d" stop-opacity="0"/>
    </radialGradient>
    <!-- Lantern Warm Radial -->
    <radialGradient id="lantern-radial" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#ffeb3b" stop-opacity="0.9"/>
      <stop offset="70%" stop-color="#ff9800" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#ff9800" stop-opacity="0"/>
    </radialGradient>
    <!-- Grass Grid Pattern -->
    <pattern id="grid-grass" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="#a8d5ba"/>
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#90c5a4" stroke-width="1.2"/>
    </pattern>
  </defs>

  <!-- ================= 1. NOTEBOOK LINED PAPER BACKGROUND ================= -->
  <rect width="1024" height="700" fill="#fcf9f2"/>
  
  <!-- Blue Ruled Horizontal Lines -->
  <g stroke="#dce7f5" stroke-width="1.6" opacity="0.95">
    <line x1="0" y1="28" x2="1024" y2="28"/>
    <line x1="0" y1="56" x2="1024" y2="56"/>
    <line x1="0" y1="84" x2="1024" y2="84"/>
    <line x1="0" y1="112" x2="1024" y2="112"/>
    <line x1="0" y1="140" x2="1024" y2="140"/>
    <line x1="0" y1="168" x2="1024" y2="168"/>
    <line x1="0" y1="196" x2="1024" y2="196"/>
    <line x1="0" y1="224" x2="1024" y2="224"/>
    <line x1="0" y1="252" x2="1024" y2="252"/>
    <line x1="0" y1="280" x2="1024" y2="280"/>
    <line x1="0" y1="308" x2="1024" y2="308"/>
    <line x1="0" y1="336" x2="1024" y2="336"/>
    <line x1="0" y1="364" x2="1024" y2="364"/>
    <line x1="0" y1="392" x2="1024" y2="392"/>
    <line x1="0" y1="420" x2="1024" y2="420"/>
    <line x1="0" y1="448" x2="1024" y2="448"/>
    <line x1="0" y1="476" x2="1024" y2="476"/>
    <line x1="0" y1="504" x2="1024" y2="504"/>
    <line x1="0" y1="532" x2="1024" y2="532"/>
    <line x1="0" y1="560" x2="1024" y2="560"/>
    <line x1="0" y1="588" x2="1024" y2="588"/>
    <line x1="0" y1="616" x2="1024" y2="616"/>
    <line x1="0" y1="644" x2="1024" y2="644"/>
    <line x1="0" y1="672" x2="1024" y2="672"/>
  </g>

  <!-- Red Margin Vertical Line -->
  <line x1="160" y1="0" x2="160" y2="700" stroke="#f48fb1" stroke-width="2" opacity="0.6"/>
  <line x1="880" y1="0" x2="880" y2="700" stroke="#f48fb1" stroke-width="2" opacity="0.4"/>

  <!-- ================= 2. SKY ELEMENTS (MOON, CLOUD, STARS) ================= -->
  <!-- Sleeping Yellow Moon Sticker -->
  <g class="sticker-moon" filter="url(#scene-paper-shadow)" transform="translate(245, 125)">
    <circle cx="0" cy="0" r="75" fill="url(#moon-glow)"/>
    <circle cx="0" cy="0" r="50" fill="#fff59d" stroke="#333" stroke-width="4"/>
    <!-- Sleeping Eyes -->
    <path d="M-22,-6 Q-14,2 -6,-6" fill="none" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M6,-6 Q14,2 22,-6" fill="none" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Smile -->
    <path d="M-8,14 Q0,22 8,14" fill="none" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Pink Cheeks -->
    <ellipse cx="-24" cy="10" rx="9" ry="6" fill="#ff7675" opacity="0.7"/>
    <ellipse cx="24" cy="10" rx="9" ry="6" fill="#ff7675" opacity="0.7"/>
    <!-- Moon Craters -->
    <circle cx="28" cy="-26" r="6" fill="none" stroke="#ebd068" stroke-width="2.5"/>
  </g>

  <!-- Smiling Puffy Paper Cloud -->
  <g class="sticker-cloud" filter="url(#scene-paper-shadow)" transform="translate(435, 110)">
    <path d="M-60,18 C-75,18 -85,-2 -70,-18 C-75,-38 -55,-48 -35,-42 C-25,-58 10,-60 25,-42 C45,-48 68,-36 62,-18 C78,-2 68,18 52,18 Z" 
          fill="#ffffff" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
    <!-- Face -->
    <circle cx="-12" cy="-14" r="3" fill="#333"/>
    <circle cx="12" cy="-14" r="3" fill="#333"/>
    <path d="M-6,-4 Q0,2 6,-4" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="-18" cy="-8" rx="6" ry="3.5" fill="#ffb8b8"/>
    <ellipse cx="18" cy="-8" rx="6" ry="3.5" fill="#ffb8b8"/>
  </g>

  <!-- Paper Cutout Stars -->
  <g class="paper-stars" fill="#fff9c4" stroke="#333" stroke-width="3" stroke-linejoin="round" filter="url(#scene-paper-shadow)">
    <polygon points="105,80 110,95 125,95 113,105 117,120 105,110 93,120 97,105 85,95 100,95" transform="scale(0.8) translate(25,-10)"/>
    <polygon points="105,80 110,95 125,95 113,105 117,120 105,110 93,120 97,105 85,95 100,95" transform="scale(0.65) translate(460,5)"/>
    <polygon points="105,80 110,95 125,95 113,105 117,120 105,110 93,120 97,105 85,95 100,95" transform="scale(0.6) translate(660,120)"/>
    <polygon points="105,80 110,95 125,95 113,105 117,120 105,110 93,120 97,105 85,95 100,95" transform="scale(0.7) translate(1210,130)"/>
    <polygon points="105,80 110,95 125,95 113,105 117,120 105,110 93,120 97,105 85,95 100,95" transform="scale(0.55) translate(1380,280)"/>
    <polygon points="105,80 110,95 125,95 113,105 117,120 105,110 93,120 97,105 85,95 100,95" transform="scale(0.6) translate(150,420)"/>
  </g>

  <!-- Background Floating Sky Lanterns (โคมลอย) -->
  <g class="ambient-sky-lanterns" filter="url(#scene-paper-shadow)">
    <!-- Lantern 1 -->
    <g transform="translate(350, 260) scale(0.6)">
      <circle cx="0" cy="0" r="40" fill="url(#lantern-radial)"/>
      <path d="M-18,-35 L18,-35 L14,35 L-14,35 Z" fill="#ffb74d" stroke="#333" stroke-width="3"/>
      <line x1="-12" y1="-10" x2="12" y2="-10" stroke="#f57c00" stroke-width="2"/>
      <line x1="-10" y1="12" x2="10" y2="12" stroke="#f57c00" stroke-width="2"/>
    </g>
    <!-- Lantern 2 -->
    <g transform="translate(545, 265) scale(0.7)">
      <circle cx="0" cy="0" r="40" fill="url(#lantern-radial)"/>
      <path d="M-18,-35 L18,-35 L14,35 L-14,35 Z" fill="#ffa726" stroke="#333" stroke-width="3"/>
      <line x1="-12" y1="-10" x2="12" y2="-10" stroke="#f57c00" stroke-width="2"/>
      <line x1="-10" y1="12" x2="10" y2="12" stroke="#f57c00" stroke-width="2"/>
    </g>
    <!-- Lantern 3 -->
    <g transform="translate(630, 150) scale(0.85)">
      <circle cx="0" cy="0" r="45" fill="url(#lantern-radial)"/>
      <path d="M-20,-38 L20,-38 L15,38 L-15,38 Z" fill="#ffb74d" stroke="#333" stroke-width="3.5"/>
      <line x1="-14" y1="-12" x2="14" y2="-12" stroke="#e65100" stroke-width="2"/>
      <line x1="-12" y1="14" x2="12" y2="14" stroke="#e65100" stroke-width="2"/>
    </g>
    <!-- Lantern 4 -->
    <g transform="translate(735, 95) scale(0.8)">
      <circle cx="0" cy="0" r="45" fill="url(#lantern-radial)"/>
      <path d="M-19,-36 L19,-36 L14,36 L-14,36 Z" fill="#ff9800" stroke="#333" stroke-width="3"/>
      <line x1="-12" y1="-10" x2="12" y2="-10" stroke="#e65100" stroke-width="2"/>
      <line x1="-10" y1="12" x2="10" y2="12" stroke="#e65100" stroke-width="2"/>
    </g>
    <!-- Lantern 5 -->
    <g transform="translate(720, 290) scale(0.68)">
      <circle cx="0" cy="0" r="40" fill="url(#lantern-radial)"/>
      <path d="M-18,-35 L18,-35 L14,35 L-14,35 Z" fill="#ffb74d" stroke="#333" stroke-width="3"/>
    </g>
    <!-- Lantern 6 (High right) -->
    <g transform="translate(830, 195) scale(0.95)">
      <circle cx="0" cy="0" r="55" fill="url(#lantern-radial)"/>
      <path d="M-24,-44 L24,-44 L18,44 L-18,44 Z" fill="#ff9800" stroke="#333" stroke-width="3.5"/>
      <line x1="-16" y1="-15" x2="16" y2="-15" stroke="#bf360c" stroke-width="2"/>
      <line x1="-14" y1="15" x2="14" y2="15" stroke="#bf360c" stroke-width="2"/>
    </g>
    <!-- Lantern 7 -->
    <g transform="translate(930, 105) scale(0.72)">
      <circle cx="0" cy="0" r="45" fill="url(#lantern-radial)"/>
      <path d="M-18,-35 L18,-35 L14,35 L-14,35 Z" fill="#ffb74d" stroke="#333" stroke-width="3"/>
    </g>
    <!-- Lantern 8 -->
    <g transform="translate(915, 330) scale(0.6)">
      <circle cx="0" cy="0" r="38" fill="url(#lantern-radial)"/>
      <path d="M-17,-32 L17,-32 L13,32 L-13,32 Z" fill="#ffa726" stroke="#333" stroke-width="3"/>
    </g>
  </g>

  <!-- ================= 3. RIVERSIDE BANK (LEFT) & TEMPLE ================= -->
  <!-- Brick Walkway border -->
  <rect x="0" y="468" width="675" height="18" fill="#e57373" stroke="#333" stroke-width="3.5"/>
  <line x1="0" y1="477" x2="675" y2="477" stroke="#b71c1c" stroke-width="1.5" stroke-dasharray="16,8"/>

  <!-- Green Grid Paper Lawn -->
  <path d="M 0,486 L 685,486 L 625,700 L 0,700 Z" fill="url(#grid-grass)" stroke="#333" stroke-width="4"/>

  <!-- Grass Tufts (กอหญ้า) -->
  <g stroke="#333" stroke-width="3" fill="#81c784" stroke-linejoin="round">
    <path d="M 35,535 L 30,515 L 40,525 L 45,510 L 52,530 L 60,515 L 62,535 Z"/>
    <path d="M 120,620 L 115,600 L 126,612 L 132,596 L 140,616 L 148,602 L 150,620 Z"/>
    <path d="M 195,548 L 190,528 L 200,538 L 206,524 L 214,542 L 222,528 L 224,548 Z"/>
    <path d="M 275,630 L 270,610 L 280,620 L 286,606 L 294,624 L 302,610 L 304,630 Z"/>
    <path d="M 335,542 L 330,522 L 340,532 L 346,518 L 354,536 L 362,522 L 364,542 Z"/>
    <path d="M 460,538 L 455,518 L 465,528 L 471,514 L 479,532 L 487,518 L 489,538 Z"/>
    <path d="M 545,625 L 540,605 L 550,615 L 556,601 L 564,619 L 572,605 L 574,625 Z"/>
  </g>

  <!-- Little Paper Flowers on lawn -->
  <g class="lawn-flowers" stroke="#333" stroke-width="2.5">
    <circle cx="110" cy="548" r="6" fill="#f48fb1"/>
    <circle cx="110" cy="548" r="2.5" fill="#fff"/>
    <circle cx="260" cy="565" r="7" fill="#f06292"/>
    <circle cx="260" cy="565" r="3" fill="#ffe082"/>
    <circle cx="420" cy="535" r="6" fill="#ba68c8"/>
    <circle cx="420" cy="535" r="2.5" fill="#fff"/>
  </g>

  <!-- Spirit House (ศาลพระภูมิ) -->
  <g class="spirit-house" filter="url(#scene-paper-shadow)" transform="translate(52, 470)">
    <!-- Post -->
    <rect x="-8" y="-70" width="16" height="70" fill="#d7ccc8" stroke="#333" stroke-width="3"/>
    <!-- Platform -->
    <rect x="-35" y="-82" width="70" height="12" fill="#efebe9" stroke="#333" stroke-width="3"/>
    <!-- House body -->
    <rect x="-24" y="-130" width="48" height="48" fill="#ffcdd2" stroke="#333" stroke-width="3"/>
    <!-- Door -->
    <rect x="-8" y="-115" width="16" height="33" rx="4" fill="#d32f2f"/>
    <!-- Gabled Roof -->
    <polygon points="0,-165 -38,-130 38,-130" fill="#e53935" stroke="#333" stroke-width="3.5" stroke-linejoin="round"/>
  </g>

  <!-- Golden Chedi Spire (เจดีย์ทอง) -->
  <g class="golden-chedi" filter="url(#scene-paper-shadow)" transform="translate(132, 470)">
    <!-- Base plinths -->
    <rect x="-28" y="-24" width="56" height="24" fill="#ffd54f" stroke="#333" stroke-width="3"/>
    <rect x="-22" y="-45" width="44" height="21" fill="#ffca28" stroke="#333" stroke-width="3"/>
    <rect x="-16" y="-62" width="32" height="17" fill="#ffc107" stroke="#333" stroke-width="3"/>
    <!-- Bell dome -->
    <ellipse cx="0" cy="-80" rx="15" ry="18" fill="#ffb300" stroke="#333" stroke-width="3"/>
    <!-- Spire Rings -->
    <polygon points="0,-185 -5,-95 5,-95" fill="#ffa000" stroke="#333" stroke-width="3"/>
    <circle cx="0" cy="-185" r="4.5" fill="#ffe082" stroke="#333" stroke-width="2"/>
  </g>

  <!-- Thai Temple (วัดอุโบสถ) -->
  <g class="thai-temple" filter="url(#scene-paper-shadow)" transform="translate(255, 470)">
    <!-- Base plinth -->
    <rect x="-105" y="-25" width="210" height="25" fill="#f5f5f5" stroke="#333" stroke-width="3.5"/>
    <rect x="-95" y="-105" width="190" height="80" fill="#fffde7" stroke="#333" stroke-width="3.5"/>
    <!-- Columns -->
    <rect x="-88" y="-105" width="14" height="80" fill="#ffb74d" stroke="#333" stroke-width="3"/>
    <rect x="-42" y="-105" width="14" height="80" fill="#4fc3f7" stroke="#333" stroke-width="3"/>
    <rect x="28" y="-105" width="14" height="80" fill="#4fc3f7" stroke="#333" stroke-width="3"/>
    <rect x="74" y="-105" width="14" height="80" fill="#ffb74d" stroke="#333" stroke-width="3"/>
    <!-- Center Door -->
    <path d="M -20,-25 L -20,-85 C -20,-102 20,-102 20,-85 L 20,-25 Z" fill="#d32f2f" stroke="#333" stroke-width="3.5"/>
    <line x1="0" y1="-95" x2="0" y2="-25" stroke="#ffeb3b" stroke-width="2"/>
    
    <!-- Multi-tier Temple Gable Roof -->
    <polygon points="0,-235 -118,-105 118,-105" fill="#e53935" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
    <polygon points="0,-220 -95,-115 95,-115" fill="#ffa726" stroke="#333" stroke-width="3" stroke-linejoin="round"/>
    <!-- Dharma Wheel in Gable -->
    <circle cx="0" cy="-155" r="16" fill="#ffe082" stroke="#333" stroke-width="3"/>
    <circle cx="0" cy="-155" r="5" fill="#e65100"/>
    <!-- Curved Chofah finial at roof apex -->
    <path d="M 0,-235 Q 2,-255 12,-258" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  </g>

  <!-- Coconut Palm Tree & Hanging String of Paper Lanterns -->
  <g class="palm-tree" filter="url(#scene-paper-shadow)" transform="translate(515, 470)">
    <!-- Tree Trunk -->
    <rect x="-10" y="-175" width="20" height="175" rx="4" fill="#43a047" stroke="#333" stroke-width="3.5"/>
    <!-- Trunk horizontal segment notches -->
    <line x1="-10" y1="-140" x2="10" y2="-140" stroke="#1b5e20" stroke-width="2"/>
    <line x1="-10" y1="-105" x2="10" y2="-105" stroke="#1b5e20" stroke-width="2"/>
    <line x1="-10" y1="-70" x2="10" y2="-70" stroke="#1b5e20" stroke-width="2"/>
    <line x1="-10" y1="-35" x2="10" y2="-35" stroke="#1b5e20" stroke-width="2"/>
    <!-- Coconut blossom / spadix -->
    <ellipse cx="14" cy="-160" rx="9" ry="18" fill="#7b1fa2" stroke="#333" stroke-width="3"/>

    <!-- Palm Fronds (ใบมะพร้าว) -->
    <g stroke="#333" stroke-width="3.5" fill="#66bb6a" stroke-linejoin="round">
      <path d="M 0,-175 C -55,-220 -115,-210 -115,-190 C -115,-175 -50,-170 0,-175 Z"/>
      <path d="M 0,-175 C -45,-240 -85,-270 -75,-275 C -60,-275 -25,-215 0,-175 Z"/>
      <path d="M 0,-175 C -15,-265 15,-270 20,-265 C 20,-240 10,-200 0,-175 Z"/>
      <path d="M 0,-175 C 35,-260 85,-265 90,-255 C 80,-240 30,-200 0,-175 Z"/>
      <path d="M 0,-175 C 65,-215 118,-200 115,-185 C 95,-175 40,-170 0,-175 Z"/>
    </g>

    <!-- Hanging Festival Paper Lanterns String (สายโคมไฟประดับ) -->
    <path d="M -155,-70 Q -85,-30 0,-120" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="-135" cy="-60" r="10" fill="#ffa726" stroke="#333" stroke-width="2.5"/>
    <circle cx="-110" cy="-52" r="10" fill="#e57373" stroke="#333" stroke-width="2.5"/>
    <circle cx="-85" cy="-55" r="10" fill="#fff176" stroke="#333" stroke-width="2.5"/>
    <circle cx="-60" cy="-68" r="10" fill="#81c784" stroke="#333" stroke-width="2.5"/>
    <circle cx="-35" cy="-90" r="10" fill="#ffb74d" stroke="#333" stroke-width="2.5"/>
  </g>

  <!-- Cute Kitty Cat Sitting on Bank (น้องแมวน้อยริมตลิ่ง) -->
  <g class="sticker-cat" filter="url(#scene-paper-shadow)" transform="translate(615, 455)">
    <!-- Cat Body -->
    <ellipse cx="0" cy="55" rx="30" ry="38" fill="#ffffff" stroke="#333" stroke-width="3.5"/>
    <!-- Cat Tail -->
    <path d="M 28,68 C 45,72 52,55 42,45 C 35,38 32,55 25,60" fill="#ffffff" stroke="#333" stroke-width="3"/>
    <!-- Cat Head -->
    <ellipse cx="0" cy="10" rx="38" ry="32" fill="#ffffff" stroke="#333" stroke-width="4"/>
    <!-- Ears -->
    <polygon points="-28,-12 -22,-38 -6,-18" fill="#ffffff" stroke="#333" stroke-width="3.5" stroke-linejoin="round"/>
    <polygon points="-24,-14 -20,-32 -10,-18" fill="#ffcdd2"/>
    <polygon points="6,-18 22,-38 28,-12" fill="#ffffff" stroke="#333" stroke-width="3.5" stroke-linejoin="round"/>
    <polygon points="10,-18 20,-32 24,-14" fill="#ffcdd2"/>
    <!-- Flower on ear -->
    <circle cx="28" cy="-12" r="7" fill="#ffffff" stroke="#333" stroke-width="2"/>
    <circle cx="28" cy="-12" r="2.5" fill="#fbc02d"/>
    <!-- Eyes, Nose, Mouth -->
    <ellipse cx="-14" cy="8" rx="3" ry="4" fill="#333"/>
    <ellipse cx="14" cy="8" rx="3" ry="4" fill="#333"/>
    <polygon points="0,15 -3,12 3,12" fill="#ff80ab"/>
    <path d="M -7,20 Q 0,24 0,18 Q 0,24 7,20" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Whiskers -->
    <line x1="-24" y1="14" x2="-36" y2="10" stroke="#333" stroke-width="2"/>
    <line x1="-24" y1="18" x2="-38" y2="20" stroke="#333" stroke-width="2"/>
    <line x1="24" y1="14" x2="36" y2="10" stroke="#333" stroke-width="2"/>
    <line x1="24" y1="18" x2="38" y2="20" stroke="#333" stroke-width="2"/>
    <!-- Pink Cheeks -->
    <ellipse cx="-22" cy="18" rx="7" ry="4.5" fill="#ff8a80" opacity="0.8"/>
    <ellipse cx="22" cy="18" rx="7" ry="4.5" fill="#ff8a80" opacity="0.8"/>
    <!-- Paws holding little krathong -->
    <ellipse cx="-12" cy="52" rx="7" ry="5" fill="#fff" stroke="#333" stroke-width="2.5"/>
    <ellipse cx="12" cy="52" rx="7" ry="5" fill="#fff" stroke="#333" stroke-width="2.5"/>
    <ellipse cx="0" cy="56" rx="16" ry="7" fill="#66bb6a" stroke="#333" stroke-width="2.5"/>
  </g>

  <!-- ================= 4. THE PAPER RIVER (RIGHT) ================= -->
  <!-- Blue Paper River Sheet -->
  <path d="M 670,468 L 1024,440 L 1024,700 L 620,700 Z" fill="#64b5f6" stroke="#333" stroke-width="4.5"/>

  <!-- Water Wave Ripple Cuts (คลื่นน้ำกระดาษ) -->
  <g fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.85">
    <path d="M 720,490 Q 735,482 750,490 T 780,490"/>
    <path d="M 850,470 Q 865,462 880,470 T 910,470"/>
    <path d="M 760,545 Q 775,537 790,545 T 820,545"/>
    <path d="M 920,530 Q 935,522 950,530 T 980,530"/>
    <path d="M 710,610 Q 725,602 740,610 T 770,610"/>
    <path d="M 820,600 Q 835,592 850,600 T 880,600"/>
    <path d="M 940,635 Q 955,627 970,635 T 1000,635"/>
    <path d="M 740,665 Q 755,657 770,665 T 800,665"/>
  </g>

  <!-- Little Swimming Goldfish (น้องปลาทอง) -->
  <g class="swimming-fish" filter="url(#scene-paper-shadow)" transform="translate(965, 545)">
    <!-- Fish body -->
    <ellipse cx="0" cy="0" rx="18" ry="11" fill="#ff7043" stroke="#333" stroke-width="3"/>
    <!-- Tail fin -->
    <polygon points="16,0 28,-10 24,0 28,10" fill="#ff7043" stroke="#333" stroke-width="3" stroke-linejoin="round"/>
    <!-- Eye & mouth -->
    <circle cx="-10" cy="-3" r="2.5" fill="#333"/>
    <path d="M -16,2 Q -12,4 -10,2" fill="none" stroke="#333" stroke-width="2"/>
  </g>

  <!-- NPC Krathongs in river (กระทง NPC ในแม่น้ำ) -->
  <!-- NPC 1 (Upstream) -->
  <g class="npc-krathong-svg" filter="url(#scene-paper-shadow)" transform="translate(905, 490) scale(0.48)">
    <circle cx="0" cy="-30" r="35" fill="url(#lantern-radial)"/>
    <ellipse cx="0" cy="0" rx="35" ry="12" fill="#558b2f" stroke="#333" stroke-width="3"/>
    <polygon points="-25,0 -15,-25 -5,0" fill="#81c784" stroke="#333" stroke-width="3"/>
    <polygon points="-5,0 5,-28 15,0" fill="#a5d6a7" stroke="#333" stroke-width="3"/>
    <polygon points="5,0 15,-25 25,0" fill="#81c784" stroke="#333" stroke-width="3"/>
    <rect x="-3" y="-35" width="6" height="35" fill="#fffde7" stroke="#333" stroke-width="2"/>
    <path d="M 0,-48 Q 6,-38 0,-34 Q -6,-38 0,-48 Z" fill="#ff9800"/>
  </g>
  
  <!-- NPC 2 (Midstream) -->
  <g class="npc-krathong-svg" filter="url(#scene-paper-shadow)" transform="translate(790, 525) scale(0.62)">
    <circle cx="0" cy="-30" r="35" fill="url(#lantern-radial)"/>
    <ellipse cx="0" cy="0" rx="35" ry="12" fill="#558b2f" stroke="#333" stroke-width="3"/>
    <polygon points="-25,0 -15,-25 -5,0" fill="#81c784" stroke="#333" stroke-width="3"/>
    <polygon points="-5,0 5,-28 15,0" fill="#a5d6a7" stroke="#333" stroke-width="3"/>
    <polygon points="5,0 15,-25 25,0" fill="#81c784" stroke="#333" stroke-width="3"/>
    <rect x="-3" y="-35" width="6" height="35" fill="#fffde7" stroke="#333" stroke-width="2"/>
    <path d="M 0,-48 Q 6,-38 0,-34 Q -6,-38 0,-48 Z" fill="#ff9800"/>
  </g>

</svg>
`;

window.SVG_SCENE = SVG_SCENE;
