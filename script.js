function speak() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance('Peline yuli cilik dibuntel plastik munine mak ngik');
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
  
    utterance.lang = 'id-ID';
    // Speak the text
    speechSynthesis.speak(utterance);
  }
  