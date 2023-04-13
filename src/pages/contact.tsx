import { type NextPage } from "next";
import Layout from "~/components/Layout";

const Contact: NextPage = () => {
  return (
    <Layout>
      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-10 md:px-16">
          <div className="mx-auto mb-10 max-w-3xl md:mb-16">
            <p className="text-xs font-bold uppercase text-blue-500">
              Contact Us
            </p>
            <h2 className="mt-1 text-left text-2xl font-bold text-gray-800 md:mt-2 lg:text-3xl">
              Need to ask us a question?
            </h2>
            <p className="mx-auto mt-4 max-w-screen-md text-left text-gray-500 md:mt-6 md:text-lg">
              Fill out the form below and we&apos;ll do our very help you out
              and get back to you within 24 hours.
            </p>
          </div>
          <form className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm font-medium text-gray-500 sm:text-base"
              >
                First name
              </label>
              <input
                name="first-name"
                className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm font-medium text-gray-500 sm:text-base"
              >
                Last name
              </label>
              <input
                name="last-name"
                className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 inline-block text-sm font-medium text-gray-500 sm:text-base"
              >
                Company
              </label>
              <input
                name="company"
                className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm font-medium text-gray-500 sm:text-base"
              >
                Email
              </label>
              <input
                name="email"
                className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm font-medium text-gray-500 sm:text-base"
              >
                Subject
              </label>
              <input
                name="subject"
                className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm font-medium text-gray-500 sm:text-base"
              >
                Message
              </label>
              <textarea
                name="message"
                className="h-64 w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block rounded-md bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-500 active:bg-blue-700 md:text-base">
                Send Message
              </button>
            </div>
          </form>
          <p className="mx-auto mt-5 max-w-3xl text-xs text-gray-400">
            Please allow up to 24 hour response during the weekdays.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
