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


    bubbleSort(numbers);
//    selectionSort(numbers);
//    insertionSort(numbers);

}

function generateNumbers() {
    for(var i = 0; i < width; i++) {
        var h = Math.floor(Math.random() * height + 1);
        numbers[i] = h;
    }
}

function bubbleSort(array) {
    for(var i=0; i < array.length; i++){
        if(array[i]<array[i+1]){
            var temp = array[i+1];
            array[i+1] = array[i];
            array[i]=temp;
            
        }
    }
    console.log(array);
}

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(var i = 0; i < array.length; i++) {
    
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  console.log(array);
}

function insertionSort(array){
  var i, len = array.length, el, j;

  for(i = 1; i<len; i++){
    el = array[i];
    j = i;

    while(j>0 && array[j-1]>array[j]){
      array[j] = array[j-1];
      j--;
   }

   array[j] = el;
  }

  return arr;
}
        

/*
    Array = [3,2,1]
    Take highest value and push to the end
    Also splice it from current position
    Do I need a temp array?
    loop happens once since the highest number never changes
    need a way to exclude highest number in next calculation     
*/
