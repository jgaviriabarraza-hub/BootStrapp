# Maison Aurel - Registro con Bootstrap

## Cómo ejecutarlo
1. Descomprime la carpeta.
2. Abre `index.html` en Visual Studio Code.
3. Abre el archivo en el navegador.
4. Necesitas internet porque Bootstrap, Bootstrap Icons y la imagen se cargan mediante CDN.

## Archivos
- `index.html`: estructura de la página.
- `style.css`: diseño visual.
- `script.js`: validación, mostrar/ocultar contraseña, modal de inicio de sesión y almacenamiento local.

## Importante
Este proyecto NO necesita `npm install`, `npm init` ni descargar Bootstrap.

La creación de cuenta es una simulación en el navegador: guarda nombre, apellido, correo y preferencia de novedades en `localStorage`. Para un sistema real habría que conectarlo a un backend y una base de datos.

## Cambiar la foto del bolso
En `style.css`, busca `background-image` dentro de `.brand-panel` y reemplaza la URL de Unsplash por la ruta de tu propia imagen, por ejemplo:
url("img/bolso.jpg")
