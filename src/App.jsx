import React, { useEffect, useState } from "react";

export default function App() {
  const targetDate = new Date("2025-09-26T00:00:00");
  const [timeLeft, setTimeLeft] = useState(Math.max(targetDate - new Date(), 0));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Math.max(targetDate - new Date(), 0);
      setTimeLeft(diff);
      if (diff <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToMessage = () => {
    document.getElementById("personal-message")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinParty = () => {
    const audio = document.getElementById("bg-audio");
    if (audio && !isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
    scrollToMessage();
  };

  const toggleMusic = () => {
    const audio = document.getElementById("bg-audio");
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  // Countdown view
  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-500 text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          🎉 Counting down to Lux&apos;s Birthday!
        </h1>
        <p className="text-xl mb-8 animate-fadeIn animate-delay-200">
          From your Discord buddy
        </p>
        <div className="text-4xl md:text-5xl space-x-4 bg-white/20 p-6 rounded-xl shadow-lg animate-fadeIn animate-delay-400">
          <span>{days}d</span>
          <span>{hours}h</span>
          <span>{minutes}m</span>
          <span>{seconds}s</span>
        </div>
      </div>
    );
  }

  // Birthday view
  return (
    <div className="bg-gray-900 text-white">
      {/* Background music */}
      <audio id="bg-audio" src="/happy-birthday.mp3" loop />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
          🎉 Happy Birthday Lux!
        </h1>
        <p className="text-xl mb-6 animate-fadeIn animate-delay-200">
          From your Discord buddy
        </p>

        {/* Spotify embed */}
        <iframe
          className="mb-6 w-80 h-44 rounded-xl shadow-xl animate-fadeIn animate-delay-400"
          src="https://open.spotify.com/embed/track/1bMkimTb47umgNP6xCi4A1?utm_source=generator"
          title="Lux song"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        {/* Play / Pause & Join Button */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
          <button
            onClick={handleJoinParty}
            className="relative px-8 py-4 font-semibold text-lg rounded-full 
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              text-white shadow-lg 
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
              hover:-translate-y-1"
          >
            Join the Party 🎉
          </button>

          <button
            onClick={toggleMusic}
            className="relative px-8 py-4 font-semibold text-lg rounded-full 
              bg-gray-800/70 text-white shadow-md
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
          >
            {isPlaying ? "Pause Music 🎵" : "Play Music 🎵"}
          </button>
        </div>
      </section>

      {/* Personal Message Section */}
<section
  id="personal-message"
  className="py-20 px-4 bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-700"
>
  <div className="max-w-3xl mx-auto p-12 bg-gradient-to-tr from-gray-900/90 to-gray-800/80 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md animate-slideFadeIn">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
      🎁 A Personal Message
    </h2>
    <p className="whitespace-pre-line text-lg md:text-xl leading-relaxed text-white/90 text-center">
      {`Hey Lux,

Happy Birthdayyy 🎉!

From our first random Discord messages to all the memes, late-night rants and silly roasts, you’ve basically become my favourite notification.

You’re the only person who can listen to my nonsense without judging (well… mostly 😜).
Congrats on levelling up IRL 🎂✨. From teaching me ICSE trauma to spamming 🫦 emojis, you’ve been the chaos and the calm at the same time.

I’m really glad we crossed paths online — you’ve turned an app into a friendship.

So here’s to more jokes, more success, more random chaos and more reasons to smile. Stay awesome, keep being you, and may this year be as epic as the chaos we create together 🎂💙`}
    </p>
    <div className="mt-8 flex justify-center">
      <div className="w-24 h-1 bg-pink-400 rounded-full animate-pulse"></div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-300">
        Made with ❤️
      </footer>

      {/* Animations CSS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-400 { animation-delay: 0.4s; }

        @keyframes slideFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideFadeIn {
          animation: slideFadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
