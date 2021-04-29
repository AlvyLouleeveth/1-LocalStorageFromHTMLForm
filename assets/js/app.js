// Variables


//Event Listeners
eventListeners();

function eventListeners() {
    //Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);
}

// Function

function newTweet(e) {
    e.preventDefault();

    console.log ('Form Submitted');
}