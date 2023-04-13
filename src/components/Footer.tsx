import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section className="box-border border-0 border-solid border-gray-200 bg-gray-100 pb-7 pt-5 leading-7 text-gray-900">
      <div className="mx-auto box-border max-w-7xl border-solid px-4 md:px-6 lg:px-8">
        <div className="relative flex flex-col items-start justify-between border-0 border-gray-200 leading-7 text-gray-900 md:flex-row md:items-center">
          <Link
            href="/"
            className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900"
          >
            <Image
              src="/assets/logo.png"
              alt="My Open House"
              width={150}
              height={40}
            />
          </Link>
          <ul className="mx-auto my-6 box-border flex space-x-6">
            {/* <li className="relative mt-2 border-0 border-gray-200 text-left leading-7 text-gray-900 md:mt-0 md:border-b-0">
              <Link
                href="/features"
                className="box-border block w-full cursor-pointer items-center border-solid px-4 text-base font-normal leading-normal text-gray-900 no-underline focus-within:text-blue-700 hover:text-blue-600 sm:px-0 sm:text-left"
              >
                Features
              </Link>
            </li>
            <li className="relative mt-2 border-0 border-gray-200 text-left leading-7 text-gray-900 md:mt-0 md:border-b-0">
              <Link
                href="/pricing"
                className="box-border block w-full cursor-pointer items-center border-solid px-4 text-base font-normal leading-normal text-gray-900 no-underline focus-within:text-blue-700 hover:text-blue-600 sm:px-0 sm:text-left"
              >
                Pricing
              </Link>
            </li> */}
          </ul>
          <div className="right-0 mt-4 box-border flex w-full justify-center space-x-3 border-solid bg-gray-100 md:absolute md:mt-0 md:w-auto md:justify-end">
            <a
              href="#_"
              className="inline-flex cursor-pointer items-center border-0 border-gray-200 leading-7 text-gray-900 no-underline focus-within:text-blue-700 hover:text-blue-700"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H7"></path>
              </svg>
            </a>
            <a
              href="#_"
              className="inline-flex cursor-pointer items-center border-0 border-gray-200 leading-7 text-gray-900 no-underline focus-within:text-blue-700 hover:text-blue-700"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
              </svg>
            </a>
            <a
              href="#_"
              className="inline-flex cursor-pointer items-center border-0 border-gray-200 leading-7 text-gray-900 no-underline focus-within:text-blue-700 hover:text-blue-700"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9 3.6c5 6 7 10.5 7.5 16.2M6.4 19c3.5-3.5 6-6.5 14.5-6.4M3.1 10.75c5 0 9.814-.38 15.314-5"></path>
              </svg>
            </a>
            <a
              href="#_"
              className="inline-flex cursor-pointer items-center border-0 border-gray-200 leading-7 text-gray-900 no-underline focus-within:text-blue-700 hover:text-blue-700"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M16.5 7.5v.001"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4 text-center leading-7 text-gray-600 md:mt-5 md:mt-6 md:pt-5 md:pt-6">
          <p className="mt-0 box-border border-0 border-solid text-sm">
            © 2023 MyOpenHouse. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
