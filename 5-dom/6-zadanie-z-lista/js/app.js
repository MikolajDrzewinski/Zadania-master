document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.list');
    const addButton = document.getElementById('add');
    const templateScript = document.getElementById('elementInner');

    function getNextNumber() {
        return list.querySelectorAll('.element').length + 1;
    }

    function createNewElement(number) {
        const templateHtml = templateScript.innerHTML;
        
        const newElement = document.createElement('div');
        newElement.classList.add('element');
        newElement.innerHTML = templateHtml;
        
        const nrSpan = newElement.querySelector('.nr');
        if (nrSpan) {
            nrSpan.textContent = number;
        }
        
        return newElement;
    }

    // Obsługa dodawania elementu
    addButton.addEventListener('click', () => {
        const nextNumber = getNextNumber();
        const newElement = createNewElement(nextNumber);
        list.appendChild(newElement);
    });

    // Obsługa usuwania i klonowania (delegacja zdarzeń)
    list.addEventListener('click', function(event) {
        const target = event.target;
        const element = target.closest('.element');

        if (!element) {
            return;
        }

        // Usuń element
        if (target.classList.contains('delete')) {
            element.remove();
        } 
        // Klonuj element
        else if (target.classList.contains('clone')) {
            const nextNumber = getNextNumber();
            
            const clonedElement = element.cloneNode(true);
            
            const nrSpan = clonedElement.querySelector('.nr');
            if (nrSpan) {
                nrSpan.textContent = nextNumber;
            }

            list.appendChild(clonedElement);
        }
    });
});