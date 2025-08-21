import React from "react";

const ContactBackground = () => {
  return (
    <section className="relative min-h-[320px] bg-primary overflow-hidden mt-0 mb-0">
      {/* Integrated Image with Blend Effect */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&h=1500&q=80"
        alt="Contact section background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ mixBlendMode: "multiply" }}
      />
      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 py-12 mt-16">
        <div>
          <h2 className="text-5xl text-white font-black tracking-tight sm:text-7xl sm:text-right text-center drop-shadow-md">
            Contact Page.
          </h2>
          <p className="mt-8 text-lg font-medium text-gray-200 tracking-tight sm:text-xl sm:w-1/2 ml-auto sm:text-right text-center drop-shadow-sm">
            Feel free to reach out for collaborations, inquiries, or just to say hello.
            I am always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
        </div>
      </div>
      {/* Decorative Blur Elements (Bright Colors, Fixed clipPath) */}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[274.25px] bg-gradient-to-tr from-[#ff4d4d] to-[#ff9900] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-20 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-28 sm:ml-16 sm:translate-x-0"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[274.25px] bg-gradient-to-tr from-[#ff4d4d] to-[#ff9900] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default ContactBackground;