import { type NextPage } from "next";

import Layout from "~/components/Layout";
import Link from "next/link";
import Image from "next/image";
import LearnMoreFeatures from "~/components/LearnMoreContent";
const LearnMore: NextPage = () => {
  return (
    <Layout>
      <section className="relative flex w-full flex-col-reverse bg-gray-900 px-6 py-16 lg:flex-col lg:pb-0 lg:pt-0">
        <div className="inset-y-0 right-0 top-0 z-0 mx-auto w-full max-w-xl px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:pr-0 xl:px-0">
          <svg
            className="absolute left-0 hidden h-full -translate-x-1/2 transform text-gray-900 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H80L50 120H0L50 0Z"></path>
          </svg>
          <Image
            className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            src="/assets/learn-more.jpg"
            width={1400}
            height={700}
            alt=""
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-xl flex-col items-start px-4 md:px-0 lg:max-w-screen-xl lg:px-4">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-2">
            <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
              Learn More
              <br className="hidden md:block" />
              <span className="inline-block text-blue-500">
                about our service.
              </span>
            </h1>
            <p className="mb-5 text-base text-gray-300 sm:pr-10 md:text-lg">
              This service has been found to vastly improve communication,
              collaboration and feedback between agents and home owners. So, we
              have received very positive feedback of this service and welcome
              you to give it a try and see for yourself.
            </p>
            <div className="flex flex-col items-center pt-2 sm:flex-row sm:pt-4"></div>
            <Link
              href="/"
              className="focus:shadow-outline mb-4 inline-flex h-12 w-full items-center justify-center rounded bg-blue-500 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-blue-700 focus:outline-none sm:mb-0 sm:mr-4 sm:w-auto"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h2 className="my-12 text-3xl font-bold sm:text-4xl">
          Hear About the Service
        </h2>

        <div className="video-responsive mb-20">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/f-kvMzecKm8`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </section>
      <LearnMoreFeatures />
    </Layout>
  );
};

export default LearnMore;
