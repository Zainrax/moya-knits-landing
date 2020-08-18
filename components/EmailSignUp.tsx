import React, { useRef, useState } from "react";

const EmailSignUp = () => {
  const email = useRef(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { message, error } = await res.json();

    if (message) {
      console.log(message);
    }
    if (error) {
      console.error(error);
      setMessage(error);
      return;
    }

    email.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <>
      <h1>Get an update for the first limited run.</h1>
      <form className="mt-2 sm:flex" onSubmit={subscribe}>
        <input
          aria-label="Email address"
          type="email"
          required
          className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 appearance-none leading-6 rounded-md focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
          placeholder="Enter your email"
          ref={email}
        />
        <div className="mt-3 shadow rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-blue-500 border border-transparent leading-6 rounded-md hover:bg-blue-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Notify me
          </button>
        </div>
      </form>
    </>
  );
};
export default EmailSignUp;
