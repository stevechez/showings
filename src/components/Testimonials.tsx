import React from "react";

function Testimonials() {
  return (
    <section className="min-w-screen flex items-center justify-center bg-white py-20">
      <div className="bg-white px-16">
        <div className="container mx-auto flex flex-col items-start lg:items-center">
          <p className="relative flex w-full items-start justify-start text-lg font-bold uppercase tracking-wider text-blue-500 lg:items-center lg:justify-center">
            Don&apos;t just take our word for it
          </p>

          <h2 className="relative flex w-full max-w-3xl items-start justify-start text-5xl font-bold lg:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="absolute right-0 -mr-16 -mt-2 hidden h-12 w-12 text-gray-200 lg:inline-block"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            See what others are saying
          </h2>
          <div className="mt-6 block h-0.5 w-full max-w-lg rounded-full bg-purple-100"></div>

          <div className="mb-4 mt-12 w-full items-center justify-center lg:flex">
            <div className="mb-12 flex h-auto w-full flex-col items-start justify-start lg:mb-0 lg:w-1/3">
              <div className="flex items-center justify-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">John Doe</h4>
                  <p className="text-gray-600">CEO of Something</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                &quot;This is a no-brainer if you want to take your business to
                the next level. If you are looking for the ultimate toolset,
                this is it!&quot;
              </blockquote>
            </div>
            <div className="mx-0 mb-12 flex h-auto w-full flex-col items-start justify-start border-l border-r border-transparent px-0 lg:mx-8 lg:mb-0 lg:w-1/3 lg:border-gray-200 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">Jane Doe</h4>
                  <p className="text-gray-600">CTO of Business</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                &quot;Thanks for creating this service. My life is so much
                easier. Thanks for making such a great product.&quot;
              </blockquote>
            </div>
            <div className="flex h-auto w-full flex-col items-start justify-start lg:w-1/3">
              <div className="flex items-center justify-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">John Smith</h4>
                  <p className="text-gray-600">Creator of Stuff</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                &quot;Packed with awesome content and exactly what I was looking
                for. I would highly recommend this to anyone.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
