import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const user = useUser();

  return (
    // <!-- navbar goes here -->
    <>
      <nav className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <Link
                  href="/"
                  className="mr-6 flex items-center px-2 py-5 text-gray-700 hover:text-gray-900"
                >
                  <Image
                    src="/assets/logo.png"
                    alt="My Open House"
                    width={180}
                    height={70}
                  />
                </Link>
              </div>

              {/* <!-- primary nav --> */}
              <div className="hidden items-center space-x-1 md:flex">
                <Link
                  href="/features"
                  className="inline-block px-5 py-1 text-lg text-blue-500 hover:border-gray-200 hover:bg-gray-200"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="inline-block px-5 py-1 text-lg text-blue-500 hover:border-gray-200 hover:bg-gray-200"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-5 py-1 text-lg text-blue-500 hover:border-gray-200 hover:bg-gray-200"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="hidden items-center space-x-1 md:flex">
              {!user.isSignedIn && (
                <button className="focus:shadow-outline mb-4 inline-flex h-12 w-full items-center justify-center rounded bg-blue-500 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-blue-800 focus:outline-none sm:mb-0 sm:mr-4 sm:w-auto">
                  <SignInButton />
                </button>
              )}

              {!!user.isSignedIn && (
                <button className="focus:shadow-outline mb-4 inline-flex h-12 w-full items-center justify-center rounded bg-blue-500 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-blue-800 focus:outline-none sm:mb-0 sm:mr-4 sm:w-auto">
                  <SignOutButton />
                </button>
              )}

              {/* <button className="btn">
                <SignUpButton />
              </button> */}
              <div className="">
                <p className="font-semibold text-gray-900">
                  Not a member.&nbsp; <SignUpButton /> Now.
                </p>
              </div>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="flex items-center md:hidden">
              <button className="mobile-menu-button">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>

      {/* // <!-- content goes here --> */}
    </>
  );
}

export default Header;
