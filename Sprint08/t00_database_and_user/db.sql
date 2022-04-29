CREATE DATABASE ucode_web;

CREATE USER 'vmakarenko'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'vmakarenko'@'localhost';
