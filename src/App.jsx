import songs from "./data/songs";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";
import { useRef, useState } from "react";

export default function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const changeSong = (song) => {
    setCurrentSong(song);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const nextSong = () => {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const nextIndex =
      currentIndex === songs.length - 1
        ? 0
        : currentIndex + 1;

    changeSong(songs[nextIndex]);
  };

  const prevSong = () => {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const prevIndex =
      currentIndex === 0
        ? songs.length - 1
        : currentIndex - 1;

    changeSong(songs[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 scale-110"
        style={{
          backgroundImage: `url(${currentSong.image})`,
        }}
      />

      {/* Main */}
      <div className="relative z-10 p-4 md:p-8 pb-32">

        <div className="flex flex-col md:flex-row gap-8">

          {/* Cover */}
          <div className="flex justify-center">

            <img
              src={currentSong.image}
              alt={currentSong.title}
              className="
              w-full
              max-w-[280px]
              h-[280px]
              md:w-72
              md:h-72
              rounded-2xl
              shadow-2xl
              object-cover"
            />

          </div>

          {/* Playlist */}
          <div className="flex-1">

            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Tamil Playlist
            </h1>

            <p className="text-gray-300 mb-6">
              {songs.length} Songs
            </p>

            <button
              onClick={() => changeSong(songs[0])}
              className="
              bg-cyan-400
              text-black
              px-6 py-3
              rounded-xl
              font-bold
              hover:scale-105
              transition"
            >
              Play All
            </button>

            <div className="mt-8 space-y-4 max-h-[350px] md:max-h-[450px] overflow-auto pr-2">

              {songs.map((song) => (
                <div
                  key={song.id}
                  onClick={() => changeSong(song)}
                  className={`
                  flex items-center gap-4 p-3 rounded-xl cursor-pointer transition

                  ${
                    currentSong.id === song.id
                      ? "bg-cyan-500/30"
                      : "bg-white/10 hover:bg-white/20"
                  }
                  `}
                >

                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />

                  <div className="min-w-0">
                    <h2 className="font-semibold truncate">
                      {song.title}
                    </h2>

                    <p className="text-gray-300 text-sm truncate">
                      {song.movie}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* Floating Controls */}
      <div
        className="
        fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        bg-white/10 backdrop-blur-xl
        px-6 py-3 md:px-8 md:py-4
        rounded-full shadow-2xl
        flex items-center
        gap-6 md:gap-10"
      >

        <button
          onClick={prevSong}
          className="text-2xl md:text-4xl hover:scale-110 transition"
        >
          <IoPlaySkipBack />
        </button>

        <button
          onClick={togglePlay}
          className="
          bg-cyan-400 text-black
          p-4 md:p-6
          rounded-full
          text-2xl md:text-3xl
          hover:scale-110 transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button
          onClick={nextSong}
          className="text-2xl md:text-4xl hover:scale-110 transition"
        >
          <IoPlaySkipForward />
        </button>

      </div>

      <audio
        ref={audioRef}
        src={currentSong.audio}
        onEnded={nextSong}
      />

    </div>
  );
}