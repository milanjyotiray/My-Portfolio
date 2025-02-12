import { useState, useEffect } from 'react';

const phrases = [
  'Aspiring Data Scientist',
  'Web Developer',
  'Designer',
  'YouTuber',
  'Author'
];

export default function TypewriterEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
          setTimeout(() => {}, 1000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
        } else {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="min-h-[50px] flex items-center justify-center">
      <span className="text-4xl md:text-5xl font-bold text-blue-500">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}