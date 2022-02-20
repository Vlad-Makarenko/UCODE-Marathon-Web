let description = document.getElementById("description");
let img = document.getElementById("poster");
let title = document.getElementById("title");

function SpiderMan(){
    description.innerHTML = "Spider-Man has spider-like abilities including superhuman strength and the ability to cling to most surfaces. He is also extremely agile and has amazing reflexes. Spider-Man also has a “spider sense,” that warns him of impending danger. ... In the recent storyline, Spider-Man has been reborn with even stronger abilities.";
    img.src = "assets/images/spider-man.jpeg";
    title.innerHTML = "Spider-Man";
}

function Thor(){
    description.innerHTML = "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. ... After reigniting a dormant war, Thor is banished from Asgard to Earth, stripped of his powers and his hammer Mjölnir. As his brother Loki (Hiddleston) plots to take the Asgardian throne, Thor must prove himself worthy."
    img.src = "assets/images/thor.jpeg";
    title.innerHTML = "Thor";
}

function Avengers(){
    description.innerHTML = "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City."
    img.src = "assets/images/avengers.jpeg";
    title.innerHTML = "Avengers";
}
