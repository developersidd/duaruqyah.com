"use client";
import { FC, useEffect, useRef, useState } from "react";
import Icon from "../common/Icons";

type DuaAudioProps = {
  audioSrc: string;
};

const DuaAudio: FC<DuaAudioProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement;
    // Update the time as the audio plays
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      // If the audio has finished playing, set the play state to false
      if (audio.currentTime === audio.duration) {
        setPlay(false);
      }
    };
    // Add event listener to the audio element to update the time
    audio?.addEventListener("timeupdate", updateTime);

    return () => {
      audio?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    // Format the time in MM:SS
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handlePlayPause = () => {
    setPlay(!play);

    if (play) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };
  return (
    <div>
      {audioSrc && (
        <div className="flex items-center gap-5">
          <button className="outline-none" onClick={handlePlayPause}>
            <Icon
              alt={"audiobtn"}
              classes={"size-10"}
              name={`${!play ? "audiobtn" : "pause"}.svg`}
            />
          </button>
          <audio ref={audioRef} src={audioSrc}></audio>
          {play && (
            <>
              <input
                step="0.01"
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                className={`bg-no-repeat bg-gradient-to-t  from-primary to-primary w-18 h-[6px]  bg-gray-300 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-[15px]  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary`}
                style={{
                  backgroundSize: `${(currentTime / duration) * 100}% 100%`,
                }}
              />
              <div className="text-l text-gray-500">
                {formatTime(duration - currentTime)}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DuaAudio;
