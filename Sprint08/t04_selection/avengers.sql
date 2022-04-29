USE ucode_web;


SELECT heroes.id,
    heroes.name,
    SUM(heroes_powers.power_points) as power_points
FROM heroes
    JOIN heroes_powers ON (heroes.id = heroes_powers.hero_id)
GROUP BY heroes.name
ORDER BY power_points DESC
LIMIT 1;

SELECT heroes.id,
    heroes.name as hero_name,
    powers.name as power_name,
    SUM(heroes_powers.power_points) as power_points
FROM heroes
    JOIN heroes_powers ON (heroes.id = heroes_powers.hero_id)
    JOIN powers ON (powers.id = heroes_powers.power_id) 
    WHERE powers.type = "defense"
GROUP BY heroes.name
ORDER BY power_points ASC
LIMIT 1;

SELECT heroes.id,
    heroes.name as hero_name,
    powers.name as power_name,
    SUM(heroes_powers.power_points) as power_points
FROM heroes
    JOIN heroes_powers ON (heroes.id = heroes_powers.hero_id)
    JOIN powers ON (powers.id = heroes_powers.power_id) 
    JOIN heroes_teams ON (heroes.id = heroes_teams.hero_id)
    JOIN teams ON (teams.id = heroes_teams.team_id) 
    WHERE teams.name IN ("Avengers")
GROUP BY heroes.name
ORDER BY power_points DESC;


SELECT teams.name,
    SUM(heroes_powers.power_points) as power_points
FROM heroes
    JOIN heroes_powers ON (heroes.id = heroes_powers.hero_id)
    JOIN heroes_teams ON (heroes.id = heroes_teams.hero_id)
    JOIN teams ON (teams.id = heroes_teams.team_id) 
GROUP BY teams.name
ORDER BY power_points ASC;



