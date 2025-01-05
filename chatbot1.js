// Update current time and location
        const chatResponseElem = document.getElementById("chatHistory");

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                document.getElementById("currentLocation").innerText = `Lat: ${lat}, Lon: ${lon}`;
            });
        }

        // Handle chat input and responses
        function handleChat(event) {
            if (event.key === 'Enter') {
                const userMessage = event.target.value;
                event.target.value = ''; // Clear the input

                if (userMessage) {
                    // Append user message to chat history
                    appendMessage(userMessage, 'user-message');
                    chatResponseElem.innerHTML += "<div id='thinking'>Server1</div>";
                    displayTypingIndicator();

                    setTimeout(function() {
                        const responses = {
                            "hello": "Hello! How can I assist you today?",
                            "hi": "Hi there! What would you like to know?",
                            "how are you?": "I'm just a bot, but I'm here to help!",
                            "what is your name?": "My name is Cleveland, your friendly chatbot.",
                            "tell me a joke": "Why don't skeletons fight each other? Because they don't have the guts!",
                            "what is the weather today?": "I can't check the weather, but you can try a weather app.",
                            "who created you?": "I was created by a team of developers to assist you with questions.",
                            "goodbye": "Goodbye! Have a great day!",
                            "what is 2 + 2?": "2 + 2 is 4.",
                            "what can you do?": "I can answer questions, provide facts, and keep you entertained!",
                            "tell me something interesting": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
                            "what is your favorite color?": "I don't have feelings, but I like all colors equally!",
                            "what is the meaning of life?": "The meaning of life is subjective; it can be different for everyone!",
                            "what is your favorite food?": "I don't eat, but I hear pizza is quite popular!"
                        };

                        const response = responses[userMessage.toLowerCase()] || "I'm sorry, I don't understand that.";
                        appendMessage(response, 'bot-message');
                        hideTypingIndicator();
                    }, 1000);
                }
            }
        }

        function appendMessage(message, className) {
            const messageElem = document.createElement('div');
            messageElem.className = `message ${className}`;
            messageElem.textContent = message;
            chatResponseElem.appendChild(messageElem);
            chatResponseElem.scrollTop = chatResponseElem.scrollHeight; // Scroll to the bottom
        }

        function displayTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            typingIndicator.style.display = 'block'; // Show typing indicator
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            typingIndicator.style.display = 'none'; // Hide typing indicator
        }