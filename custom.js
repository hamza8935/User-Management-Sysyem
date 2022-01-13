let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let para = document.querySelector('.para');
let right = document.querySelector('.right-center');
let add = document.querySelector('.add-user');
let user = document.querySelector('.user');
let delete1 = document.querySelector('.del-user');
let login = document.querySelector('.login');



btn1.addEventListener('click',function ( ) {

 add.style.display = 'block';
 user.style.display = 'none';
 delete1.style.display = 'none';  
 login.style.display = 'none';

})

btn2.addEventListener('click',function ( ) {
      user.style.display = 'block';
      delete1.style.display = 'none';  
 login.style.display = 'none';
 add.style.display = 'none';
})
btn3.addEventListener('click',function () {
  delete1.style.display = 'block';  
  login.style.display = 'none';
 add.style.display = 'none';
 user.style.display = 'none';
})
btn4.addEventListener('click',function ( ) {
    login.style.display = 'block';
    add.style.display = 'none';
 user.style.display = 'none';
 delete1.style.display = 'none';  
})