const btns = document.querySelectorAll('.tab');
const tabsContainer = document.querySelector('.tabsContainer');
const contents = document.querySelectorAll('.content');

tabsContainer.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        contents.forEach((content)=>{
            content.classList.remove('show');
        });
        const element = document.getElementById(id);
        element.classList.add('show');
    }
});