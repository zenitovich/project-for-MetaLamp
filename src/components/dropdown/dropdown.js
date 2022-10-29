const allDropdowns = document.querySelectorAll(".mixin__dropdown")
allDropdowns.forEach(dropdown => {
    let numbers = 0
    let numbers2 = 0
    let numbers3 = 0
    const numbersCount = dropdown.querySelector("#numberPlace-first")
    const numbersCount2 = dropdown.querySelector("#numberPlace-second")
    const numbersCount3 = dropdown.querySelector("#numberPlace-third")
    const plusBtn = dropdown.querySelector("#plus-first")
    const minusBtn = dropdown.querySelector("#minus-first")
    const plusBtn2 = dropdown.querySelector("#plus-second")
    const minusBtn2 = dropdown.querySelector("#minus-second")
    const plusBtn3 = dropdown.querySelector("#plus-third")
    const minusBtn3 = dropdown.querySelector("#minus-third")
    const inputValue = dropdown.querySelector("#value-of-mixin")
    const enter = dropdown.querySelector("#enter")
    const dropbtn = dropdown.querySelector("#dropbtn")
    const clean = dropdown.querySelector("#clean")

    plusBtn.addEventListener("click", () => {
        numbers++
        numbersCount.innerText = numbers
        updateCount()
    })
    minusBtn.addEventListener("click", () => {
        numbers--
        numbersCount.innerText = numbers
        updateCount()
    })
    plusBtn2.addEventListener("click", () => {
        numbers2++
        numbersCount2.innerText = numbers2
        updateCount()
    })
    minusBtn2.addEventListener("click", () => {
        numbers2--
        numbersCount2.innerText = numbers2
        updateCount()
    })
    plusBtn3.addEventListener("click", () => {
        numbers3++
        numbersCount3.innerText = numbers3
        updateCount()
    })
    minusBtn3.addEventListener("click", () => {
        numbers3--
        numbersCount3.innerText = numbers3
        updateCount()
    })

    clean.addEventListener('click', () => {
        numbers = numbers2 = numbers3 = 0
        numbersCount.innerText = numbersCount2.innerText = numbersCount3.innerText = 0
        updateCount()
    })

    function updateCount () {
        const allCount = numbers + numbers2 + numbers3 
        if (dropdown.dataset.type === 'guests') {
            if (allCount > 1 && allCount < 5) {
                inputValue.innerText = allCount + ' гостя'
                dropbtn.innerText = allCount + ' гостя'
            }
            else  if (allCount === 1) {
                inputValue.innerText = allCount + ' гость'
                dropbtn.innerText = allCount + ' гость'
            }
            else {
                inputValue.innerText = allCount + ' гостей'
                dropbtn.innerText = allCount + ' гостей'
            }
        }
        else {
            if (!numbers && !numbers2 && !numbers3) {
                dropbtn.innerText = '2 спальни, 2 кровати...'
                inputValue.innerText = '2 спальни, 2 кровати...'
                return
            }

            let str = ''

            if (numbers) {

                if (numbers === 1) {
                    str = numbers + ' спальня'
                }
                else if (numbers > 1 && numbers < 5) {
                    str= numbers + ' спальни'
                }
                else {
                    str = numbers + ' спален'
                }
            }

            if (numbers2) {

                if (numbers) {
                    if (numbers2 === 1) {
                        str = str + ', ' + numbers2 + ' кровать'
                    }
                    else if (numbers2 > 1 && numbers2 < 5) {
                        str= str + ', ' + numbers2 + ' кровати'
                    }
                    else {
                        str = str + ', ' + numbers2 + ' кроватей'
                    }
                }
                else {
                    if (numbers2 === 1) {
                        str = str + numbers2 + ' кровать'
                    }
                    else if (numbers2 > 1 && numbers2 < 5) {
                        str= str + numbers2 + ' кровати'
                    }
                    else {
                        str = str + numbers2 + ' кроватей'
                    }
                }
            }

            if (numbers3) {

                if (numbers2) {
                    if (numbers3 === 1) {
                        str = str + ', ' + numbers3 + ' ванная комната'
                    }
                    else if (numbers3 > 1 && numbers3 < 5) {
                        str= str + ', ' + numbers3 + ' ванные комнаты'
                    }
                    else {
                        str = str + ', ' + numbers3 + ' ванных комнат'
                    }
                }
                else {
                    if (numbers3 === 1) {
                        str = str + numbers3 + ' ванная комната'
                    }
                    else if (numbers3 > 1 && numbers3 < 5) {
                        str= str + numbers3 + ' ванные комнаты'
                    }
                    else {
                        str = str + numbers3 + ' ванных комнат'
                    }
                }
            }
            
            inputValue.innerText = str
            dropbtn.innerText = str
        }
    }


    //   enter.onclick = function() {
    //     if(enter.onclick) {
    //         
    //     }
    //     if(clean.onclick) {
            
    //             }
    //   }
})





