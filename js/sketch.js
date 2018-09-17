var numbers = [];

function setup() {
    createCanvas(800,400);
    generateNumbers();
    frameRate(2);
    strokeWeight(4);
}

function draw() {
    background(200);
    // c = current element, i = index, a = the whole array
    numbers.forEach(function(c, i, a) {
        if(c == max(a)) {
            stroke(255, 0, 0);
        } else if(c == min(a)) {
            stroke(0, 255, 0);
        } else {
            stroke(0);
        }
        line(i * 4 + 2, 0, i * 4 + 2, c);
    });
    bubblesort();

}

/**********************************************************/

function generateNumbers() {
    for(var i = 0; i < 200; i++) {
        var h = Math.floor(Math.random() * height + 1);
        numbers[i] = h;
    }
}

function bubblesort() {
    for(var i = 0; i < numbers.length - 1; i++) {
        if(numbers[i] > numbers[i+1]) {
            var temp = numbers[i+1];
            numbers[i+1] = numbers[i];
            numbers[i] = temp;
        }
    }
}