📘 README – Automatización QA con Playwright y k6
📝 Descripción del Proyecto

Este repositorio contiene una suite de automatización diseñada para validar la funcionalidad y el rendimiento de una aplicación web, utilizando dos tecnologías principales:

Playwright para pruebas funcionales UI en JavaScript.

k6 para pruebas de carga y estrés.

El objetivo es proporcionar una solución completa de automatización que permita evaluar estabilidad, tiempos de respuesta y correcto funcionamiento del sistema bajo prueba.

🚀 Requisitos Previos

Antes de ejecutar los scripts, asegúrate de tener instalado:

✔ Node.js (v16+)

Puedes verificarlo con:

node -v

✔ npm (incluido con Node.js)
npm -v

✔ Chocolatey (solo para Windows, requerido para k6)

Si no lo tienes, te puedo guiar para instalarlo.

🎭 Pruebas UI con Playwright
📥 1. Instalar Playwright

Ejecuta este comando para instalar la última versión del framework:

npm install -D @playwright/test@latest

▶️ 2. Ejecutar las pruebas en modo visible (headed)

Ejemplo ejecutando un archivo específico:

npx playwright test tests/e2e.spec.js --headed


Esto abrirá el navegador y mostrará la ejecución en tiempo real.

📈 Pruebas de Carga y Estrés con k6
📥 1. Instalar k6

En Windows (con Chocolatey):

choco install k6

▶️ 2. Ejecutar el script de carga
k6 run carga.js

🔥 3. Ejecutar el script de estrés
k6 run estres.js




