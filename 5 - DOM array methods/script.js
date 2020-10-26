const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// Fetch random user and add money to it
const getRandomUser = async () => {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    // console.log(newUser);

    addData(newUser);
};

// Doubles user's money
const doubleMoney = () => {
    // "data" (line 8) is an array of objects
    // Each object has "name" and "money"
    // When map iterates through data, we tell it to return 
    // the same (...user) but to double the money
    data = data.map((user) => {
        return { ...user, money: user.money * 2 }
    });

    updateDOM();
}

// Add a new user to the data array
const addData = obj => {
    data.push(obj);

    updateDOM();
};

// Updates DOM with each user in the data array
const updateDOM = (providedData = data) => {
    // Clear main david
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    providedData.forEach(person => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(person.money)}`;
        main.appendChild(element);
    });
};

// Format wealth as money
const formatMoney = number => number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' €';

getRandomUser();
getRandomUser();
getRandomUser();


// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);