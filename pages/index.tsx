import Head from "next/head";

const FacebookButton = () => {
  return (
    <a href="https://www.facebook.com/moyaknits/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2196F3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    </a>
  );
};

const InstagramButton = () => {
  return (
    <a href="https://www.instagram.com/moya.knits/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2196F3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
      </svg>
    </a>
  );
};

const MailButton = () => {
  return (
    <a href="mailto:moyaknits@gmail.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2196F3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    </a>
  );
};

const EmailSignUp = () => {
  return (
    <>
      <h1>Get an update for the first limited run.</h1>
      <form className="mt-2 sm:flex">
        <input
          aria-label="Email address"
          type="email"
          className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 appearance-none leading-6 rounded-md focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
          placeholder="Enter your email"
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

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col mb-5">
        <img
          src="/MoyaLogo.svg"
          alt="Blue Wobbly Circle with Moya Knits in Center"
          className="self-center w-48 my-3"
        />
        <div className="flex content-center self-center my-5 space-x-2">
          <FacebookButton />
          <InstagramButton />
          <MailButton />
        </div>
      </section>
      <section className="flex flex-col justify-around flex-shrink-0 block mx-2 max-w-screen-xl lg:flex-row">
        <div
          className="flex items-center content-center justify-center p-10 bg-local bg-center bg-no-repeat md:ml-16 xl:ml-32 lg:order-last"
          style={{
            backgroundImage: "url(/image-background.svg)",
          }}
        >
          <img
            className="w-9/12 max-w-xs rounded-full shadow-lg sm:max-w-md"
            src="/scrunchie.jpg"
            alt="Knitted Scrunchie next to yellow and blue yarn"
          />
        </div>
        <div className="mx-4 mt-2 text-gray-800">
          <h1 className="my-5 text-3xl font-semibold leading-tight text-gray-900 capitalize break-normal sm:text-4xl lg:text-5xl">
            Sustainable Knitwear <br /> handmade for you
          </h1>
          <h2 className="text-2xl leading-tight ">
            Made to love our planet, <br /> Made to be loved by you
          </h2>
          <ul className="mt-1 text-lg">
            <li>
              <b>High quality</b> fibres made to last
            </li>
            <li>
              <b>Sustainable</b> for the planet
            </li>
            <li>
              <b>Ethical</b> farming practices
            </li>
          </ul>
          <div className="my-8 text-lg font-semibold text-gray-900">
            <EmailSignUp />
          </div>
        </div>
      </section>
    </main>
  );
}
