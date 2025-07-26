// Full Quiz Data Set with Categories
const allQuizQuestions = [
    // --- Technical Questions (Web Development Basics) ---
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Marking Language"],
        answer: "Hyper Text Markup Language",
        category: "Technical"
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        answer: "margin",
        category: "Technical"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element with id 'demo'?",
        options: ["document.getElementById('demo').innerHTML = 'Hello';", "document.getElementByName('demo').innerHTML = 'Hello';", "document.querySelector('#demo').value = 'Hello';", "document.getElementsById('demo').textContent = 'Hello';"],
        answer: "document.getElementById('demo').innerHTML = 'Hello';",
        category: "Technical"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "React", "Flask", "Laravel"],
        answer: "React",
        category: "Technical"
    },
    {
        question: "What is the purpose of SQL?",
        options: ["To style web pages", "To program web servers", "To manage and query relational databases", "To create interactive web content"],
        answer: "To manage and query relational databases",
        category: "Technical"
    },
    {
        question: "What is the primary role of a front-end developer?",
        options: ["Managing databases", "Building server-side logic", "Designing and implementing user interfaces", "Automating deployment pipelines"],
        answer: "Designing and implementing user interfaces",
        category: "Technical"
    },
    {
        question: "Which term describes a developer who works on both client-side and server-side of a web application?",
        options: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "DevOps Engineer"],
        answer: "Full-Stack Developer",
        category: "Technical"
    },
    {
        question: "What is the main function of Python in web development (e.g., with Django/Flask)?",
        options: ["Styling web pages", "Client-side scripting", "Server-side logic and data processing", "Database design"],
        answer: "Server-side logic and data processing",
        category: "Technical"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<css>", "<style>", "<link>"],
        answer: "<style>",
        category: "Technical"
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["variable carName;", "var carName;", "v carName;", "string carName;"],
        answer: "var carName;",
        category: "Technical"
    },
    {
        question: "What is the purpose of the 'git clone' command?",
        options: ["To create a new branch", "To copy a repository from a remote source", "To commit changes to a repository", "To merge branches"],
        answer: "To copy a repository from a remote source",
        category: "Technical"
    },
    {
        question: "Which HTTP method is used to request data from a specified resource?",
        options: ["POST", "PUT", "GET", "DELETE"],
        answer: "GET",
        category: "Technical"
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Programming Instruction", "Automated Process Integration", "Application Protocol Internet"],
        answer: "Application Programming Interface",
        category: "Technical"
    },
    {
        question: "Which database type is best suited for unstructured data?",
        options: ["Relational Database", "NoSQL Database", "Hierarchical Database", "Network Database"],
        answer: "NoSQL Database",
        category: "Technical"
    },
    {
        question: "What is the function of a 'router' in a web application framework?",
        options: ["To manage database connections", "To handle HTTP requests and map them to specific code", "To style the user interface", "To perform server-side calculations"],
        answer: "To handle HTTP requests and map them to specific code",
        category: "Technical"
    },

    // --- Quantitative Aptitude ---
    {
        question: "A train 120 meters long is moving with a speed of 20 m/s. How long will it take to cross a pole?",
        options: ["6 seconds", "8 seconds", "10 seconds", "12 seconds"],
        answer: "6 seconds",
        category: "Quantitative"
    },
    {
        question: "If 15 men can do a piece of work in 10 days, how many men will be required to do the same work in 5 days?",
        options: ["20 men", "25 men", "30 men", "35 men"],
        answer: "30 men",
        category: "Quantitative"
    },
    {
        question: "What is 20% of 250?",
        options: ["25", "50", "75", "100"],
        answer: "50",
        category: "Quantitative"
    },
    {
        question: "The average of 5 numbers is 30. If one number is excluded, the average becomes 28. What is the excluded number?",
        options: ["38", "36", "32", "40"],
        answer: "38",
        category: "Quantitative"
    },
    {
        question: "A sum of money doubles itself at simple interest in 10 years. What is the rate of interest per annum?",
        options: ["5%", "10%", "15%", "20%"],
        answer: "10%",
        category: "Quantitative"
    },
    {
        question: "If a car travels at 60 km/h, how far will it travel in 2.5 hours?",
        options: ["120 km", "150 km", "180 km", "200 km"],
        answer: "150 km",
        category: "Quantitative"
    },
    {
        question: "The ratio of two numbers is 3:5 and their sum is 80. What is the smaller number?",
        options: ["20", "30", "40", "50"],
        answer: "30",
        category: "Quantitative"
    },
    {
        question: "A mixture of 20 liters of milk and water contains 10% water. How much more water should be added to make the water content 25%?",
        options: ["2 liters", "3 liters", "4 liters", "5 liters"],
        answer: "4 liters",
        category: "Quantitative"
    },
    {
        question: "What is the value of (10 + 2) * 5 - 3?",
        options: ["57", "59", "60", "62"],
        answer: "57",
        category: "Quantitative"
    },
    {
        question: "If the cost price of 10 articles is equal to the selling price of 8 articles, find the profit percentage.",
        options: ["20%", "25%", "30%", "35%"],
        answer: "25%",
        category: "Quantitative"
    },
    {
        question: "A man buys an article for $100 and sells it for $120. What is his profit percentage?",
        options: ["10%", "15%", "20%", "25%"],
        answer: "20%",
        category: "Quantitative"
    },
    {
        question: "Find the least number which when divided by 6, 9, 12, 15, 18 leaves the same remainder 2 in each case.",
        options: ["178", "182", "180", "184"],
        answer: "182",
        category: "Quantitative"
    },

    // --- Logical Reasoning ---
    {
        question: "Find the missing number in the series: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        answer: "42", // Pattern: +4, +6, +8, +10, +12
        category: "Logical Reasoning"
    },
    {
        question: "If 'BROTHER' is coded as 'GURWKHU', how is 'SISTER' coded?",
        options: ["VLVWHU", "XLVWHU", "XLYWHU", "XLYWHV"],
        answer: "XLYWHU", // Each letter shifted by +3
        category: "Logical Reasoning"
    },
    {
        question: "Odd one out: Apple, Orange, Banana, Potato, Grape",
        options: ["Apple", "Orange", "Banana", "Potato", "Grape"],
        answer: "Potato", // Potato is a vegetable, others are fruits
        category: "Logical Reasoning"
    },
    {
        question: "In a certain code, 'RIVER' is written as 'REVIR'. How is 'OCEAN' written in that code?",
        options: ["NAECO", "NACEA", "NCAEO", "NAOCE"],
        answer: "NAECO", // Reverse order
        category: "Logical Reasoning"
    },
    {
        question: "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose photograph was it?",
        options: ["His son", "His father", "His nephew", "His uncle"],
        answer: "His son",
        category: "Logical Reasoning"
    },
    {
        question: "Complete the series: A, C, F, J, O, ?",
        options: ["U", "V", "W", "X"],
        answer: "U", // Pattern: +2, +3, +4, +5, +6
        category: "Logical Reasoning"
    },
    {
        question: "If all dogs are animals, and all animals are living beings, then all dogs are living beings. This is an example of:",
        options: ["Deductive reasoning", "Inductive reasoning", "Abductive reasoning", "Analogical reasoning"],
        answer: "Deductive reasoning",
        category: "Logical Reasoning"
    },
    {
        question: "Which word does NOT belong with the others? 'Book, Index, Glossary, Chapter, Page'",
        options: ["Book", "Index", "Glossary", "Chapter", "Page"],
        answer: "Book", // Others are parts of a book
        category: "Logical Reasoning"
    },
    {
        question: "If in a certain code, 'SPRING' is coded as 'UNUFRJ', how is 'WINTER' coded?",
        options: ["YJOVGT", "YJOVGR", "YJOWGT", "YJOWGR"],
        answer: "YJOVGT", // Each letter shifted by +2
        category: "Logical Reasoning"
    },

    // --- Verbal Ability ---
    {
        question: "Choose the word most similar in meaning to: 'ABUNDANT'",
        options: ["Scarce", "Plentiful", "Rare", "Insufficient"],
        answer: "Plentiful",
        category: "Verbal"
    },
    {
        question: "Choose the word opposite in meaning to: 'BENEVOLENT'",
        options: ["Kind", "Generous", "Malevolent", "Compassionate"],
        answer: "Malevolent",
        category: "Verbal"
    },
    {
        question: "Identify the part of the sentence that contains an error: 'Neither of the two candidates (A) have paid (B) his subscription (C) to the organization (D).'",
        options: ["A", "B", "C", "D"],
        answer: "B", // "have paid" should be "has paid" (Neither...nor takes singular verb)
        category: "Verbal"
    },
    {
        question: "Fill in the blank: 'He is addicted _____ smoking.'",
        options: ["to", "with", "for", "by"],
        answer: "to",
        category: "Verbal"
    },
    {
        question: "Choose the correctly spelled word:",
        options: ["Accommodate", "Acomodate", "Accomodate", "Acommodate"],
        answer: "Accommodate",
        category: "Verbal"
    },
    {
        question: "Select the word that best completes the sentence: 'The success of the project was _____ to the tireless efforts of the team.'",
        options: ["attributed", "contributed", "resulted", "caused"],
        answer: "attributed",
        category: "Verbal"
    },
    {
        question: "Choose the antonym of 'AMPLIFY':",
        options: ["Enlarge", "Expand", "Reduce", "Magnify"],
        answer: "Reduce",
        category: "Verbal"
    },
    {
        question: "Identify the sentence with the correct usage of 'affect' and 'effect':",
        options: ["The weather will effect your mood.", "The weather will affect your mood.", "The effect of the weather will affect your mood.", "The affect of the weather will effect your mood."],
        answer: "The weather will affect your mood.",
        category: "Verbal"
    },
    {
        question: "Choose the word that means 'a person who is new to a skill or subject':",
        options: ["Expert", "Veteran", "Novice", "Maestro"],
        answer: "Novice",
        category: "Verbal"
    },

    // --- Coding Questions ---
    {
        question: "Which data structure uses LIFO (Last In, First Out) principle?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        answer: "Stack",
        category: "Coding"
    },
    {
        question: "What is the time complexity of searching an element in a sorted array using Binary Search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
        category: "Coding"
    },
    {
        question: "Which of the following is NOT a valid access specifier in C++?",
        options: ["public", "private", "protected", "friend"],
        answer: "friend", // friend is a keyword, not an access specifier
        category: "Coding"
    },
    {
        question: "In Python, which keyword is used to define a function?",
        options: ["func", "define", "def", "function"],
        answer: "def",
        category: "Coding"
    },
    {
        question: "What is the output of `console.log(typeof null)` in JavaScript?",
        options: ["'object'", "'null'", "'undefined'", "'number'"],
        answer: "'object'", // A well-known JavaScript quirk
        category: "Coding"
    },
    {
        question: "Which sorting algorithm has the worst-case time complexity of O(n^2) but is often efficient for small datasets?",
        options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
        answer: "Insertion Sort",
        category: "Coding"
    },
    {
        question: "What is 'polymorphism' in Object-Oriented Programming?",
        options: ["The ability of an object to take on many forms", "The hiding of data implementation details", "The creation of new classes from existing classes", "The process of combining data and functions into a single unit"],
        answer: "The ability of an object to take on many forms",
        category: "Coding"
    },
    {
        question: "Which of these is a version control system?",
        options: ["Jira", "Slack", "Git", "Trello"],
        answer: "Git",
        category: "Coding"
    },
    {
        question: "What is a 'closure' in JavaScript?",
        options: ["A way to close a function immediately", "A function having access to its outer function scope even after the outer function has finished executing", "A method to prevent memory leaks", "A type of loop"],
        answer: "A function having access to its outer function scope even after the outer function has finished executing",
        category: "Coding"
    }
];

// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const currentThemeText = document.getElementById('current-theme-text');

const categorySelectScreen = document.getElementById('category-select-screen');
const categoryButtonsContainer = document.getElementById('category-buttons-container');
const startSelectedQuizBtn = document.getElementById('start-selected-quiz-btn');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const reviewScreen = document.getElementById('review-screen'); // New Review Screen
const reviewQuestionsContainer = document.getElementById('review-questions-container'); // Container for review questions

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backToCategoriesBtn = document.getElementById('back-to-categories-btn');
const markForReviewBtn = document.getElementById('mark-for-review-btn');
const currentScoreSpan = document.getElementById('current-score');
const questionNumberSpan = document.getElementById('question-number');
const totalQuestionsHeaderSpan = document.getElementById('total-questions-header');
const totalQuestionsStatSpan = document.getElementById('total-questions-stat');
const answeredCountSpan = document.getElementById('answered-count');
const notAnsweredCountSpan = document.getElementById('not-answered-count');
const markedForReviewCountSpan = document.getElementById('marked-for-review-count');
const timerDisplay = document.getElementById('timer-display');
const progressBarFill = document.getElementById('progress-bar-fill'); // Progress bar fill

const finalScoreDisplay = document.getElementById('final-score-display');
const endTotalQuestionsSpan = document.getElementById('end-total-questions');
const endTotalQuestionsStatsSpan = document.getElementById('end-total-questions-stat');
const endAnsweredCount = document.getElementById('end-answered-count');
const endNotAnsweredCount = document.getElementById('end-not-answered-count');
const endMarkedForReviewCount = document.getElementById('end-marked-for-review-count');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const reviewAnswersBtn = document.getElementById('review-answers-btn'); // Review Answers button
const backFromReviewBtn = document.getElementById('back-from-review-btn'); // Back from Review button
const restartQuizFromReviewBtn = document.getElementById('restart-quiz-from-review-btn'); // Restart from Review screen

