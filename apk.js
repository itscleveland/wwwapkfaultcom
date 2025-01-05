
    // Function to calculate and update the countdown
    function updateCountdown() {
        // Get the current time
        const now = new Date();
        
        // Set the target time to 2:59 AM (EAT)
        let targetTime = new Date(now);
        targetTime.setHours(2);
        targetTime.setMinutes(59);
        targetTime.setSeconds(0);
        targetTime.setMilliseconds(0);

        // If the current time is past 2:59 AM today, set the target to 2:59 AM the next day
        if (now > targetTime) {
            targetTime.setDate(targetTime.getDate() + 1);
        }

        // Calculate the time difference
        const timeDifference = targetTime - now;

        // If the countdown is over, update the text
        if (timeDifference <= 0) {
            document.getElementById("countdown").innerHTML = "The app is now available!";
            clearInterval(timerInterval);
        } else {
            // Calculate hours, minutes, and seconds
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Update the timer display
            document.getElementById("countdown").innerHTML =
                hours + "h " + minutes + "m " + seconds + "s ";
        }
    }

    // Update the countdown every second
    const timerInterval = setInterval(updateCountdown, 1000);

    // Initial call to display the countdown immediately
    updateCountdown();

