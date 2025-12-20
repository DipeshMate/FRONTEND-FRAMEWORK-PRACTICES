const modal = document.querySelector('.modal');
const overlay = document.querySelector('.ovrlay');

//modal open mfunction
const openModal =()=>{
    console.log('Modal is Open');
    modal.classList.add('active');
    overlay.classList.add('overlayative');
}

//modal close function

const closeModal=()=>{
    console.log('modal is close');
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
}