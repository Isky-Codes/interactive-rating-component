const submitBtn = document.querySelector('.submitButton');
const ratingCard = document.querySelector('.ratingContainer');
const thankYouCard = document.querySelector('.thankYouContainer');
const buttons = document.querySelectorAll('.ratingButtons');
const chosenRating = document.querySelector('#chosenNumber');


/*Function for submit button where upon click it will switch to the 'Thank You' card. If a rating was not chosen, an alert will sound*/
submitBtn.addEventListener('click', onSubmitClick);

function onSubmitClick() {
    if(!chosenRating.textContent) {
        alert('Please select a rating to provide us with your feedback!')
    }else {
        ratingCard.style.display = 'none';
        thankYouCard.style.display = 'flex';
    }
}


/*Function for selecting a rating, saving the value and inserting the value into the <span> on the 'Thank You' card to indicate which rating was chosen*/
buttons.forEach(btn =>
    btn.addEventListener('click', grabRatingValue))

function grabRatingValue(event) {
    let ratingValue = Number(event.target.textContent);
    chosenRating.innerText = ratingValue;
}


/*Hover effects code*/