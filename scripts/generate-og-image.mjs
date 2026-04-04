import sharp from 'sharp';
import { mkdirSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public', 'og');

mkdirSync(outputDir, { recursive: true });

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D0D0F"/>
      <stop offset="30%" style="stop-color:#1A1A2E"/>
      <stop offset="60%" style="stop-color:#16213E"/>
      <stop offset="100%" style="stop-color:#0F3D3E"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10A37F"/>
      <stop offset="50%" style="stop-color:#6E42D3"/>
      <stop offset="100%" style="stop-color:#10A37F"/>
    </linearGradient>
    <linearGradient id="glow" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" style="stop-color:#10A37F;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#10A37F;stop-opacity:0"/>
    </linearGradient>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10A37F"/>
      <stop offset="100%" style="stop-color:#6E42D3"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.5"/>
    </filter>
    <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#10A37F;stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:#10A37F;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#6E42D3;stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:#6E42D3;stop-opacity:0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Grid pattern overlay -->
  <g opacity="0.03">
    ${Array.from({ length: 30 }, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="${height}" stroke="white" stroke-width="1"/>`).join('\n    ')}
    ${Array.from({ length: 16 }, (_, i) => `<line x1="0" y1="${i * 40}" x2="${width}" y2="${i * 40}" stroke="white" stroke-width="1"/>`).join('\n    ')}
  </g>

  <!-- Decorative orbs -->
  <circle cx="950" cy="150" r="250" fill="url(#orb1)"/>
  <circle cx="200" cy="500" r="200" fill="url(#orb2)"/>

  <!-- Decorative circles -->
  <circle cx="1020" cy="140" r="180" fill="none" stroke="#10A37F" stroke-width="1" opacity="0.08"/>
  <circle cx="1020" cy="140" r="130" fill="none" stroke="#6E42D3" stroke-width="1" opacity="0.06"/>
  <circle cx="1020" cy="140" r="80" fill="none" stroke="#10A37F" stroke-width="0.8" opacity="0.04"/>

  <!-- Top-left accent bar (Green-Purple gradient) -->
  <rect x="0" y="0" width="6" height="120" fill="url(#accent)" opacity="0.9"/>

  <!-- Glow behind title -->
  <ellipse cx="380" cy="260" rx="380" ry="130" fill="url(#glow)"/>

  <!-- Logo icon -->
  <g transform="translate(70, 130)">
    <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#logoGrad)" filter="url(#shadow)"/>
    <text x="32" y="46" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle">C</text>
  </g>

  <!-- Brand label -->
  <text x="150" y="174" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="#19C997" letter-spacing="4">CHATGPT MASTER</text>

  <!-- Main title -->
  <text x="70" y="285" font-family="Arial, sans-serif" font-size="68" font-weight="900" fill="white" letter-spacing="-1">ChatGPT AI</text>
  <text x="70" y="360" font-family="Arial, sans-serif" font-size="52" font-weight="700" fill="#e2e8f0" letter-spacing="-0.5">학습 플랫폼</text>

  <!-- Subtitle -->
  <text x="70" y="420" font-family="Arial, sans-serif" font-size="22" fill="#94a3b8">ChatGPT의 모든 기능을 한 곳에서 학습하세요</text>

  <!-- Feature tags -->
  <g transform="translate(70, 465)">
    <rect x="0" y="0" width="130" height="36" rx="18" fill="#10A37F" fill-opacity="0.15" stroke="#10A37F" stroke-width="1" stroke-opacity="0.3"/>
    <text x="65" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#19C997" text-anchor="middle">ChatGPT 기초</text>

    <rect x="145" y="0" width="110" height="36" rx="18" fill="#6E42D3" fill-opacity="0.15" stroke="#6E42D3" stroke-width="1" stroke-opacity="0.3"/>
    <text x="200" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#8B5CF6" text-anchor="middle">Prompts</text>

    <rect x="270" y="0" width="140" height="36" rx="18" fill="#2563EB" fill-opacity="0.15" stroke="#2563EB" stroke-width="1" stroke-opacity="0.3"/>
    <text x="340" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#60A5FA" text-anchor="middle">GPTs &amp; Store</text>

    <rect x="425" y="0" width="120" height="36" rx="18" fill="#E11D48" fill-opacity="0.15" stroke="#E11D48" stroke-width="1" stroke-opacity="0.3"/>
    <text x="485" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FB7185" text-anchor="middle">API 활용</text>

    <rect x="560" y="0" width="120" height="36" rx="18" fill="#D97706" fill-opacity="0.15" stroke="#D97706" stroke-width="1" stroke-opacity="0.3"/>
    <text x="620" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FBBF24" text-anchor="middle">고급 기능</text>

    <rect x="695" y="0" width="120" height="36" rx="18" fill="#0891B2" fill-opacity="0.15" stroke="#0891B2" stroke-width="1" stroke-opacity="0.3"/>
    <text x="755" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#22D3EE" text-anchor="middle">모델 비교</text>
  </g>

  <!-- Bottom bar -->
  <rect x="0" y="590" width="${width}" height="40" fill="#030712" opacity="0.6"/>
  <rect x="0" y="588" width="${width}" height="2" fill="url(#accent)" opacity="0.5"/>

  <!-- URL in bottom bar -->
  <text x="70" y="616" font-family="Arial, sans-serif" font-size="16" fill="#64748b">chatgpt.dreamitbiz.com</text>

  <!-- Powered by text -->
  <text x="1130" y="616" font-family="Arial, sans-serif" font-size="14" fill="#475569" text-anchor="end">Powered by OpenAI</text>
</svg>`;

async function generate() {
  try {
    await sharp(Buffer.from(svg))
      .png({ quality: 95, compressionLevel: 9 })
      .toFile(join(outputDir, 'default.png'));

    const stats = statSync(join(outputDir, 'default.png'));
    console.log(`OG image generated: public/og/default.png (${(stats.size / 1024).toFixed(1)}KB)`);
    console.log(`Dimensions: ${width}x${height}`);
  } catch (err) {
    console.error('Error generating OG image:', err);
    process.exit(1);
  }
}

generate();
