CREATE DATABASE chirp;

USE chirp;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE tweets (
    tweet_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    content TEXT NOT NULL,
    publish_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE followers (
    follower_id INT AUTO_INCREMENT PRIMARY KEY,
    follower_user_id INT,
    followed_user_id INT,
    FOREIGN KEY (follower_user_id) REFERENCES users(user_id),
    FOREIGN KEY (followed_user_id) REFERENCES users(user_id)
);

CREATE TABLE media (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    tweet_id INT,
    media_url VARCHAR(255),
    FOREIGN KEY (tweet_id) REFERENCES tweets(tweet_id)
);