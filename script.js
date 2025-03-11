function changeGreeting() {
    const newGreeting = document.getElementById('inputText').value;
    const greetingElement = document.getElementById('greeting');

    if (newGreeting.trim() !== "") {
        greetingElement.textContent = newGreeting;
    } else {
        alert("Please enter a valid greeting.");
    }
}
