import React from "react";
import { useState } from "react";

const Contact = () => {
  const [messege, setMessage] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b05a3780-eadc-4f8f-bed0-2878c42b4a58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Message sent successfully!");
      event.target.reset();
    }
    else {
      setMessage("Failed to send message. Please try again.");
    }
  };
  return (
    <div id="contact" className="h-[100vh] w-[100vw] overflow-hidden relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/back.mp4" type="video/mp4" />
      </video>

      <p>
        <span className="text-lg md:text-xl font-extrabold text-gray-700 absolute top-20 left-1/2 transform -translate-x-1/2">
          I would love to hear from you!
        </span>
      </p>

      <p>
        <span className="text-sm md:text-xl text-gray-300 z-20 absolute md:top-20 top-40 left-1/2 transform -translate-x-1/2">
          I would love to hear from you!
        </span>
      </p>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10">
        <form
          className="w-[80%] md:w-[60%] md:h-[50%] lg:w-[30%] lg:h-[50%] mx-auto bg-white/10 p-5 rounded-lg shadow-lg backdrop-blur-sm mt-60 md:mt-40"
          onSubmit={onSubmit}
        >
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            Contact Me
          </h2>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white py-2 rounded-md text-sm font-medium"
          >
            Send
          </button>
        </form>
        {messege && (
          <div className="mt-4 text-center text-white">
            <p>{messege}</p>
          </div>
        )}
        

        <div className="flex items-center justify-center gap-3 absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center mt-6">
            <a
              target="_blank"
              href="mailto:sainathduvvuri03@gmail.com"
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display  text-white w-16 h-8 md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              Email
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1hDT3cgkvn0ffXQaAfriWG989cW7XM2jC/view?usp=sharing"
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display  text-white w-16 h-8  md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              My Resume
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sainath-duvvuri-46ab61292?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvFIFk8H6SYSRka8sFPehRA%3D%3D"
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display text-white w-16 h-8  md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="https://github.com/sainath9392"
              target="_blank"
              className="bg-blue-500 text-[10px] md:text-sm font-semibold playfair-display text-white w-16 h-8  md:w-25 md:h-10 flex justify-center items-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
