import AudioIcon from "/sound.gif";
import AudioFile from "/audio/audiotrack.mp3";
import { useMemo, useState, useEffect } from "react";
import { useAudio } from "../hooks/useAudio";

export const Audio = () => {
  // const audio = useMemo(new Audio(AudioFile));
  const audio = useAudio("/audio/audiotrack.mp3", {
    volume: 0.8,
    playbackRate: 1, // скорость
  });
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  // для паузы при переходе на другую вкладку
  window.onfocus = function () {
    !playing ? audio.pause() : audio.play();
  };

  window.onblur = function () {
    audio.pause();
  };

  return (
    <div
      onClick={toggle}
      className={`w-8 fixed bottom-[5vh] right-[5vw] cursor-pointer transition-all ${
        !playing && "opacity-50"
      }`}
    >
      <img src={AudioIcon} alt="Audio Icon" />
      <audio src={AudioFile} loop />
    </div>
  );
};