// Quiz State Variables
let selectedCategory = null;
let filteredQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userStates = []; // Each element: { selectedOption: string | null, markedForReview: boolean, shuffledOptions: array }
let timerInterval;
let timeLeft = 0;
const QUIZ_DURATION_PER_CATEGORY_MINUTES = 15;

// Theme management
const themes = ['light', 'dark'];
let currentThemeIndex = 0;

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Applies the selected theme to the body element and saves it to localStorage.
 * @param {string} themeName - The name of the theme to apply ('light', 'dark').
 */
function applyTheme(themeName) {
    document.body.className = ''; // Clear existing themes
    document.body.classList.add(`theme-${themeName}`);
    localStorage.setItem('quizTheme', themeName);
    currentThemeText.textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1); // Capitalize first letter for display
}

/**
 * Loads the theme preference from localStorage and applies it.
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('quizTheme');
    if (savedTheme) {
        currentThemeIndex = themes.indexOf(savedTheme);
        if (currentThemeIndex === -1) { // Fallback if saved theme is invalid
            currentThemeIndex = 0; // Default to 'light'
        }
    } else {
        currentThemeIndex = 0; // Default to 'light' if no theme saved
    }
    applyTheme(themes[currentThemeIndex]);
}

// --- Functions ---

/**
 * Initializes the quiz application, showing the category selection screen.
 * Resets all quiz state and displays the start screen.
 */
