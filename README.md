<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For Salouma ❤️</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #ffdde1;
            color: #ff3366;
            margin: 0;
            padding: 0;
        }
        .container {
            margin-top: 20vh;
        }
        button {
            background-color: #ff3366;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
        }
        button:hover {
            background-color: #ff0055;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hey, Salouma! ❤️</h1>
        <p id="love-message">I love you more than words can say!</p>
        <button onclick="showMessage()">Click for a Surprise 💌</button>
    </div>

    <script>
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
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            document.getElementById("love-message").innerText = randomMessage;
        }
    </script>
</body>
</html>
