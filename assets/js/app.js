// Variables
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListeners();

function eventListeners() {
    //Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);
}

// Function

function newTweet(e) {
    e.preventDefault();

    //Read the textarea value
    const tweet = document.getElementById('tweet').value;

    //Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // Create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);

    //Add to Loacl storage
    addTweetLocalStorage(tweet);
}

//Removes the tweets from the DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 
}

//Adds the tweets into the Local STorage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //Add the tweet into the array
    tweets.push(tweet);

    //Convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify( tweets ));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //Get the values, if null is returned we create an empty array
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse( tweetsLS );
    }
    return tweets;
}