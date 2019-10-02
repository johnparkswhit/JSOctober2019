let isOn = true;

if(isOn !== true) {
    console.log('The light is on!');
}

if (isOn) { //we got rid of === true because by default, it is looking for true
    console.log('The light is on, yay!');
}

let isOff = false;
if(isOff === false) {
    console.log('The light is off');
}

let weather = 55
if(weather <= 70){
    console.log('Wear a jacket');
}