// Select the element with id "number"
let number = document.getElementById("number");

// Initialize a counter variable
let counter = 0;

// Set up an interval to update the counter
setInterval(() => {
    // Check if the counter has reached 65%
    if (counter == 65) {
        // If reached 65%, clear the interval to stop the counter
        clearInterval();
    } else {
        // Increment the counter by 1
        counter += 1;
        // Update the inner HTML of the element with the counter value
        number.innerHTML = counter + "%";
    }
}, 30); // Interval duration: 30 milliseconds
