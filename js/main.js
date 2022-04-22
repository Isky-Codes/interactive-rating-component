//When a button is clicked with the corresponding 'Rating' number, this value is saved such that it can be re-used later in the 'Thank You' section to indicate which number was chosen.

//When the submit button is clicked, either:
//  -If number was not chosen, alert the user to pick a number.
//  -If number was chosen, save the value to be reused and hide the 'Rating' card and show the 'Thank You' card.

//On the 'Thank You' card add the chosen number to the <span> to indicate which number was chosen to the user.

//Creating the submit button functionality to remove the 'Rating' card and show the 'Thank You' card.

const submitBtn = document.querySelector('.submitButton');
const ratingCard = document.querySelector('.ratingContainer');
const thankYouCard = document.querySelector('.thankYouContainer');
const buttons = document.querySelectorAll('.ratingButtons');
buttons.forEach(btn =>
    btn.addEventListener('click', grabRatingValue))

submitBtn.addEventListener('click', onSubmitClick);

function grabRatingValue(event) {
    let ratingValue = Number(event.target.textContent);
    console.log(ratingValue);
}


function onSubmitClick() {

    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'flex';
}
