    const cards = document.querySelector(".cards");
    const card_one = document.querySelector(".card_one");
    const modal = document.querySelector(".modal");
    const btn1 = document.querySelector("#dobavit1");
    const btn2 = document.querySelector("#dobavit2");
    const btn3 = document.querySelector("#dobavit3");
     const btn4 = document.querySelector("#dobavit4");
     const btn5 = document.querySelector("#dobavit5");
     const btn6 = document.querySelector("#dobavit6");
    const icon = document.querySelector("#icon");
    const ddde = document.querySelector(".ddde");
    const iconshop= document.querySelector("#iconshop");
    iconshop.addEventListener("click", function() {
       modal.classList.add("flex");
       modal.classList.remove("none");
    })

    const arr = [];
    btn1.addEventListener('click', function() {
      btn1.innerHTML ="dobavleniya"
      btn1.classList.add("active");
      // modal.classList.add("flex");
      // modal.classList.remove("none");
      ddde.innerHTML =  `      
        <h3>Шок. конфеты Лучшей маме</h3>
            <h4>1200 rubl.</h4>
            <img src="./images/rec.png" alt="" />
      `;
    })

    btn2.addEventListener("click", function () {
      btn2.innerHTML = "dobavleniya";
      btn2.classList.add("active")
      // modal.classList.add("flex");
      // modal.classList.remove("none");
      ddde.innerHTML += `      
        <h3>Шок. конфеты Лучшей маме</h3>
            <h4>1200 rubl.</h4>
           <img src="./images/Rectangle 25.png" alt="" />
      `;
    });

      btn3.addEventListener("click", function () {
        btn3.innerHTML = "dobavleniya";
        btn3.classList.add("active");
        // modal.classList.add("flex");
        // modal.classList.remove("none");
        ddde.innerHTML += `      
        <h3>Шок. конфеты Лучшей маме</h3>
            <h4>1200 rubl.</h4>
           <img src="./images/Rectangle 25 (1).png" alt="" />
      `;
      });
           btn4.addEventListener("click", function () {
             btn4.innerHTML = "dobavleniya";
             btn4.classList.add("active");
             // modal.classList.add("flex");
             // modal.classList.remove("none");
             ddde.innerHTML += `      
        <h3>Шок. конфеты Лучшей маме</h3>
            <h4>1200 rubl.</h4>
           <img src="./images/Rectangle 25 (2).png" alt="" />
      `;
           });

           btn5.addEventListener("click", function () {
             btn5.innerHTML = "dobavleniya";
             btn5.classList.add("active");
             // modal.classList.add("flex");
             // modal.classList.remove("none");
             ddde.innerHTML += `      
        <h3>Шок. конфеты Лучшей маме</h3>
            <h4>1200 rubl.</h4>
          />
          <img src="./images/Rectangle 25 (3).png" alt="" />
      `;
           });
              btn6.addEventListener("click", function () {
                btn6.innerHTML = "dobavleniya";
                btn6.classList.add("active");
                // modal.classList.add("flex");
                // modal.classList.remove("none");
                ddde.innerHTML += `      
        <h3>Шок. конфеты Лучшей маме</h3>
            <h4>1200 rubl.</h4>
            <img src="./images/Rectangle 25 (4).png" alt="" />
      `;
              });


    icon.addEventListener('click' , function () {
      modal.classList.remove("flex")
      modal.classList.add("none")
    })

    // cards.addEventListener("click", function(e) {
    //   const id = e.target.dataset.id ;
    //   if (id === 1) {
    //     modal.innerHTML = `
    //     <h3>Шок. конфеты Лучшей маме</h3>
    //         <h4>1200 rubl.</h4>
    //     `;
    //   }
    // })
   
   

    // const about = document.querySelector('.about');

// const btn1 = document.querySelectorAll('.small');

// const article = document.querySelector('.article');

// about.addEventListener('click', function(e) {
//     const id = e.target.dataset. id;
//     if (id) {
//         ByteLengthQueuingStrategy.
//     }
// })





let quantity = 0;

const incbtn = document.getElementById("inc");
const value = document.getElementById("value");
const decbtn = document.getElementById("dec");

incbtn.addEventListener("click", function () {
  quantity--;
  
  value.textContent = quantity;
});

decbtn.addEventListener("click", function () {
  quantity++;
  //   console.log(quantity);
  value.textContent = quantity;
  if (quantity < 0) {
    value.textContent = 0;
  }
});

let titiy = 0;


const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");

bt1.addEventListener("click", function () {
  titiy--;
  // console.log(quantity);
  bt2.textContent = titiy;
});

bt3.addEventListener("click", function () {
  titiy++;
  //   console.log(quantity);
  bt2.textContent = titiy;
  if (titiy < 0) {
    bt2.textContent = 0;
  }
});

const btnjs = document.querySelector('.btnjs')

btnjs.addEventListener('click' , function() {
  btnjs.textContent = "dobavleniya"
})




