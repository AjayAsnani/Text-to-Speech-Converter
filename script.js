let Speech = new SpeechSynthesisUtterance();

let Voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  Voices = window.speechSynthesis.getVoices();
  Speech.voice = Voices[0];

  Voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  Speech.voice = Voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  Speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(Speech);
});
