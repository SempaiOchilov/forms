
// let boxes = document.querySelectorAll('div')








// box.onclick = () => {



// console.log("cliking")

// }



// box.ondblclick = () => {


//     console.log("double click");
// }


// box.onmouseenter = () => {
//     console.log("entered");
// }

// box.onmouseleave = () => {
//     console.log("leaved");
// }


// box.onmousemove = () => {
//     console.log("miving...");
// }       


// const total_view = document.querySelector("#total")
// const memories_btn = document.querySelectorAll(".col button")
// let total_price = 2999

// memories_btn.forEach(btn => {
//   btn.onclick = () => {

//     document.querySelector(".col .active").classList.remove("active")


//     btn.classList.add("active")

//     const add_price = +btn.getAttribute("data-add")
//     let total = Number(total_price + add_price)





//     total_view.innerHTML = total.toLocaleString("en-BN")


//   }


// })

// // let space_gray = document.querySelector("#space-gray")
// // let white = document.querySelector("#white")

// let colors = {
//   space_gray,
//   white
// }

// colors.forEach(color => {

//   color.onclick = () => {



//     color.classList.add("active")
//     color.classList.remove("active")

//   }


// })












// let button1 = document.querySelector('.one')
// let button2 = document.querySelector('.two')









// button1.onclick = () => {

//       button2.classList.add('active')
// }

// button2.onclick = () => {

//     button1.classList.add('active')


// }
// console.log(button1,button2);





// let inp = document.querySelector('input')
// let btn = document.querySelector('button')


// btn.onclick = () => {
// if(inp.getAttribute('type') === "text"){
//     inp.getAttribute('type, password')
//     btn.innerHTML = "passed"
// } else{
//     inp.getAttribute('type, text')
//     btn.innerHTML = "passert"
// }











// }




// let btns = document.querySelectorAll('button')

// btns.forEach((btn) =>{
//     btn.onmouseenter = () => {
//         console.log('clicked' , btn.innerText);
//         document.body.style.background = btn.innerText
//     }
// })



// const img = document.querySelector('.iphone.img')
// const btns = document.querySelectorAll('button')


// const images = {
//     titan : "titan.jpeg",
//     blue : "blue.jpeg",
//     white : "white.jpeg",
//     black : "b.jlackpeg"

// }

// btns.forEach(btn => {
//     btn.onclick = () => {
//         let color = btn.innerText
//         img.setAttribute('src' , images[color])
//     }
// })





// let boxes = document.querySelectorAll('.box')

// boxes.forEach (box => {
//     box.onmouseenter = () => {
//         box.classList.add('active')
//     }
// })







// document.addEventListener('DOMContentLoaded', function() {
//   let answer = document.getElementById("answer");
//   let button = document.querySelector("#button");

//   function showAnswer() {
//     answer.style.display = "block";
//   }

//   button.addEventListener('click', function() {
//     showAnswer();
//   });
// });



// let items = document.querySelectorAll(".item")



// items.forEach(item =>{

//  console.log(item);


//   item.onclick = () => {
//     item.classList.toggle("active")





//   }

// }) 




// let btn_on = document.querySelector(`#chorniy`)
// let btn_off = document.querySelector(`#iks`)
// let box = document.querySelector(".box")

// btn_on.onclick = () => {
//     box.style.display = "flex"
//     box.style.transform = "translateX(100%)"; // Сбрасываем transform после завершения анимации
//     box.style.transform = "translateX(0)"; // Сбрасываем transform после завершения анимации


// }


// btn_off.onclick = () => {
//     box.style.transform = "translateX(100%)"; // Добавляем анимацию закрытия

//         box.style.transform = "translateX(0)"; // Сбрасываем transform после завершения анимации

//     box.style.display = "none";
// }






// onmouseenter











// const form = document.forms.login_left
// const inputs = form.querySelectorAll(`input`)





// form.onsubmit = (event) => {
//     event.preventDefault()

//     const user = {}
//     let hasError = false;

//     const fm = new FormData(form)

//     fm.forEach((val, key) => {
//         user[key] = val
//     })

//     inputs.forEach(inp => {
//         if (inp.value === ``) {
//             console.log(` otsuda `);
//             hasError = true;
//         }
//     })

//     if (hasError) {

//         return;
//     }
//     console.log(user)
// }


let inputs = document.querySelectorAll('.main-input, .not-main-input');
let error = true



function saveChanges() {
    let user = {}

    inputs.forEach(input => {
        if (input.classList.contains('main-input') && !input.value.trim()) {
            error = false
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    });

    if (error) {
        inputs.forEach(input => {
            user[input.name] = input.value
        });
        console.log(user);
    } else {
        console.log('Zapolni !');
    }
}

