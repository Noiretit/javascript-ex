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
}

createList();