USE ucode_web;

INSERT INTO powers (name, type) VALUES ('bloody fist', 'attack');
INSERT INTO powers (name, type) VALUES ('iron shield', 'defense');

INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES (2, 1, 110);
INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES (3, 2, 200);

INSERT INTO races (name) VALUES ('Humam');
INSERT INTO races (name) VALUES ('kree');

INSERT INTO teams(name) VALUES('Avengers');
INSERT INTO teams(name) VALUES('Hydra');
