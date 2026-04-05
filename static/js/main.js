var menuIten = document.querySelectorAll('.iten-menu');

function select_link(){
    menuIten.forEach((item) => 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo');
}

menuIten.forEach((item) =>
    item.addEventListener('click', select_link)
)