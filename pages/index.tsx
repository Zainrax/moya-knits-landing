import Head from "next/head";
import EmailSignUp from "../components/EmailSignUp";
import AnimatedScrunchie from "../components/AnimatedScrunchie";
import SocialMediaButtons from "../components/SocialMediaButtons";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Head>
        <title>Moya Knits | New Zealand Sustainable Handmade Knitwear</title>
        <meta
          name="description"
          content="Sustainable handmade knitwear made with New Zealand's finest Merino Wools. Designed with care and ethical practices to keep you warm and the planet better off."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex flex-col mb-5">
        <img
          src="/MoyaLogo.svg"
          alt="Blue Wobbly Circle with Moya Knits in Center"
          className="self-center w-48 my-3"
        />
        <SocialMediaButtons />
      </section>
      <section className="flex flex-col justify-around flex-shrink-0 block mx-2 max-w-screen-xl lg:flex-row">
        <AnimatedScrunchie />
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