function initializeQuiz() {
    selectedCategory = null; // Reset selected category
    currentQuestionIndex = 0;
    score = 0;
    userStates = [];
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00';
    startSelectedQuizBtn.disabled = true;

    categorySelectScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    reviewScreen.classList.add('hidden'); // Hide review screen

    renderCategoryButtons();

    // Resetting stats display for initial view
    currentScoreSpan.textContent = score;
    questionNumberSpan.textContent = 1; // Reset question number display
    totalQuestionsHeaderSpan.textContent = 0; // Reset total questions in header
    answeredCountSpan.textContent = 0;
    notAnsweredCountSpan.textContent = 0;
    markedForReviewCountSpan.textContent = 0;
    totalQuestionsStatSpan.textContent = 0; // Ensure this is reset
    progressBarFill.style.width = '0%'; // Reset progress bar
}

/**
 * Renders category selection buttons dynamically.
 */
function renderCategoryButtons() {
    categoryButtonsContainer.innerHTML = '';
    const categories = [...new Set(allQuizQuestions.map(q => q.category))]; // Get unique categories

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.classList.add('category-button');
        button.dataset.category = category;

        button.addEventListener('click', () => selectCategory(button, category));
        categoryButtonsContainer.appendChild(button);
    });
}

/**
 * Handles category selection.
 * @param {HTMLElement} selectedButton - The button element that was clicked.
 * @param {string} category - The selected category.
 */
function selectCategory(selectedButton, category) {
    // Remove selected-category class from all buttons
    Array.from(categoryButtonsContainer.children).forEach(btn => {
        btn.classList.remove('selected-category');
    });

    selectedButton.classList.add('selected-category');
    selectedCategory = category;
    startSelectedQuizBtn.disabled = false;
}

/**
 * Starts the quiz based on the selected category.
 */
