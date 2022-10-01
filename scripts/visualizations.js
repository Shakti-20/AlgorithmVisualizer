var speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
    var array_speed = inp_aspeed.value;
    switch (parseInt(array_speed)) {
        case 1: speed = 3;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }

    delay_time = 10000 / (Math.floor(array_size / 10) * speed);        //Decrease numerator to increase speed.
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);        //Decrease numerator to increase speed.
var c_delay = 0;//This is updated ov every div change so that visualization is visible.

function div_update(cont, height, color) {
    window.setTimeout(function () {
        cont.style = " margin:0% 0% " + margin_size + "%; height:" + (100 / array_size - (2 * margin_size)) + "%; width:" + height + "%; text-align: center;font-weight: bold; color: white; background-color:" + color + ";";
    }, c_delay += delay_time);
}

function value_update(a, b) {
    window.setTimeout(function () {
        a.innerHTML = b;
    }, c_delay += delay_time);
}