"use client";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Icon from "./common/Icons";
const AudioPlayerCom = ({ audioSrc }: { audioSrc: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  const stepValue = Math.max(duration / 1000, 0.01); // Set a minimum step value of 0.01
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);

      if (audio.currentTime === audio.duration) {
        setPlay(false);
      }
    };

    audio?.addEventListener("timeupdate", updateTime);

    return () => {
      audio?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    setPlay(!play);
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const seekTime = Number(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="bg-primary-lime px-7 py-5 rounded-lg h-full ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold"> রুকিয়া অডিও </h3>
        <button className="px-3 py-1 flex items-center gap-2 bg-[#E4F0E3] rounded-md">
          লিস্ট
          <Image
            src="/assets/icons/audio.svg"
            width={30}
            height={30}
            alt="audio"
          />
        </button>
      </div>
      {/* audio background */}
      <div className="py-4">
        <Image
          className="w-full"
          src="/assets/icons/audio-bg.svg"
          width={400}
          height={300}
          alt="audio"
        />
      </div>
      {/* Audio Player */}
      <div>
        <audio className="hidden" ref={audioRef} src={audioSrc}></audio>
        <div className="flex items-center justify-between">
          <div className="text-l text-gray-500 mb-3">
            {formatTime(duration - currentTime)}
          </div>
          <div className="text-l text-gray-500">
            {formatTime(audioRef.current?.duration || 0)}
          </div>
        </div>
        <input
          type="range"
          min={0}
          step={stepValue}
          max={Math.round(duration)}
          onChange={handleSeek}
          value={currentTime}
          className={` block w-full bg-no-repeat cursor-grab bg-gradient-to-t  from-primary-black to-primary-black w-18 h-[6px]  bg-gray-300 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-[15px]  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-black`}
          style={{
            backgroundSize: `${
              currentTime ? (currentTime / duration) * 100 : 0
            }% 100%`,
          }}
        />
        {/*  audio controllers */}
        <div className="mt-5 flex items-center justify-evenly">
          <button className="outline-none" onClick={handlePlayPause}>
            <Icon alt="shuffle" classes={"size-6"} name={`shuffle.svg`} />
          </button>
          <button className="outline-none" onClick={handlePlayPause}>
            <Icon alt="previous" classes={"size-8"} name={`previous.svg`} />
          </button>
          <button
            className="outline-none bg-primary-gray p-3  rounded-full flex items-center justify-center text-center"
            onClick={handlePlayPause}
          >
            <Icon
              alt="play-pause"
              classes={"size-[22px] inline-block"}
              name={`${!play ? "play.png" : "pause.svg"}`}
            />
          </button>

          <button className="outline-none" onClick={handlePlayPause}>
            <Icon alt="next" classes={"size-8"} name={`next.svg`} />
          </button>
          <button className="outline-none" onClick={handlePlayPause}>
            <Icon alt="repeat" classes={"size-6"} name={`repeat.svg`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerCom;
