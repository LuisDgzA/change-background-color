const body = document.body;
function getNumberRandom(max, min){
    var number = Math.floor(Math.random() * (max - min + 1) );
    return number;
}

function rgbToHex(r, g ,b){
    var segment1 = r.toString(16);
    if(segment1.length == 1){
        segment1 = "0" + segment1;
    }
    var segment2 = g.toString(16);
    if(segment2.length == 1){
        segment2 = "0" + segment2;
    }
    var segment3 = b.toString(16);
    if(segment3.length == 1){
        segment3 = "0" + segment3;
    }
    return "#" + segment1 + segment2 + segment3;
}
document.addEventListener("click", function(){
    var red = getNumberRandom(255, 0);
    var green = getNumberRandom(255, 0);
    var blue = getNumberRandom(255, 0);
    const brightness = Math.round(((red * 299) +
                      (green * 587) +
                      (blue * 114)) / 1000);
    const textColor = (brightness > 125) ? 'black' : 'white';
    var bodyColor = "rgb(" + red + "," + green + "," + blue + ")"; 
    var colorValue = rgbToHex(red, green, blue);
    body.style.background = bodyColor;
    document.querySelector(".container").style.color = textColor;
    document.getElementById("colorValue").innerHTML = colorValue;
})