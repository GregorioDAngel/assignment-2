const { d } = require("./d");

    let text = d.toLocaleDateString();
    document.getElementById("today").innerHTML = text;

    
    var slider = document.getElementById("budget");
    var output = document.getElementById("rangedisplay");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
