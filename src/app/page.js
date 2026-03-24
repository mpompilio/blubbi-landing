"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f5f9ff] text-center px-6 py-10">

      {/* NAVBAR */}
      <div className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : ""
      }`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <img
              src="/screens/logos.png"
              alt="blubbi logo"
              className="w-40 hover:scale-105 transition duration-300"
            />
          <a
            href="https://discord.gg/2DS6E9qHRH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg bg-[#6EA8D6] text-white inline-block"
          >
            Join Discord
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-20">

      {/* HERO */}
      <section className="max-w-3xl mx-auto text-center">

          {/* LOGO HERO */}
          <div>
            <div className="relative mx-auto w-fit">
              
              {/* Glow effect */}
              <div className="absolute inset-0 blur-2xl bg-[#6EA8D6]/20 rounded-full scale-110"></div>

              <img
                src="/screens/logos.png"
                alt="blubbi"
                className="relative mx-auto w-80 md:w-96 drop-shadow-xl"
              />
            </div>
          </div>

          {/* TAGLINE */}
          <p className="mt-8 text-3xl font-semibold text-gray-800">
            Stop scrolling. Start talking.
          </p>

          <p className="mt-4 text-gray-700 text-lg max-w-xl mx-auto">
            The world has never been more connected - and people have never felt more alone. 
            We're changing that.
          </p>

          {/* CTA */}
          <a
            href="https://discord.gg/2DS6E9qHRH"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-10 py-4 bg-[#6EA8D6] text-white rounded-2xl text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition inline-block"
          >
            Join the Discord
          </a>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Early access to blubbi is soon! Join our Discord to be one of the first users.
          </p>
        </section>

        {/* FLOATING SCREENSHOTS */}
        <section className="mt-24">
          <h2 className="text-3xl font-semibold text-gray-900">See blubbi in action</h2>

          <div className="mt-16 flex gap-10 overflow-x-auto px-4 pb-10">

            {[
              { src: "/screens/home.png", label: "Browse topics" },
              { src: "/screens/profile.png", label: "View profiles" },
              { src: "/screens/chat.png", label: "Real conversations" },
              { src: "/screens/rate.png", label: "Rate & earn bubbles" },
              { src: "/screens/user-profile.png", label: "Build your profile" },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[260px] text-center transform hover:-translate-y-2 transition duration-300"
              >
                <div className="rounded-[40px] overflow-hidden shadow-2xl bg-black p-2">
                  <img
                    src={item.src}
                    className="w-full h-auto rounded-[30px]"
                    alt={item.label}
                  />
                </div>

                <p className="mt-4 text-sm text-gray-700">{item.label}</p>
              </div>
            ))}

          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="mt-28 max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">What is blubbi?</h2>
          <p className="mt-4 text-gray-700 text-lg">
            blubbi connects you with real people who actually want to talk.
            No pressure. No followers. Just conversation.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-28 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">How it works</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Pick a topic",
                desc: "Choose what you want to talk about — anything on your mind."
              },
              {
                title: "Find someone",
                desc: "Browse people ready to talk right now."
              },
              {
                title: "Start chatting",
                desc: "Send a request and start a real conversation."
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            ))}

          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-28 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Why blubbi?</h2>

          <div className="mt-10 grid gap-6 text-left">

            {[
              ["🫧 Real people", "No bots. No feeds. Just conversations."],
              ["⚡ Instant connection", "Find someone to talk to in seconds."],
              ["🔒 Safe & controlled", "Block, report, and rate users."],
              ["⭐ Earn bubbles", "Build your profile through great conversations."],
            ].map(([title, desc], i) => (
              <div key={i} className="p-4 rounded-xl hover:bg-white/60 transition">
                <h3 className="font-semibold text-gray-900">{title}</h3>
                {title.includes("Safe & controlled") ? (
                  <p className="text-gray-700">
                    {desc}
                    <br />
                    <span className="italic">
                      Text-only conversations -- no photos, no pressure.
                    </span>
                  </p>
                ) : (
                  <p className="text-gray-700">{desc}</p>
                )}
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="mt-32">
          <h2 className="text-3xl font-semibold text-gray-900">
            Be one of the first on blubbi
          </h2>

          <p className="mt-4 text-gray-700">
            We’re launching soon. Join our Discord for updates!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 items-center">
            <a
              href="https://discord.gg/2DS6E9qHRH"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#6EA8D6] text-white rounded-xl shadow-md hover:scale-105 transition inline-block"
            >
              Join Discord
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 text-sm text-gray-400">
          © {new Date().getFullYear()} blubbi
        </footer>

      </div>
    </main>
  );
}




