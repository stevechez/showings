import Image from "next/image";

function Features() {
  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-8 space-y-5 px-10 lg:mb-16 lg:px-0 lg:text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Features</h2>
        </div>
        <div className="grid overflow-hidden lg:rounded-xl">
          <div className="grid items-center lg:grid-cols-2">
            <div className="flex h-full flex-col items-start justify-center space-y-4 bg-white py-16 pl-16 pr-16 lg:py-0 lg:pr-20">
              <h3 className="text-2xl font-semibold sm:text-4xl">
                Communication
              </h3>
              <p className="text-lg text-gray-600">
                Instant communication between agents and homeowners. If there
                are things spotted in while, they can note and will be sent
                recorded the group list when it happens. Anybody in the group
                can see open items on the list anytime.
              </p>
            </div>
            <div className="h-96 overflow-hidden bg-gray-100">
              <Image
                src="/assets/communication.jpg"
                className="h-full w-full object-cover"
                width={400}
                height={300}
                alt=""
              />
            </div>
          </div>

          <div className="grid items-center lg:grid-cols-2">
            <div className="order-last h-96 overflow-hidden bg-gray-100 lg:order-first">
              <Image
                src="/assets/collaboration.jpg"
                className="h-full w-full object-cover"
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="flex h-full flex-col items-start justify-center space-y-4 bg-white py-16 pl-16 pr-16 lg:py-0 lg:pr-20">
              <h3 className="text-2xl font-semibold sm:text-4xl">
                Collaboration
              </h3>
              <p className="text-left text-lg text-gray-600">
                Way better collaboration between agents and sellers. Things
                won&apos;t accidently fall through the cracks and the sellers
                can feel way more in the loop of the process.
              </p>
            </div>
          </div>

          <div className="grid items-center lg:grid-cols-2">
            <div className="flex h-full flex-col items-start justify-center space-y-4 bg-white py-16 pl-16 pr-16 lg:py-0 lg:pr-20">
              <h3 className="text-2xl font-semibold sm:text-4xl">Feedback</h3>
              <p className="text-lg text-gray-600">
                Easy to check progress on open items and comments regarding this
                home. Easy to connect with agent(s) handling the logistics your
                home to better that you being taken of.
              </p>
            </div>
            <div className="h-96 bg-gray-100">
              <Image
                src="/assets/feedback.jpg"
                className="h-full w-full object-cover"
                width={400}
                height={300}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
