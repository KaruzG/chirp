# Chirp - Tu red social simple

Chirp es una red social simple, similar a Twitter, donde puedes compartir mensajes en un feed público. Esta aplicación web está construida con PHP, JavaScript, SCSS y utiliza Apache como servidor web.

## Características

- **Publicar Chirps:** Comparte tus pensamientos, enlaces o cualquier cosa que desees con la comunidad.
- **Explorar el Feed:** Descubre lo que otros están compartiendo en el feed público.
- **Perfiles de Usuario:** Visualiza perfiles de usuario con información básica.

## Estructura del Proyecto

La estructura del proyecto sigue el patrón de diseño Modelo-Vista-Controlador (MVC):

```plaintext
/var/www/html/
|-- app/
|   |-- controllers/
|   |-- views/
|   |-- models/
|-- public/
|   |-- css/
|   |-- js/
|   |-- uploads/
|-- includes/
|-- .htaccess
|-- index.php
|-- config.php
```

## Configuración
1. Crea una base de datos: Configura una base de datos MySQL y actualiza la información en config.php.
2. Instala las dependencias: Utiliza ```Composer.sh``` para instalar las dependencias del proyecto.
