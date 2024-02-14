![image](https://github.com/KaruzG/chirp/assets/95084763/805c9e12-b45b-4aeb-ad7b-7c05540e1745)

# Your Simple Social Network

Chirp is a simple social network, where you can share messages on a public feed (Chirps 🐦). This web application is built with: **JavaScript, PHP, SCSS**, and uses Apache as the web server.

## Features ✨

- **Post Chirps:** Share your thoughts, links, or anything you'd like with the community.
- **Explore the Feed:** Discover what others are sharing on the public feed.
- **User Profiles:** View your user profiles with basic information.

## Project Structure 🧱

The project structure follows the Model-View-Controller (MVC) design pattern:

```plaintext
/var/www/html/
|-- app/
|   |-- main/
|   |-- tableClasses/
|
|-- components/
|-- log/
|-- docs/
|-- public/
|   |-- css/
|   |-- js/
|   |-- uploads/
|   |-- fonts/
|   |-- img/
|   |-- pages/
|   |-- svg/
|
|-- vendor/
|-- .htaccess
|-- index.php
|-- config.php
|-- composer.json
```

## Configuration ⚙
1. Create a Database: Set up a MySQL database **tested with MySQL**
   - Create database "chirp"
   - Import /app/main/database.sql
     
3. Update the information in /config.php.

## Dependencies ⚡
### PHP:
To intall PHP depencencies use `'composer install'`

## Images 📸
![image](https://github.com/KaruzG/chirp/assets/95084763/51866fd0-6466-4bf3-8f15-3795840bf2d4)
![image](https://github.com/KaruzG/chirp/assets/95084763/ab477ca5-a7f3-49da-a5c2-09f585e5978b)
