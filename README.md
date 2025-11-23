📘 README – Automatización QA con Playwright y k6
📝 Descripción del Proyecto

Este repositorio contiene una suite de automatización que combina:

Pruebas funcionales UI usando Playwright (JavaScript)

Debes ejecutar este comando en tu consola para descargar el framework: 
npm install -D @playwright/test@latest


Para ejecutar la automatización:
npx playwright test tests/e2e.spec.js --headed


Pruebas de carga y estrés usando k6

Debes ejecutar este comando en consola para descargar el framework:
choco install k6

Para ejecutar el script K6:

k6 run carga.js
k6 run estres.js     

🚀 Requisitos Previos

Node.js (v16+)

