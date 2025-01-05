
    const questions = [
        { 
           question: "What is the chemical symbol for water?",
           answer: "H2O" 
        },
               
        { 
           question: "What planet is known as the Red Planet?", 
           answer: "Mars" 
        },
        {
            question: "What is a metaphor?",
            answer: "A direct comparison between two unlike things"
        },
        {
            question: "What does 'it's raining cats and dogs' mean?",
            answer: "It's raining heavily."
        },
        {
            question: "What is personification?",
            answer: "Giving human traits to non-human things"
        },
        {
            question: "A common phrase with a figurative meaning ?",
            answer: "an idiom"
        },
        {
            question: "What does 'break the ice' mean?",
            answer: "To start a conversation in a social setting"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const startButton = document.getElementById("startButton");
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");
    const quizContent = document.getElementById("quizContent");
    const userInput = document.getElementById("userInput");
    const submitButton = document.getElementById("submitButton");
    const result = document.getElementById("result");

    startButton.addEventListener("click", startQuiz);
    closeModal.addEventListener("click", closeModalFunc);
    submitButton.addEventListener("click", submitAnswer);

    function startQuiz() {
        score = 0;
        currentQuestionIndex = 0;
        result.innerText = '';
        showModal();
        showQuestion();
    }

    function showModal() {
        modal.style.display = "block";
    }

    function closeModalFunc() {
        modal.style.display = "none";
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        quizContent.innerText = currentQuestion.question;
        userInput.innerHTML = '<input type="text" id="userAnswer" placeholder="Type your answer here">';
    }

    function submitAnswer() {
        const userAnswer = document.getElementById("userAnswer").value.trim();
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            result.innerText = "Correct!";
        } else {
            result.innerText = `Wrong! The correct answer is: ${correctAnswer}`;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(showQuestion, 2000); // Show next question after 2 seconds
        } else {
            setTimeout(displayFinalScore, 2000); // Show final score after 2 seconds
        }
    }

    function displayFinalScore() {
        quizContent.innerText = ` More coming ... Quiz completed! Your score is ${score} out of ${questions.length}.`;
        userInput.innerHTML = '';
        submitButton.style.display = "none"; // Hide the submit button
    }

