import { type NextPage } from "next";

import Layout from "~/components/Layout";

const Pricing: NextPage = () => {
  return (
    <Layout>
      <section className="lg:py-18 bg-white py-8 leading-7 text-gray-900 sm:py-12 md:py-16">
        <div className="mx-auto box-border max-w-7xl border-solid px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="flex flex-col items-center border-0 border-gray-200 text-center leading-7 text-gray-900">
            <h2 className="mb-2 box-border border-solid text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mb-8 mt-2 box-border border-solid text-xl text-gray-900 sm:text-2xl">
              One simple price, hassle-free, 30-day money-back guarantee, cancel
              anytime.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 border-0 border-gray-200 leading-7 text-gray-100 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            {/* <!-- Price 1 --> */}
            <div className="relative z-10 mx-auto my-0 flex max-w-md flex-col items-center rounded-lg border border-solid p-4 sm:my-0 sm:p-6 md:my-8 md:p-8 lg:-mr-3">
              <h3 className="m-0 border-0 border-gray-200 text-2xl font-semibold leading-tight tracking-tight text-gray-100 sm:text-3xl md:text-4xl">
                Starter
              </h3>
              <div className="mt-6 flex items-end border-0 border-gray-200 leading-7 text-gray-100">
                <p className="m-0 box-border border-solid text-6xl font-semibold leading-none">
                  $5
                </p>
                <p className="m-0 box-border border-solid">/ month</p>
              </div>
              <p className="mb-5 mt-6 border-0 border-gray-200 text-left text-base leading-normal text-gray-100">
                Ideal for Startups and Small Companies
              </p>
              <ul className="ml-5 mt-4 flex-1 border-0 border-gray-200 p-0 leading-7 text-gray-100">
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-600 text-gray-100 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Automated Reporting
                </li>
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-gray-100 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Faster Processing
                </li>
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-100 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Customizations
                </li>
              </ul>
              <button className="mt-8 inline-flex w-full cursor-pointer justify-center rounded-md border border-blue-100 bg-transparent px-4 py-3 text-center font-sans text-sm leading-none text-blue-100 no-underline focus-within:border-blue-700 focus-within:bg-blue-700 focus-within:text-white hover:border-blue-700 hover:bg-blue-700 hover:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
            {/* <!-- Price 2 --> */}
            <div className="relative z-20 mx-auto my-0 flex max-w-md flex-col items-center rounded-lg border-4 border-solid border-blue-600 bg-white p-4 sm:p-6 md:px-8 md:py-16">
              <h3 className="m-0 border-0 border-gray-200 text-2xl font-semibold leading-tight tracking-tight text-black sm:text-3xl md:text-4xl">
                Basic
              </h3>
              <div className="mt-6 flex items-end border-0 border-gray-200 leading-7 text-gray-900">
                <p className="m-0 box-border border-solid text-6xl font-semibold leading-none">
                  $1
                </p>
                <p className="m-0 box-border border-solid">/ month</p>
              </div>
              <p className="mb-5 mt-6 border-0 border-gray-200 text-left text-base leading-normal text-gray-900">
                Ideal for medium-size businesses to larger businesses
              </p>
              <ul className="mt-4 flex-1 border-0 border-gray-200 p-0 leading-7 text-gray-900">
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Everything in Starter
                </li>

                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Premium Support
                </li>
              </ul>
              <button className="mt-8 inline-flex w-full cursor-pointer justify-center rounded-md border bg-blue-600 px-4 py-3 text-center font-sans text-sm leading-none text-white no-underline focus-within:border-blue-700 focus-within:bg-blue-700 focus-within:text-white hover:border-blue-700 hover:bg-blue-700 hover:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
            {/* <!-- Price 3 --> */}
            <div className="relative z-10 mx-auto my-0 flex max-w-md flex-col items-center rounded-lg border border-solid p-4 sm:my-0 sm:p-6 md:my-8 md:p-8 lg:-ml-3">
              <h3 className="m-0 border-0 border-gray-200 text-2xl font-semibold leading-tight tracking-tight text-gray-100 sm:text-3xl md:text-4xl">
                Plus
              </h3>
              <div className="mt-6 flex items-end border-0 border-gray-200 leading-7 text-gray-100">
                <p className="m-0 box-border border-solid text-6xl font-semibold leading-none">
                  $25
                </p>
                <p className="m-0 box-border border-solid">/ month</p>
              </div>
              <p className="mb-5 mt-6 border-0 border-gray-200 text-left text-base leading-normal text-gray-100">
                Ideal for larger and enterprise companies
              </p>
              <ul className="mt-4 flex-1 border-0 border-gray-200 p-0 leading-7 text-gray-100">
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-100 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Everything in Basic
                </li>
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-100 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Builds
                </li>
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-100 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Advanced Analytics
                </li>
                <li className="mb-2 ml-5 block inline-flex w-full items-center border-solid text-left font-semibold">
                  <svg
                    className="mr-2 h-5 w-5 font-semibold leading-7 text-blue-100 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Company Evaluations
                </li>
              </ul>
              <button className="mt-8 inline-flex w-full cursor-pointer justify-center rounded-md border border-blue-100 bg-transparent px-4 py-3 text-center font-sans text-sm leading-none text-blue-100 no-underline focus-within:border-blue-700 focus-within:bg-blue-700 focus-within:text-white hover:border-blue-700 hover:bg-blue-700 hover:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
