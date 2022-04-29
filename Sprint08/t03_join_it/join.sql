USE ucode_web;

SELECT heroes.id,
    heroes.name as hero_name,
    teams.name as team_name
FROM  heroes
    LEFT JOIN heroes_teams ON (heroes.id = heroes_teams.hero_id)
    LEFT JOIN teams ON (teams.id = heroes_teams.team_id)
ORDER BY heroes.id;


SELECT heroes_powers.hero_id,
    heroes.name as hero_name,
    powers.name as power_name,
    powers.type as power_type
FROM heroes_powers
    RIGHT JOIN heroes ON (heroes.id = heroes_powers.hero_id)
    RIGHT JOIN powers ON (powers.id = heroes_powers.power_id);

SELECT heroes.id as hero_id,
    heroes.name as hero_name,
    teams.name as team_name,
    powers.name as power_name
FROM  heroes
    JOIN heroes_teams ON (heroes.id = heroes_teams.hero_id)
    JOIN heroes_powers ON (heroes.id = heroes_powers.hero_id)
    JOIN powers ON (powers.id = heroes_powers.power_id)
    JOIN teams ON (teams.id = heroes_teams.team_id)
ORDER BY heroes.id;
