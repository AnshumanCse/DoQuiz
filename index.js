// function myFunction(){
//   alert("What your age");

function myFunction() {
    alert("Soryy!! cervice will be available very soon.🙏🙏");
  }

// let fruitList;
// fruitList =[ "Mango,banana,apple,guava,lichi,"];
// console.log(fruitList);
// let thankou;
// console.log(thankou)

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')


}
