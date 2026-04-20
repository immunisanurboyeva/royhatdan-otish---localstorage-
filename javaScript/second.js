// =====================================================================
//    second page
// ---------------------------------------------------------------------

let second_emailInp = document.querySelector('.second-emailInp')
let second_passwordInp = document.querySelector('.second-passwordInp')
let form2 = document.querySelector('.form2')

    form2.addEventListener('submit', (a)=>{
        a.preventDefault();
    
        if(second_emailInp.value.trim() === localStorage.getItem('email') &&
            second_passwordInp.value.trim() === localStorage.getItem('parol') ){

            window.location.href = '/html/profile.html'
        }
        else{
            console.log(false);
        }
    })
