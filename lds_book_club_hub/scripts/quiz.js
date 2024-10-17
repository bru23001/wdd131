// quiz.js
document.getElementById('quiz-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((answer) => {
        score += parseInt(answer.value);
    });

    let result = '';
    if (score <= 5) {
        result = 'We recommend a lighthearted romance!';
    } else if (score <= 10) {
        result = 'How about a thrilling mystery?';
    } else {
        result = 'You should try an intense drama!';
    }

    document.getElementById('quiz-result').textContent = result;
    localStorage.setItem('quizScore', score); // Save quiz progress
});

// Reset quiz button functionality
document.getElementById('reset-quiz').addEventListener('click', () => {
    document.getElementById('quiz-form').reset();
    document.getElementById('quiz-result').textContent = '';
    localStorage.removeItem('quizScore');
});