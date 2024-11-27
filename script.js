function speak() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance('Manuk !.! e kang yuli!, cilik!, dibuntel plastik munine mak ngik');
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
  
    utterance.lang = 'jv';
    utterance.rate = 0.5;
    // Speak the text
    speechSynthesis.speak(utterance);
  }
  
  
