// Array of fun facts
const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time.",
    "I can solve a Rubik's cube in under 2 minutes.",
    "I enjoy stargazing and can identify 10 constellations.",
    "I once ran a 10K marathon for charity!",
    "I have a knack for drawing realistic portraits."
];

// Get the DOM elements
const factDisplay = document.getElementById('fact');
const generateBtn = document.getElementById('generate-btn');

// Function to generate a random fun fact
function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}

// Add event listener to the button
generateBtn.addEventListener('click', generateFact);
