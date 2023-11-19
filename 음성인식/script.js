// 음성 인식
const startRecognitionButton = document.getElementById('start-recognition');
const transcript = document.getElementById('transcript');

const recognition = new window.SpeechRecognition();
recognition.lang = 'ko-KR'; // 한국어 설정
recognition.interimResults = false;

recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    transcript.textContent = '인식된 문장: ' + speechResult;
};

startRecognitionButton.onclick = () => {
    recognition.start();
};

// 음성 합성
const speakTextButton = document.getElementById('speak-text');
const textToSpeakInput = document.getElementById('text-to-speak');

speakTextButton.onclick = () => {
    const textToSpeak = textToSpeakInput.value;
    const msg = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(msg);
};
