const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

// Store listitems
const listItems = [];

let dragStartIndex;

// Insert list items into DOM
const createList = () => {
    [...richestPeople]
        // map goes through the array and gives back its value and adds
        // a new one with a Math.random (from 0 to 1 with decimals)
        .map(each => ({ value: each, sort: Math.random() }))
        // sort orders them by their sort property
        .sort((a, b) => a.sort - b.sort)
        // this map shows the value of each iteration (without it gives back [object Object])
        .map(a => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement('li');
            // When setting an attribute, you have to name it "data-" and then whatever you want
            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
            <span class="number">${index+1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem)
        });

        addEventListeners();
};

function dragStart() {
    // console.log('Event: ', 'dragstart')
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
}

function dragEnter()  {
    // console.log('Event: ', 'dragenter')
    this.classList.add('over');
}

function dragLeave() {
    // console.log('Event: ', 'dragleave')
    this.classList.remove('over');
}

function dragOver(e) {
    // console.log('Event: ', 'dragover')
    e.preventDefault();
}

function dragDrop() {
    // console.log('Event: ', 'drop')
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

// Swap items that are drag/dropping
function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    // console.log(itemOne, itemTwo);

    // This allows to change the list
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}

createList();

// Check if order of the list is correct
function checkOrder() {
    listItems.forEach((item, index) => {
        const personName = item.querySelector('.draggable').innerText.trim();

        if(personName !== richestPeople[index]){
            item.classList.add('wrong');
        } else {
            item.classList.remove('wrong');
            item.classList.add('right');
        }
    })
}

check.addEventListener('click', checkOrder)
