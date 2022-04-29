USE ucode_web;

SELECT heroes.id,
    heroes.name as hero_name
FROM heroes
    JOIN heroes_powers ON (heroes.id = heroes_powers.hero_id)
    JOIN powers ON (powers.id = heroes_powers.power_id)
    JOIN heroes_teams ON (heroes.id = heroes_teams.hero_id)
    JOIN teams ON (teams.id = heroes_teams.team_id)
    JOIN races ON (heroes.race_id = races.id)
WHERE races.name != 'Human'
    AND heroes.name LIKE '%a%'
    AND (
        heroes.class_role = 'tankman'
        OR heroes.class_role = 'healer'
    )
GROUP BY heroes.name
ORDER BY heroes.id asc
LIMIT 1;
