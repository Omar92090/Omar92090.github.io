function showMessage() {
    const messages = [
        "The day you followed me back was the day my world lit up. ✨",
        "Imagine if I hadn't talked to you about the physics exam... fate is real! 💫",
        "I miss your stories, they always make my day. 📖❤️",
        "I love you to the moon and back! 🌙",
        "Every second with you is a blessing. ❤️",
        "You make my world brighter! ✨",
        "I can’t wait to see you again! 😘",
        "You are my everything! 💖",
        "I hope you don’t marry your 2-year-old cousin. 😂"
    ];
    
    const messageElement = document.getElementById("love-message");

    // Fade out effect
    messageElement.style.opacity = 0;

    setTimeout(() => {
        // Change message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.innerText = randomMessage;

        // Fade in effect
        messageElement.style.opacity = 1;
    }, 500); // Delay to make the transition smooth
}
