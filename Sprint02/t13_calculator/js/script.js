
function calc_init(n){
    this.result = n;
    return this;
}

function add  (n) {
    this.result += n;
    return this
};

function mul (n){ 
    this.result *= n;
    return this
};

function div (n) { 
    this.result /= n;
    return this
};

function sub (n) { 
    this.result -= n;
    return this
};

function calc_alert(){
    setTimeout(() => alert(this.result), 5000)
    return this
}

function Calculator() {
    this.result = 0;

    this.init = calc_init;

    this.add = add;

    this.mul = mul;

    this.div = div;

    this.sub = sub;

    this.alert = calc_alert;
}

