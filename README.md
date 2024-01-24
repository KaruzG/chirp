![image](https://github.com/KaruzG/chirp/assets/95084763/805c9e12-b45b-4aeb-ad7b-7c05540e1745)

# Your Simple Social Network

Chirp is a simple social network, where you can share messages on a public feed (Chirps 🐦). This web application is built with: **JavaScript, PHP, SCSS**, and uses Apache as the web server.

## Features

- **Post Chirps:** Share your thoughts, links, or anything you'd like with the community.
- **Explore the Feed:** Discover what others are sharing on the public feed.
- **User Profiles:** View user profiles with basic information.

## Project Structure

The project structure follows the Model-View-Controller (MVC) design pattern:

```plaintext
/var/www/html/
|-- app/
|-- components/
|-- public/
|   |-- css/
|   |-- js/
|   |-- uploads/
|   |-- fonts/
|   |-- img/
|   |-- pages/
|   |-- svg/
|-- index.php
|-- config.php
```

## Configuration
1. Create a Database: Set up a MySQL database and update the information in config.php.
2. Install Dependencies: Use `Composer.sh` to install project dependencies.
