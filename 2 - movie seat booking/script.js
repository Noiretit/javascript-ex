const container = document.querySelector('.container');

// querySelectorAll takes all the matches, puts them in a node-list, which behaves
// like an array, welcoming array methods
// All the seats in the row that are NOT occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); 

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// "+" in front of movieSelect.value turns a string into a number
let ticketPrice = +movieSelect.value;

// Update total price and seat count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
// When the movieSelect (which is the movie in the option menu) is changed, this
// event fires up, updating the ticketPrice to the actual value of the movie and calls the
// function to calculate the price and number of seats
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', (e) => {
    // If the clicked seats contains the class "seat" and it doesn't contain the class "occupied"
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
})