window.onload=function(){
  var minusBtn = document.getElementById("minus-first"),
      plusBtn = document.getElementById("plus-first"),
      numberPlace = document.getElementById("numberPlace-first"),
      valueOfMixin = document.getElementById("value-of-mixin"),
      number = 0,
      min = 0,
      max = 10;
      
  minusBtn.onclick = function(){
      if (number>min){
          number = number-1;
          numberPlace.innerText = number ;
          valueOfMixin.innerText = number3+number2+number;
      }       
  }
  plusBtn.onclick = function(){
      if(number<max){
          number = number+1;
          numberPlace.innerText = number ;
          valueOfMixin.innerText = number3+number2+number;
      }     
  }
  
  var minusBtn2 = document.getElementById("minus-second"),
      plusBtn2 = document.getElementById("plus-second"),
      numberPlace2 = document.getElementById("numberPlace-second"),
      number2 = 0,
      min2 = 0,
      max2 = 10;
      
  minusBtn2.onclick = function(){
      if (number2>min2){
          number2 = number2-1;
          numberPlace2.innerText = number2 ;
          valueOfMixin.innerText = number3+number2+number;
      }       
  }
  plusBtn2.onclick = function(){
      if(number2<max2){
          number2 = number2+1;
          numberPlace2.innerText = number2 ;
          valueOfMixin.innerText = number3+number2+number;
      }     
  }

  var minusBtn3 = document.getElementById("minus-third"),
      plusBtn3 = document.getElementById("plus-third"),
      numberPlace3 = document.getElementById("numberPlace-third"),
      number3 = 0,
      min3 = 0,
      max3 = 10;
      
  minusBtn3.onclick = function(){
      if (number3>min3){
          number3 = number3-1;
          numberPlace3.innerText = number3 ;
          valueOfMixin.innerText = number3+number2+number;
      }       
  }
  plusBtn3.onclick = function(){
      if(number3<max3){
          number3 = number3+1;
          numberPlace3.innerText = number3 ;
          valueOfMixin.innerText = number3+number2+number;
      }     
  }
  var enter = document.getElementById("enter")
  var dropbtn = document.getElementById("dropbtn")
  var clean = document.getElementById("clean")
  enter.onclick = function() {
    if(enter.onclick) {
        dropbtn.innerText = valueOfMixin.innerText
    }
  }
  clean.onclick = function() {
    if(clean.onclick) {
        numberPlace.innerText=0
        numberPlace2.innerText=0
        numberPlace3.innerText=0
        valueOfMixin.innerText=0
        number=min
        number2=min2
        number3=min3
    }
  }
//     const romazan = document.querySelectorAll('.mixin__dropdown'),
//     romazan.foreach(function(label){

//   })
}