let numbers = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
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
    bubbleSort();
//      selectionSort();
}

function generateNumbers() {
    for(var i = 0; i < width; i++) {
        var h = Math.floor(Math.random() * height + 1);
        numbers[i] = h;
    }
}

function bubbleSort() {
    for(var i=0; i < numbers.length; i++){
        if(numbers[i]<numbers[i+1]){
            var temp = numbers[i+1];
            numbers[i+1] = numbers[i];
            numbers[i]=temp;
            
        }
    }
}

function selectionSort() {
    for(var i=0;i<numbers.length;i++){
        if(numbers[i] === min(numbers)) {
            var temp = numbers[i];
            var tempNumbers = [];
            numbers.push(numbers.splice(numbers.indexOf(numbers[i]), 1)[0]);
        
            
        }
    }
    
}

