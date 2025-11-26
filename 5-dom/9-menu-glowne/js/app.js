const menu = document.querySelector('#menu');
menu.classList.add('menu');

const listItems = menu.querySelectorAll('li');
const links = menu.querySelectorAll('a');

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        listItems.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});

function elementTransitionEnd(event) {
    const liElement = event.currentTarget;
    const link = liElement.querySelector('a');
    const href = link.href;

    liElement.removeEventListener('transitionend', elementTransitionEnd);
    
    console.log(href);
    
    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.textContent = 'Zamknij';
    liElement.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        listItems.forEach(li => {
            li.classList.remove('expand');
            li.classList.remove('collapsed');
        });
        
        closeButton.remove();
    });
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const parentLi = link.closest('li');

        listItems.forEach(li => {
            if (li !== parentLi) {
                li.classList.add('collapsed');
                li.classList.remove('expand');
            } else {
                li.classList.add('expand');
                li.classList.remove('collapsed');
            }
        });

        parentLi.addEventListener('transitionend', elementTransitionEnd);
    });
});