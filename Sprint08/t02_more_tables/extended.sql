USE ucode_web;

CREATE TABLE IF NOT EXISTS powers (
    id INT(4) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    type ENUM('attack', 'defense')
);

CREATE TABLE IF NOT EXISTS heroes_powers (
    hero_id INT NOT NULL,
    power_id INT(4) UNSIGNED NOT NULL,
    power_points INT UNSIGNED DEFAULT 0,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
    FOREIGN KEY (power_id) REFERENCES powers(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS races (
    id INT(4) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS teams (
    id INT(4) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes_teams (
    hero_id INT NOT NULL,
    team_id INT(4) UNSIGNED NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);