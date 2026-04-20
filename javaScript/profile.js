let profile__nameWrapper = document.querySelector('.profile__nameWrapper')

profile__nameWrapper.innerHTML = 
            `
                <p class="profile-name"> ${localStorage.getItem('name')} </p>
                <span><p class="profile-email"> ${localStorage.getItem('email')} </p> </span>
                `
let openModal = document.querySelector('.openModal')
let Modal = document.querySelector('.Modal')
let close = document.querySelector('.close')
let Modal__info = document.querySelector('.Modal__info-wrapper')

openModal.onclick = () =>{
    Modal.style.display = 'block'
}
close.onclick = () =>{
    Modal.style.display = 'none'
}
window.onclick = (e)=>{
    if(e.target == Modal){
        Modal.style.display = 'none'
    }
}

Modal__info.innerHTML = 
                    `
                    <div class="mModal modal__name">
                <p class="text__modal modal__name-text">name: </p>
                <p class="modal__name-result"> ${localStorage.getItem('name')} </p>
            </div>
            <!-- <hr> -->
            <div class="mModal modal__email">
                <p class="text__modal modal__email-text">email: </p>
                <p class="modal__email-result"> ${localStorage.getItem('email')} </p>
            </div>
            <!-- <hr> -->
            <div class="mModal modal__password">
                <p class="text__modal modal__password-text">password: </p>
                <p class="modal__password-result"> ${localStorage.getItem('password')} </p>
            </div>
            <!-- <hr> -->
                    `

// ==============================================================================================
//  modalga qo'shimcha
// ______________________________________________________________________________________________

let exit = document.querySelector('.exit')
let log_out = document.querySelector('.log-out')

log_out.addEventListener('click', ()=>{
    window.location.href = '/html/secondPage.html';
})

exit.addEventListener('click', ()=>{
    window.location.href = '/html/index.html';
    localStorage.clear()
})
