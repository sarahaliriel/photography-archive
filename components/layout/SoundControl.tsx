"use client";

import { useAmbientAudio } from "@/components/layout/AmbientAudio";

export function SoundControl() {
  const { playing, toggle, registerWave } = useAmbientAudio();
  const label = playing ? "Pause sound" : "Play sound";

  return (
    <button className={`sound-control${playing ? " sound-control--playing" : ""}`} type="button" onClick={toggle} aria-label={label} aria-pressed={playing}>
      <span className="sound-control__wave" ref={registerWave} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((index) => <span className="sound-control__bar" key={index} />)}
      </span>
      <span className="sound-control__hint" aria-hidden="true">{label}</span>
    </button>
  );
}
