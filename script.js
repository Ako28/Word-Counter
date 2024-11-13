// Select the textarea and the word count span
const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");

// Function to update word count
textInput.addEventListener("input", function() {
    const text = textInput.value.trim(); 
    const words = text.split(/\s+/); 
    const count = text.length === 0 ? 0 : words.length; 
    wordCount.textContent = count; 
});