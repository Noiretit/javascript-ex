const container = document.querySelector('.container');

// querySelectorAll takes all the matches, puts them in a node-list, which behaves
// like an array, welcoming array methods
// All the seats in the row that are NOT occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); 

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

// "+" in front of movieSelect.value turns a string into a number
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total price and seat count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Copy the selected seats into an array
    // Map through the array
    // Return a new array of indexes
    const seatsIndex = [...selectedSeats].map(seat =>  [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
};

// Get data from localStorage and populate the UI
// Can't use an arrow functions, it throws "can't access before initialization"
function populateUI() {
    // JSON.parse turns it into an array (object)
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  
    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie select event
// When the movieSelect (which is the movie in the option menu) is changed, this
// event fires up, updating the ticketPrice to the actual value of the movie and calls the
// function to calculate the price and number of seats
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', (e) => {
    // If the clicked seats contains the class "seat" and it doesn't contain the class "occupied"
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
});

// Initial count and total
updateSelectedCount();

