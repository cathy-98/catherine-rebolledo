"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const characterByMood: Record<string, string> = {
  calma: "/figma/main-character.svg",
  tongue: "/figma/personaje-sacando-lengua.svg",
  sound: "/figma/personaje-haciendo-ruido.svg",
  phrase: "/figma/personaje-lanzando-frase.svg",
};

const creativeStates = [
  { mood: "calma", line: "" },
  { mood: "tongue", line: "" },
  { mood: "sound", line: "" },
  { mood: "phrase", line: "Menos ruido, más intención." },
];

const creativeOptions = [
  { action: "tongue", label: "Sacar lengua" },
  { action: "sound", label: "Hacer ruido" },
  { action: "phrase", label: "Lanzar frase" },
];

const designStoicPhrases = [
  "Diseña lo que puedes controlar; suelta lo que solo hace ruido.",
  "Menos adorno, más intención.",
  "La calma también es una decisión de interfaz.",
  "Si no aporta claridad, no merece espacio.",
  "Hazlo simple, pero no vacío.",
  "Primero entiende; después embellece.",
  "Una buena idea respira antes de brillar.",
  "Que cada detalle tenga propósito, no ego.",
];

type CharacterInteractionProps = {
  className?: string;
};

export function CharacterInteraction({ className = "" }: CharacterInteractionProps) {
  const [isCreative, setIsCreative] = useState(false);
  const [creativeMood, setCreativeMood] = useState("calma");
  const [creativeLine, setCreativeLine] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const resetTimerRef = useRef<number | null>(null);

  const currentCreative = creativeStates.find((state) => state.mood === creativeMood) ?? creativeStates[0];
  const characterSrc = characterByMood[currentCreative.mood] ?? characterByMood.calma;

  const clearResetTimer = () => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const toggleCreativeMode = () => {
    setIsCreative((value) => {
      if (value) {
        clearResetTimer();
        setCreativeMood("calma");
        setCreativeLine("");
      }

      return !value;
    });
  };

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "es-CL";
      utterance.rate = 1.02;
      utterance.pitch = 1.12;
      window.speechSynthesis.speak(utterance);
    }
  };

  const playPop = () => {
    const audioWindow = window as typeof window & {
      webkitAudioContext?: typeof AudioContext;
    };
    const AudioContextClass = window.AudioContext ?? audioWindow.webkitAudioContext;

    if (!AudioContextClass) {
      speak("pop pop");
      return;
    }

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const secondOscillator = context.createOscillator();
    const gain = context.createGain();

    void context.resume();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(260, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(940, context.currentTime + 0.12);
    secondOscillator.type = "triangle";
    secondOscillator.frequency.setValueAtTime(520, context.currentTime);
    secondOscillator.frequency.exponentialRampToValueAtTime(320, context.currentTime + 0.2);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.32, context.currentTime + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.34);

    oscillator.connect(gain);
    secondOscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    secondOscillator.start(context.currentTime + 0.05);
    oscillator.stop(context.currentTime + 0.36);
    secondOscillator.stop(context.currentTime + 0.36);
  };

  const runCreativeOption = (action: string) => {
    clearResetTimer();

    const nextCreative = creativeStates.find((state) => state.mood === action) ?? creativeStates[0];
    const phrase = designStoicPhrases[phraseIndex];
    const nextLine = action === "phrase" ? phrase : nextCreative.line;

    setCreativeMood(nextCreative.mood);
    setCreativeLine(nextLine);

    if (action === "phrase") {
      setPhraseIndex((index) => (index + 1) % designStoicPhrases.length);
      speak(phrase);
      return;
    }

    if (action === "sound") {
      playPop();
    }

    resetTimerRef.current = window.setTimeout(() => {
      setCreativeMood("calma");
      setCreativeLine("");
      resetTimerRef.current = null;
    }, 3200);
  };

  return (
    <div className={`character-interaction ${className} ${isCreative ? "creative-on" : ""} mood-${currentCreative.mood}`}>
      <button
        className="hello-creative-mode character-creative-mode"
        type="button"
        aria-pressed={isCreative}
        aria-expanded={isCreative}
        aria-controls="creative-options"
        aria-label={`Modo creativo. ${isCreative ? "Opciones abiertas" : "Opciones cerradas"}`}
        onClick={toggleCreativeMode}
      >
        <Image src="/figma/stars-icon.svg" alt="" width={24} height={24} />
        <span>Modo creativo</span>
        <span className={`hello-toggle ${isCreative ? "is-on" : ""}`} aria-hidden="true">
          <span />
        </span>
      </button>

      <div className="hello-character-wrap">
        <Image
          className="hello-character"
          src={characterSrc}
          alt="Ilustracion lineal de Catherine Rebolledo"
          width={384}
          height={404}
        />
        <span className="character-pop" aria-hidden="true">pop</span>
        <span className="character-spark character-spark-1" aria-hidden="true">✦</span>
        <span className="character-spark character-spark-2" aria-hidden="true">♡</span>
        <span className="character-line" aria-live="polite">{creativeLine}</span>
        {isCreative ? (
          <div id="creative-options" className="creative-options" role="menu" aria-label="Opciones creativas del personaje">
            {creativeOptions.map((option) => (
              <button
                key={option.action}
                className="creative-option"
                type="button"
                role="menuitem"
                onClick={() => runCreativeOption(option.action)}
              >
                {option.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
