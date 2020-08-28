import React, { useRef, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";

const EmailSignUp = () => {
  enum SendingStatus {
    SEND,
    SENT,
    RECIEVED,
    ERROR,
  }

  const email = useRef(null);
  const [status, setStatus] = useState(SendingStatus.SEND);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(SendingStatus.SENT);

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
      setStatus(SendingStatus.ERROR);
      return;
    }

    email.current.value = "";
    setStatus(SendingStatus.RECIEVED);
  };

  const sendTransition = useTransition(status, {
    from: { opacity: 0, position: "relative" },
    enter: { opacity: 1 },
    leave: { opacity: 0, visibilty: "hidden", position: "absolute" },
  });

  const text = sendTransition((style, state) => {
    return (
      <animated.h1 key={state} className={"w-20"} style={style}>
        {status === SendingStatus.SEND
          ? "notify me"
          : status === SendingStatus.SENT
          ? "sending..."
          : status === SendingStatus.RECIEVED
          ? "recieved"
          : "try again"}
      </animated.h1>
    );
  });

  return (
    <>
      <h1>Sign up for our first release.</h1>
      <animated.form className="mt-2 sm:flex" onSubmit={subscribe}>
        <input
          aria-label="Email address"
          type="email"
          disabled={status === SendingStatus.SENT}
          className={`w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 appearance-none leading-6 rounded-md focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs`}
          placeholder="Enter your email"
          onFocus={() => setStatus(SendingStatus.SEND)}
          ref={email}
        />
        <div className="mt-3 shadow rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            disabled={status === SendingStatus.SENT}
            className={`flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-blue-500 border border-transparent leading-6 rounded-md hover:bg-blue-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out`}
          >
            {text}
          </button>
        </div>
      </animated.form>
    </>
  );
};

export default EmailSignUp;
