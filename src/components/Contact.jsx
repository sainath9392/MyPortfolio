import React from "react";

const Contact = () => {
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
        Your browser does not support the video tag.
      </video>

      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
    </div>
  );
};

export default Contact;