//   const minusBtn = document.getElementById("minus-first"),
//       plusBtn = document.getElementById("plus-first"),
//       numberPlace = document.getElementById("numberPlace-first"),
//       valueOfMixin = document.getElementById("value-of-mixin"),
//       number = 0,
//       min = 0,
//       max = 10;
      
//   minusBtn.onclick = function(){
//       if (number>min){
//           number = number-1;
//           numberPlace.innerText = number ;
//           valueOfMixin.innerText = number3+number2+number;
//       }       
//   }
//   plusBtn.onclick = function(){
//       if(number<max){
//           number = number+1;
//           numberPlace.innerText = number ;
//           valueOfMixin.innerText = number3+number2+number;
//       }     
//   }
  
//   var minusBtn2 = document.getElementById("minus-second"),
//       plusBtn2 = document.getElementById("plus-second"),
//       numberPlace2 = document.getElementById("numberPlace-second"),
//       number2 = 0,
//       min2 = 0,
//       max2 = 10;
      
//   minusBtn2.onclick = function(){
//       if (number2>min2){
//           number2 = number2-1;
//           numberPlace2.innerText = number2 ;
//           valueOfMixin.innerText = number3+number2+number;
//       }       
//   }
//   plusBtn2.onclick = function(){
//       if(number2<max2){
//           number2 = number2+1;
//           numberPlace2.innerText = number2 ;
//           valueOfMixin.innerText = number3+number2+number;
//       }     
//   }

//   var minusBtn3 = document.getElementById("minus-third"),
//       plusBtn3 = document.getElementById("plus-third"),
//       numberPlace3 = document.getElementById("numberPlace-third"),
//       number3 = 0,
//       min3 = 0,
//       max3 = 10;
      
//   minusBtn3.onclick = function(){
//       if (number3>min3){
//           number3 = number3-1;
//           numberPlace3.innerText = number3 ;
//           valueOfMixin.innerText = number3+number2+number;
//       }       
//   }
//   plusBtn3.onclick = function(){
//       if(number3<max3){
//           number3 = number3+1;
//           numberPlace3.innerText = number3 ;
//           valueOfMixin.innerText = number3+number2+number;
//       }     
//   }
//   var enter = document.getElementById("enter")
//   var dropbtn = document.getElementById("dropbtn")
//   var clean = document.getElementById("clean")
//   enter.onclick = function() {
//     if(enter.onclick) {
//         dropbtn.innerText = valueOfMixin.innerText
//     }
//   }
//   clean.onclick = function() {
//     if(clean.onclick) {
//         numberPlace.innerText=0
//         numberPlace2.innerText=0
//         numberPlace3.innerText=0
//         valueOfMixin.innerText=0
//         number=min
//         number2=min2
//         number3=min3
//     }
// //     const romazan = document.querySelectorAll('.mixin__dropdown'),
// //     romazan.foreach(function(label){

// //   })
// }