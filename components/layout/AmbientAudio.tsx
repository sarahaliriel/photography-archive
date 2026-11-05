"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type AudioControls = {
  playing: boolean;
  toggle: () => void;
  registerWave: (element: HTMLElement | null) => void;
};

const AudioContextValue = createContext<AudioControls | null>(null);
const AUDIO_SOURCE = "/audio/Nova%20-%20Whitley%20(Extended).mp3";

export function AmbientAudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const waveRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number>(0);
  const [playing, setPlaying] = useState(false);

  const registerWave = useCallback((element: HTMLElement | null) => {
    waveRef.current = element;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
      cancelAnimationFrame(frameRef.current);
      void contextRef.current?.close();
    };
  }, []);

  useEffect(() => {
    if (!playing || !analyserRef.current) return;
    const analyser = analyserRef.current;
    const frequencies = new Uint8Array(analyser.frequencyBinCount);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const bins = [3, 7, 12, 20, 31];

    const update = () => {
      if (!reducedMotion.matches && waveRef.current) {
        analyser.getByteFrequencyData(frequencies);
        bins.forEach((bin, index) => {
          const level = (frequencies[bin] + frequencies[bin + 1] + frequencies[bin + 2]) / (3 * 255);
          waveRef.current?.style.setProperty(`--wave-${index}`, `${(0.78 + level * 0.5).toFixed(3)}`);
        });
      }
      frameRef.current = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(frameRef.current);
  }, [playing]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      if (!contextRef.current) {
        const context = new window.AudioContext();
        const source = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.82;
        source.connect(analyser);
        analyser.connect(context.destination);
        contextRef.current = context;
        analyserRef.current = analyser;
      }
      await contextRef.current.resume();
      await audio.play();
    } catch {
      setPlaying(false);
    }
  }, []);

  return (
    <AudioContextValue.Provider value={{ playing, toggle, registerWave }}>
      <audio ref={audioRef} src={AUDIO_SOURCE} loop preload="none" />
      {children}
    </AudioContextValue.Provider>
  );
}

export function useAmbientAudio() {
  const controls = useContext(AudioContextValue);
  if (!controls) throw new Error("AmbientAudioProvider is required");
  return controls;
}
