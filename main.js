// Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.1,
    vizio: 3.5,
    panasonic: 3.9,
    phillips: 4.3
}

// Total Stars
const starsTotal = 5;

//Run getRatins when DOM Loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form elements
const productSelect = document.querySelector('#product-select');
const ratingControl = document.querySelector('#rating-control');

// Init Product
let product;

// product select change
productSelect.addEventListener('change', (e) => {
    product = e.target.value;

    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[ product ];
});

//Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // Make sure input shuld be 5 or under
    if(rating > 5){
        alert('Please rate 1 - 5');
        return;
    }

    // Change rating
    ratings[product]= rating;

    getRatings();
})

// Get ratings
function getRatings() {
    for (let rating in ratings) {
        // Get percentage
        const starPercentage = (ratings[ rating ] / starsTotal) * 100;

        // Round to nearest 10
        const starPercentageRounded = `${ Math.round(starPercentage / 10) * 10 }%`;

        // Set witdth of stars-inner to percentage
        document.querySelector(`.${ rating } .stars-inner`).style.width = starPercentageRounded;

        // Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}