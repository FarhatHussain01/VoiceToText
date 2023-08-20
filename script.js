const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const textArea = document.getElementById('text-area');
const recognition = new webkitSpeechRecognition();

recognition.continuous = true;

startButton.addEventListener('click', () => {
    recognition.start();
    textArea.placeholder = 'Listening...';
});

stopButton.addEventListener('click', () => {
    recognition.stop();
    textArea.placeholder = 'Start dictating...';
});

recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    textArea.value += transcript + ' ';
};
