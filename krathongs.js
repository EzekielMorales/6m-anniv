// Procedural SVG Paper-Cutout Illustrations
// วาดภาพประกอบสไตล์กระดาษตัดแปะด้วย SVG แท้ 100% ไม่พึ่งพาการตัดภาพ

const SVG_ASSETS = {
  // 1. กระทงใบตอง (Banana Leaf Krathong)
  banana: `
    <svg viewBox="0 0 400 420" class="svg-krathong" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Paper Drop Shadow Filter -->
        <filter id="paper-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#2a3b4c" flood-opacity="0.25"/>
        </filter>
        <!-- Candle Warm Glow -->
        <radialGradient id="candle-radial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#ffeb3b" stop-opacity="0.95"/>
          <stop offset="60%" stop-color="#ff9800" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#ff9800" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="blush-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff7675" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ff7675" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Candle Glow Aura (Controlled by class) -->
      <g class="candle-aura-group">
        <circle cx="250" cy="140" r="65" fill="url(#candle-radial)" class="ambient-glow"/>
      </g>

      <!-- Main Sticker Group with white outline & shadow -->
      <g filter="url(#paper-shadow)" class="sticker-body">
        
        <!-- Incense Sticks (ธูป 3 ดอก) -->
        <g class="incense-group">
          <!-- Incense smoke curls -->
          <path d="M142,140 Q138,110 144,80 T136,45" fill="none" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3,3" opacity="0.65" class="smoke-line"/>
          <!-- 3 sticks -->
          <line x1="138" y1="280" x2="138" y2="150" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <line x1="146" y1="280" x2="146" y2="145" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <line x1="154" y1="280" x2="154" y2="150" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <!-- Glowing ember tips -->
          <circle cx="138" cy="150" r="3" fill="#ff5722"/>
          <circle cx="146" cy="145" r="3" fill="#ff5722"/>
          <circle cx="154" cy="150" r="3" fill="#ff5722"/>
        </g>

        <!-- Candle (เทียน) -->
        <g class="candle-group">
          <!-- Candle Body -->
          <rect x="242" y="160" width="16" height="110" rx="3" fill="#fffde7" stroke="#333" stroke-width="3"/>
          <!-- Candle wick -->
          <line x1="250" y1="160" x2="250" y2="145" stroke="#333" stroke-width="3" stroke-linecap="round"/>
          <!-- Candle Flame -->
          <g class="flame-element">
            <path d="M250,118 Q262,136 250,148 Q238,136 250,118 Z" fill="#ff9800" stroke="#d35400" stroke-width="2"/>
            <path d="M250,126 Q256,138 250,146 Q244,138 250,126 Z" fill="#ffeb3b"/>
            <circle cx="250" cy="142" r="3" fill="#ffffff"/>
          </g>
        </g>

        <!-- Center Lotus Blossom (ดอกบัวตรงกลาง) -->
        <g class="lotus-center">
          <path d="M200,185 C170,220 175,275 200,285 C225,275 230,220 200,185 Z" fill="#f48fb1" stroke="#333" stroke-width="3.5"/>
          <path d="M200,185 Q188,235 200,285" fill="none" stroke="#ad1457" stroke-width="2"/>
          <path d="M175,210 C155,235 160,275 185,285 C190,265 185,230 175,210 Z" fill="#f06292" stroke="#333" stroke-width="3"/>
          <path d="M225,210 C245,235 240,275 215,285 C210,265 215,230 225,210 Z" fill="#f06292" stroke="#333" stroke-width="3"/>
        </g>

        <!-- Back Petals Layer (กลีบกระทงชั้นหลัง) -->
        <g class="petals-back" stroke="#333" stroke-width="3.5" stroke-linejoin="round">
          <polygon points="105,290 120,205 135,290" fill="#66bb6a"/>
          <polygon points="135,290 155,195 175,290" fill="#4caf50"/>
          <polygon points="225,290 245,195 265,290" fill="#4caf50"/>
          <polygon points="265,290 280,205 295,290" fill="#66bb6a"/>
        </g>

        <!-- Front Folded Banana Leaf Petals (กลีบกระทงชั้นหน้า) -->
        <g class="petals-front" stroke="#333" stroke-width="3.5" stroke-linejoin="round">
          <polygon points="85,300 102,235 120,300" fill="#81c784"/>
          <polygon points="115,300 135,225 155,300" fill="#81c784"/>
          <polygon points="150,300 175,220 200,300" fill="#a5d6a7"/>
          <polygon points="200,300 225,220 250,300" fill="#a5d6a7"/>
          <polygon points="245,300 265,225 285,300" fill="#81c784"/>
          <polygon points="280,300 298,235 315,300" fill="#81c784"/>
        </g>

        <!-- Marigold Flowers (ดอกดาวเรือง) -->
        <g class="marigolds">
          <circle cx="108" cy="275" r="16" fill="#ffa726" stroke="#333" stroke-width="3"/>
          <circle cx="108" cy="275" r="9" fill="#ff7043"/>
          <circle cx="156" cy="272" r="17" fill="#ffb74d" stroke="#333" stroke-width="3"/>
          <circle cx="156" cy="272" r="10" fill="#ffa726"/>
          <circle cx="244" cy="272" r="17" fill="#ffb74d" stroke="#333" stroke-width="3"/>
          <circle cx="244" cy="272" r="10" fill="#ffa726"/>
          <circle cx="292" cy="275" r="16" fill="#ffa726" stroke="#333" stroke-width="3"/>
          <circle cx="292" cy="275" r="9" fill="#ff7043"/>
        </g>

        <!-- Banana Trunk Base (หยวกกล้วยฐานกระทง) -->
        <g class="base-trunk">
          <!-- Outer border/rim -->
          <path d="M85,295 C85,295 100,285 200,285 C300,285 315,295 315,295 L310,345 C310,365 260,375 200,375 C140,375 90,365 90,345 Z" 
                fill="#558b2f" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
          <!-- Top rim layer -->
          <path d="M88,298 C100,290 200,290 312,298 C305,305 200,308 88,298 Z" fill="#7cb342"/>
          
          <!-- Cute Kawaii Face (หน้ายิ้มน่ารัก) -->
          <path d="M152,328 Q158,322 164,328" fill="none" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M236,328 Q242,322 248,328" fill="none" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M194,338 Q200,344 206,338" fill="none" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>
          
          <!-- Blush cheeks -->
          <ellipse cx="144" cy="336" rx="12" ry="7" fill="#ff7675" opacity="0.85"/>
          <ellipse cx="256" cy="336" rx="12" ry="7" fill="#ff7675" opacity="0.85"/>
        </g>

      </g>
    </svg>
  `,

  // 2. กระทงขนมปัง (Bread Krathong)
  bread: `
    <svg viewBox="0 0 400 420" class="svg-krathong" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="paper-shadow-bread" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#2a3b4c" flood-opacity="0.25"/>
        </filter>
        <radialGradient id="candle-radial-bread" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#ffeb3b" stop-opacity="0.95"/>
          <stop offset="60%" stop-color="#ff9800" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#ff9800" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Candle Glow Aura -->
      <g class="candle-aura-group">
        <circle cx="250" cy="140" r="65" fill="url(#candle-radial-bread)" class="ambient-glow"/>
      </g>

      <g filter="url(#paper-shadow-bread)" class="sticker-body">
        
        <!-- Incense Sticks -->
        <g class="incense-group">
          <path d="M142,140 Q138,110 144,80 T136,45" fill="none" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3,3" opacity="0.65" class="smoke-line"/>
          <line x1="138" y1="280" x2="138" y2="150" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <line x1="146" y1="280" x2="146" y2="145" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <line x1="154" y1="280" x2="154" y2="150" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <circle cx="138" cy="150" r="3" fill="#ff5722"/>
          <circle cx="146" cy="145" r="3" fill="#ff5722"/>
          <circle cx="154" cy="150" r="3" fill="#ff5722"/>
        </g>

        <!-- Candle -->
        <g class="candle-group">
          <rect x="242" y="160" width="16" height="110" rx="3" fill="#fffde7" stroke="#333" stroke-width="3"/>
          <line x1="250" y1="160" x2="250" y2="145" stroke="#333" stroke-width="3" stroke-linecap="round"/>
          <g class="flame-element">
            <path d="M250,118 Q262,136 250,148 Q238,136 250,118 Z" fill="#ff9800" stroke="#d35400" stroke-width="2"/>
            <path d="M250,126 Q256,138 250,146 Q244,138 250,126 Z" fill="#ffeb3b"/>
            <circle cx="250" cy="142" r="3" fill="#ffffff"/>
          </g>
        </g>

        <!-- Bread Buns Ring (ขนมปังก้อนกลมนุ่มฟู) -->
        <g class="bread-rolls-back" stroke="#333" stroke-width="3.5" fill="#d79a52">
          <circle cx="95" cy="250" r="24"/>
          <circle cx="135" cy="230" r="28"/>
          <circle cx="180" cy="220" r="30"/>
          <circle cx="225" cy="225" r="29"/>
          <circle cx="265" cy="235" r="27"/>
          <circle cx="305" cy="250" r="24"/>
        </g>
        
        <!-- Center Big Bun with sesame seeds (ก้อนขนมปังตรงกลางโรยงา) -->
        <g class="bread-center">
          <circle cx="200" cy="235" r="28" fill="#e5aa66" stroke="#333" stroke-width="3.5"/>
          <!-- White sesame seeds -->
          <ellipse cx="192" cy="225" rx="2" ry="4" transform="rotate(25 192 225)" fill="#fff"/>
          <ellipse cx="202" cy="222" rx="2" ry="4" transform="rotate(-15 202 222)" fill="#fff"/>
          <ellipse cx="208" cy="232" rx="2" ry="4" transform="rotate(35 208 232)" fill="#fff"/>
          <ellipse cx="196" cy="236" rx="2" ry="4" transform="rotate(-30 196 236)" fill="#fff"/>
          <ellipse cx="202" cy="244" rx="2" ry="4" fill="#fff"/>
        </g>

        <!-- Colorful Cute Flower Candies on bread rim -->
        <g class="bread-candies">
          <!-- Candy 1 (Pink) -->
          <circle cx="106" cy="285" r="14" fill="#f8a5c2" stroke="#333" stroke-width="2.5"/>
          <circle cx="106" cy="285" r="5" fill="#f5cd79"/>
          <!-- Candy 2 (Green) -->
          <circle cx="138" cy="290" r="14" fill="#7bed9f" stroke="#333" stroke-width="2.5"/>
          <circle cx="138" cy="290" r="5" fill="#ff6b81"/>
          <!-- Candy 3 (Yellow) -->
          <circle cx="170" cy="292" r="14" fill="#ffeaa7" stroke="#333" stroke-width="2.5"/>
          <circle cx="170" cy="292" r="5" fill="#e17055"/>
          <!-- Candy 4 (Blue) -->
          <circle cx="202" cy="293" r="14" fill="#70a1ff" stroke="#333" stroke-width="2.5"/>
          <circle cx="202" cy="293" r="5" fill="#fff"/>
          <!-- Candy 5 (Pink) -->
          <circle cx="234" cy="292" r="14" fill="#ffcccc" stroke="#333" stroke-width="2.5"/>
          <circle cx="234" cy="292" r="5" fill="#f5cd79"/>
          <!-- Candy 6 (Green) -->
          <circle cx="266" cy="290" r="14" fill="#a8e6cf" stroke="#333" stroke-width="2.5"/>
          <circle cx="266" cy="290" r="5" fill="#ff7675"/>
          <!-- Candy 7 (Yellow) -->
          <circle cx="296" cy="285" r="14" fill="#ffeaa7" stroke="#333" stroke-width="2.5"/>
          <circle cx="296" cy="285" r="5" fill="#fd79a8"/>
        </g>

        <!-- Big Bread Loaf Base (ฐานขนมปังก้อนใหญ่) -->
        <g class="bread-base">
          <path d="M85,295 C85,295 100,285 200,285 C300,285 315,295 315,295 L312,345 C312,368 260,378 200,378 C140,378 88,368 88,345 Z" 
                fill="#c68437" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
          <path d="M92,305 C130,300 270,300 308,305" fill="none" stroke="#b06d25" stroke-width="3" stroke-dasharray="8,6"/>
          
          <!-- Cute Face on Bread -->
          <path d="M152,330 Q158,324 164,330" fill="none" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M236,330 Q242,324 248,330" fill="none" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M194,340 Q200,346 206,340" fill="none" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>
          
          <!-- Cheeks -->
          <ellipse cx="144" cy="338" rx="12" ry="7" fill="#ff7675" opacity="0.85"/>
          <ellipse cx="256" cy="338" rx="12" ry="7" fill="#ff7675" opacity="0.85"/>
        </g>

      </g>
    </svg>
  `,

  // 3. กระทงกะลามะพร้าว (Coconut Shell Krathong)
  coconut: `
    <svg viewBox="0 0 400 420" class="svg-krathong" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="paper-shadow-coconut" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#2a3b4c" flood-opacity="0.25"/>
        </filter>
        <radialGradient id="candle-radial-coconut" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#ffeb3b" stop-opacity="0.95"/>
          <stop offset="60%" stop-color="#ff9800" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#ff9800" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Candle Glow Aura -->
      <g class="candle-aura-group">
        <circle cx="240" cy="140" r="65" fill="url(#candle-radial-coconut)" class="ambient-glow"/>
      </g>

      <g filter="url(#paper-shadow-coconut)" class="sticker-body">
        
        <!-- Incense Sticks -->
        <g class="incense-group">
          <path d="M142,140 Q138,110 144,80 T136,45" fill="none" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3,3" opacity="0.65" class="smoke-line"/>
          <line x1="138" y1="280" x2="138" y2="150" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <line x1="146" y1="280" x2="146" y2="145" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <line x1="154" y1="280" x2="154" y2="150" stroke="#b23b23" stroke-width="5" stroke-linecap="round"/>
          <circle cx="138" cy="150" r="3" fill="#ff5722"/>
          <circle cx="146" cy="145" r="3" fill="#ff5722"/>
          <circle cx="154" cy="150" r="3" fill="#ff5722"/>
        </g>

        <!-- Candle -->
        <g class="candle-group">
          <rect x="232" y="160" width="16" height="110" rx="3" fill="#fffde7" stroke="#333" stroke-width="3"/>
          <line x1="240" y1="160" x2="240" y2="145" stroke="#333" stroke-width="3" stroke-linecap="round"/>
          <g class="flame-element">
            <path d="M240,118 Q252,136 240,148 Q228,136 240,118 Z" fill="#ff9800" stroke="#d35400" stroke-width="2"/>
            <path d="M240,126 Q246,138 240,146 Q234,138 240,126 Z" fill="#ffeb3b"/>
            <circle cx="240" cy="142" r="3" fill="#ffffff"/>
          </g>
        </g>

        <!-- Fresh Green Leaf Bed (ใบตองรองกะลา) -->
        <g class="leaf-bed" stroke="#333" stroke-width="3.5" fill="#4caf50">
          <polygon points="105,285 125,215 145,285"/>
          <polygon points="145,285 170,205 195,285"/>
          <polygon points="215,285 240,205 265,285"/>
          <polygon points="255,285 275,215 295,285"/>
        </g>

        <!-- Beautiful Orchid & Jasmine Flowers (ดอกกล้วยไม้และดอกมะลิ) -->
        <g class="flowers-group" stroke="#333" stroke-width="2.5">
          <!-- Purple Orchid 1 (Left) -->
          <g transform="translate(142, 235)">
            <ellipse cx="0" cy="-12" rx="7" ry="12" fill="#ba68c8"/>
            <ellipse cx="12" cy="-4" rx="12" ry="7" fill="#ba68c8"/>
            <ellipse cx="8" cy="10" rx="10" ry="7" fill="#ab47bc"/>
            <ellipse cx="-8" cy="10" rx="10" ry="7" fill="#ab47bc"/>
            <ellipse cx="-12" cy="-4" rx="12" ry="7" fill="#ba68c8"/>
            <circle cx="0" cy="0" r="5" fill="#fbc02d"/>
          </g>

          <!-- White Jasmine (Center) -->
          <g transform="translate(182, 252)">
            <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#ffffff"/>
            <ellipse cx="10" cy="-2" rx="10" ry="6" fill="#ffffff"/>
            <ellipse cx="7" cy="8" rx="8" ry="6" fill="#f5f5f5"/>
            <ellipse cx="-7" cy="8" rx="8" ry="6" fill="#f5f5f5"/>
            <ellipse cx="-10" cy="-2" rx="10" ry="6" fill="#ffffff"/>
            <circle cx="0" cy="0" r="4" fill="#ffee58"/>
          </g>

          <!-- Purple Orchid 2 (Center-Right) -->
          <g transform="translate(205, 225)">
            <ellipse cx="0" cy="-14" rx="8" ry="14" fill="#ce93d8"/>
            <ellipse cx="14" cy="-5" rx="14" ry="8" fill="#ce93d8"/>
            <ellipse cx="9" cy="12" rx="11" ry="8" fill="#ba68c8"/>
            <ellipse cx="-9" cy="12" rx="11" ry="8" fill="#ba68c8"/>
            <ellipse cx="-14" cy="-5" rx="14" ry="8" fill="#ce93d8"/>
            <circle cx="0" cy="0" r="6" fill="#fbc02d"/>
          </g>

          <!-- Purple Orchid 3 (Right) -->
          <g transform="translate(265, 255)">
            <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#ab47bc"/>
            <ellipse cx="10" cy="-3" rx="10" ry="6" fill="#ab47bc"/>
            <ellipse cx="6" cy="8" rx="8" ry="6" fill="#8e24aa"/>
            <ellipse cx="-6" cy="8" rx="8" ry="6" fill="#8e24aa"/>
            <ellipse cx="-10" cy="-3" rx="10" ry="6" fill="#ab47bc"/>
            <circle cx="0" cy="0" r="4" fill="#ffeb3b"/>
          </g>
        </g>

        <!-- Coconut Shell Half (กะลามะพร้าวผ่าซีก) -->
        <g class="coconut-shell">
          <!-- White coconut meat inner rim -->
          <ellipse cx="200" cy="275" rx="105" ry="24" fill="#ffffff" stroke="#333" stroke-width="4"/>
          <!-- Inner green filling -->
          <ellipse cx="200" cy="276" rx="96" ry="18" fill="#81c784"/>

          <!-- Dark Brown Coconut Half Shell Body -->
          <path d="M95,275 C95,355 140,385 200,385 C260,385 305,355 305,275 Z" 
                fill="#5d4037" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
          
          <!-- White decorative pearl beads along rim -->
          <g fill="#ffffff" stroke="#333" stroke-width="2">
            <circle cx="112" cy="288" r="6"/><circle cx="126" cy="292" r="6"/>
            <circle cx="140" cy="295" r="6"/><circle cx="155" cy="297" r="6"/>
            <circle cx="170" cy="299" r="6"/><circle cx="185" cy="300" r="6"/>
            <circle cx="200" cy="300" r="6"/><circle cx="215" cy="300" r="6"/>
            <circle cx="230" cy="299" r="6"/><circle cx="245" cy="297" r="6"/>
            <circle cx="260" cy="295" r="6"/><circle cx="274" cy="292" r="6"/>
            <circle cx="288" cy="288" r="6"/>
          </g>

          <!-- Coconut Fibers / Texture Lines -->
          <g stroke="#3e2723" stroke-width="2" stroke-linecap="round" opacity="0.6">
            <line x1="130" y1="305" x2="135" y2="335"/>
            <line x1="160" y1="310" x2="162" y2="345"/>
            <line x1="240" y1="310" x2="238" y2="345"/>
            <line x1="270" y1="305" x2="265" y2="335"/>
          </g>

          <!-- Cute Face on Coconut -->
          <path d="M152,336 Q158,330 164,336" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
          <path d="M236,336 Q242,330 248,336" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
          <path d="M194,345 Q200,350 206,345" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
          
          <!-- Cheeks -->
          <ellipse cx="144" cy="344" rx="12" ry="7" fill="#ff7675" opacity="0.9"/>
          <ellipse cx="256" cy="344" rx="12" ry="7" fill="#ff7675" opacity="0.9"/>
        </g>

      </g>
    </svg>
  `
};

// Export to window
window.SVG_ASSETS = SVG_ASSETS;
