import React, { useRef, useState } from "react";
const EmailSignUp = () => {
  enum SendingState {
    SEND,
    SENT,
    RECIEVED,
    ERROR,
  }

  const email = useRef(null);
  const [status, setStatus] = useState(SendingState.SEND);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(SendingState.SENT);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setStatus(SendingState.ERROR);
      return;
    }

    email.current.value = "";
    setStatus(SendingState.RECIEVED);
  };

  return (
    <>
      <h1>Sign up for our first release.</h1>
      <form className="mt-2 sm:flex" onSubmit={subscribe}>
        <input
          aria-label="Email address"
          type="email"
          required
          disabled={status != SendingState.SEND}
          className={`w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 appearance-none leading-6 rounded-md focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs`}
          placeholder="Enter your email"
          ref={email}
        />
        <div className="mt-3 shadow rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            disabled={status != SendingState.SEND}
            className={`flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-blue-500 border border-transparent leading-6 rounded-md hover:bg-blue-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out`}
          >
            notify me
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailSignUp;