function startQuiz() {
    if (!selectedCategory) return;

    filteredQuestions = allQuizQuestions.filter(q => q.category === selectedCategory);

    // Initialize userStates for filtered questions, including shuffled options
    userStates = filteredQuestions.map(q => ({
        selectedOption: null,
        markedForReview: false,
        shuffledOptions: shuffleArray([...q.options]) // Shuffle options for each question
    }));

    currentScoreSpan.textContent = score;
    totalQuestionsHeaderSpan.textContent = filteredQuestions.length;
    totalQuestionsStatSpan.textContent = filteredQuestions.length;
    endTotalQuestionsSpan.textContent = filteredQuestions.length;
    endTotalQuestionsStatsSpan.textContent = filteredQuestions.length;

    categorySelectScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    timeLeft = QUIZ_DURATION_PER_CATEGORY_MINUTES * 60; // Convert minutes to seconds
    startTimer();
    loadQuestion();
    updateQuizStats(); // Initial stats update
}

/**
 * Starts the quiz timer.
 */
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

/**
 * Loads the current question and its options into the UI.
 * Dynamically creates option buttons and applies styling based on user's previous answers.
 */
function loadQuestion() {
    // Clear previous options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.innerHTML = '';

    const question = filteredQuestions[currentQuestionIndex];
    const currentQuestionState = userStates[currentQuestionIndex];

    questionText.textContent = question.question;
    questionNumberSpan.textContent = currentQuestionIndex + 1;

    // Update Mark for Review button state
    if (currentQuestionState.markedForReview) {
        markForReviewBtn.classList.add('active');
    } else {
        markForReviewBtn.classList.remove('active');
    }

    // Use shuffled options for rendering
    currentQuestionState.shuffledOptions.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.dataset.option = option; // Store option text in a data attribute

        // If user has already answered this question, pre-select their answer
        if (currentQuestionState.selectedOption === option) {
            button.classList.add('selected');
        }

        // Add click listener to select option
        button.addEventListener('click', () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });

    // If an answer was previously selected, show feedback immediately and disable options
    if (currentQuestionState.selectedOption !== null) {
        showFeedback(currentQuestionState.selectedOption);
        Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
    }

    updateNavigationButtons();
    updateProgressBar();
}

/**
 * Handles the selection of an answer option.
 * Updates the UI to reflect the selection, shows feedback, and updates the score.
 * @param {HTMLElement} selectedButton - The button element that was clicked.
 * @param {string} selectedOption - The text of the selected option.
 */
function selectOption(selectedButton, selectedOption) {
    // Remove 'selected' class from all options first and disable them
    Array.from(optionsContainer.children).forEach(button => {
        button.classList.remove('selected', 'correct', 'incorrect');
        button.disabled = true; // Disable all options after selection
    });

    selectedButton.classList.add('selected');
    userStates[currentQuestionIndex].selectedOption = selectedOption; // Store the user's answer

    showFeedback(selectedOption);
    updateScore();
    updateQuizStats(); // Update stats after answering
    updateNavigationButtons(); // Re-enable next button if an answer is selected
}

/**
 * Displays feedback (correct/incorrect) to the user.
 * Highlights the selected and correct answers.
 * @param {string} selectedOption - The option selected by the user.
 */
