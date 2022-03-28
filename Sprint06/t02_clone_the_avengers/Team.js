class Team {
    constructor(id, Avengers){
        this.id = id;
        this.Avengers = Avengers;
    }

    battle(damage){
        this.loses = 0;
        let indexesTodel = [];
        for(let x = 0; x <this.Avengers.length; x++){
            this.Avengers[x].hp -= damage.damage;
            if(this.Avengers[x].hp <= 0){
                indexesTodel.push(x);
                this.loses += 1;
            }
        }
        for (let i = indexesTodel.length -1; i >= 0; i--){
            this.Avengers = this.Avengers.splice(indexesTodel[i],1);
        }
    }

    calculateLosses(clonesTeam){
        if(this.loses === 0){
            console.log('We haven\'t lost anyone in this battle!');
        } else if (this.loses === 1){
            console.log(`In this battle we lost ${this.loses} Avenger`);
        } else {
            console.log(`In this battle we lost ${this.loses} Avengers`);
        }
    }

    clone(){
        return new Team(this.id, this.Avengers);
    }
}


module.exports.Team = Team;
