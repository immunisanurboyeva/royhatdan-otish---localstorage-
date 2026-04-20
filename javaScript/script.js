// =====================================================================
//      index, first page
// ---------------------------------------------------------------------

// let form = document.querySelector('.form')
// let nameInp = document.querySelector('.nameInp')
// let emailInp = document.querySelector('.emailInp')
// let passwordInp = document.querySelector('.passwordInp')
// let repasswordInp = document.querySelector('.repasswordInp')
// let error = document.querySelector('.error')

//     form.addEventListener('submit', (e)=>{
//         e.preventDefault();
        

//         if( nameInp.value.trim() !== "" &&
//             emailInp.value.trim() !== "" &&
//             passwordInp.value.trim() !== "" &&
//             repasswordInp.value.trim() !=="" ){

//                 if(emailInp.value.endsWith('@gmail.com')  && passwordInp.value.length >= 6 && passwordInp.value === repasswordInp.value){
    
//                         localStorage.setItem('name', nameInp.value.trim())
//                         localStorage.setItem('parol', passwordInp.value.trim())
//                         localStorage.setItem('email', emailInp.value.trim())

//                         window.location.href = '/html/secondPage.html'
//                 }
//             }
//             else{
//                 console.log('inputlarni toldiring');
//             }
            
//     }) 


// =====================================================================
//      index, first page
// ---------------------------------------------------------------------

let form = document.querySelector('.form');
let nameInp = document.querySelector('.nameInp');
let emailInp = document.querySelector('.emailInp');
let passwordInp = document.querySelector('.passwordInp');
let repasswordInp = document.querySelector('.repasswordInp');
let error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = nameInp.value.trim();
    let email = emailInp.value.trim();
    let password = passwordInp.value.trim();
    let repassword = repasswordInp.value.trim();

    error.textContent = "";

    if (name !== "" && email !== "" && password !== "" && repassword !== "") {

        if (email.endsWith('@gmail.com')) {

            if (password.length >= 6 && password === repassword) {

                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('parol', password);

                window.location.href = '/html/secondPage.html';

            } else {
                error.textContent = "Parol kamida 6 ta bo'lishi va bir xil bo'lishi kerak.";
            }

        } else {
            error.textContent = "Email noto'g'ri.";
        }

    } else {
        error.textContent = "Barcha inputlarni to'ldiring.";
    }
});



