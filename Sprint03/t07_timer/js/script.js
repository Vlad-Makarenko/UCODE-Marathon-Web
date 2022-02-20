class Timer {
    constructor(title, delay, stopCount){
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }

    start(){
        console.log(`Timer ${this.title} started (delat=${this.delay}, stopCount=${this.stopCount})`);
        this.tick();
        let interval = setInterval( () => {
            if(this.stopCount < 0){
                clearInterval(interval);
                this.stop();
            }
            else{
                this.tick();
            }
        }, this.delay);
    }

    tick() {
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`)
        this.stopCount--;
    }
    
    stop() {
        console.log(`Timer ${this.title} stopped`)
    }


}

function runTimer(title, delay, stopCount) {
    new Timer(title, delay, stopCount).start()
}
