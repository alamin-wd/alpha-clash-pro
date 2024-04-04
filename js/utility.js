// Add hidden Class
function hideElementById(elementId) {
const element = document.getElementById(elementId);
element.classList.add('hidden');

}

// Remove hidden Class
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function getARandomAlphabet() {
    const alphabetString = ('abcdefghijklmnopqrstuvwxyz');
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber); 
    
    const alphabet = alphabets[index];
    return alphabet;
}