function showFeedback(selectedOption) {
    const correctAnswer = filteredQuestions[currentQuestionIndex].answer;
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback-message');

    if (selectedOption === correctAnswer) {
        feedbackDiv.textContent = "Correct! Well done!";
        feedbackDiv.classList.add('correct');
        // Highlight the correct answer button
        Array.from(optionsContainer.children).forEach(button => {
            if (button.dataset.option === correctAnswer) {
                button.classList.add('correct');
            }
        });
    } else {
        feedbackDiv.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
        feedbackDiv.classList.add('incorrect');
        // Highlight user's incorrect choice and the correct answer button
        Array.from(optionsContainer.children).forEach(button => {
            if (button.dataset.option === selectedOption) {
                button.classList.add('incorrect');
            }
            if (button.dataset.option === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }
    feedbackContainer.appendChild(feedbackDiv);
}

/**
 * Updates the user's score based on their answers.
 * Recalculates the score from scratch to ensure accuracy, especially with navigation.
 */
function updateScore() {
    let newScore = 0;
    userStates.forEach((state, index) => {
        // Check against the original question's answer, not shuffled options
        if (state.selectedOption === filteredQuestions[index].answer) {
            newScore++;
        }
    });
    score = newScore;
    currentScoreSpan.textContent = score;
}

/**
 * Updates the quiz statistics displayed on the screen.
 */
function updateQuizStats() {
    let answered = 0;
    let notAnswered = 0;
    let markedForReview = 0;

    userStates.forEach(state => {
        if (state.selectedOption !== null) {
            answered++;
        } else {
            notAnswered++;
        }
        if (state.markedForReview) {
            markedForReview++;
        }
    });

    answeredCountSpan.textContent = answered;
    notAnsweredCountSpan.textContent = notAnswered;
    markedForReviewCountSpan.textContent = markedForReview;
    totalQuestionsStatSpan.textContent = filteredQuestions.length;
}

/**
 * Updates the progress bar based on the current question index.
 */
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

/**
 * Toggles the 'Mark for Review' status for the current question.
 */
function toggleMarkForReview() {
    userStates[currentQuestionIndex].markedForReview = !userStates[currentQuestionIndex].markedForReview;
    if (userStates[currentQuestionIndex].markedForReview) {
        markForReviewBtn.classList.add('active');
    } else {
        markForReviewBtn.classList.remove('active');
    }
    updateQuizStats();
}

/**
 * Navigates to the next question or ends the quiz if it's the last question.
 */
function nextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

/**
 * Navigates to the previous question.
 */
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

/**
 * Updates the disabled state and text of navigation buttons.
 */
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = userStates[currentQuestionIndex].selectedOption === null && currentQuestionIndex < filteredQuestions.length - 1;

    if (currentQuestionIndex === filteredQuestions.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    } else {
        nextBtn.textContent = 'Next';
    }
}

/**
 * Navigates back to the category selection screen.
 * Resets quiz state and stops the timer.
 */
function goBackToCategories() {
    clearInterval(timerInterval); // Stop the timer
    initializeQuiz(); // Re-initialize to show category screen
}

/**
 * Ends the quiz and displays the final score screen with detailed statistics.
 */
function endQuiz() {
    clearInterval(timerInterval); // Stop the timer
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;

    // Update end screen stats
    let answered = 0;
    let notAnswered = 0;
    let markedForReview = 0;

    userStates.forEach(state => {
        if (state.selectedOption !== null) {
            answered++;
        } else {
            notAnswered++;
        }
        if (state.markedForReview) {
            markedForReview++;
        }
    });

    endAnsweredCount.textContent = answered;
    endNotAnsweredCount.textContent = notAnswered;
    endMarkedForReviewCount.textContent = markedForReview;
    endTotalQuestionsSpan.textContent = filteredQuestions.length;
    endTotalQuestionsStatsSpan.textContent = filteredQuestions.length;
}

/**
 * Renders the review answers screen.
 */
function showReviewScreen() {
    endScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    reviewQuestionsContainer.innerHTML = '';

    filteredQuestions.forEach((question, index) => {
        const questionState = userStates[index];
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-question-card');

        let cardClass = '';
        if (questionState.markedForReview) {
            cardClass = 'marked-for-review';
        } else if (questionState.selectedOption !== null) {
            if (questionState.selectedOption === question.answer) {
                cardClass = 'correct-answered';
            } else {
                cardClass = 'incorrect-answered';
            }
        }
        reviewCard.classList.add(cardClass);

        reviewCard.innerHTML = `
            <p class="font-bold mb-2">Q${index + 1}: ${question.question}</p>
            <p>Your Answer: <span class="user-answer">${questionState.selectedOption || 'Not Answered'}</span></p>
            <p>Correct Answer: <span class="correct-answer">${question.answer}</span></p>
            ${questionState.markedForReview ? '<p class="text-yellow-700 font-semibold mt-2">Marked for Review</p>' : ''}
        `;
        reviewQuestionsContainer.appendChild(reviewCard);
    });
}


// --- Event Listeners ---
startSelectedQuizBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
backToCategoriesBtn.addEventListener('click', goBackToCategories);
markForReviewBtn.addEventListener('click', toggleMarkForReview);
restartQuizBtn.addEventListener('click', initializeQuiz);
reviewAnswersBtn.addEventListener('click', showReviewScreen); // Event for Review Answers button
backFromReviewBtn.addEventListener('click', () => { // Back from Review to End Screen
    reviewScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
});
restartQuizFromReviewBtn.addEventListener('click', initializeQuiz); // Restart from Review screen

themeToggleBtn.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex]);
});

// Initial call to set up the quiz when the page loads, wrapped in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    loadTheme(); // Load theme first
    initializeQuiz(); // Then initialize quiz
});