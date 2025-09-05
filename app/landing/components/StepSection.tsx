import Image from 'next/image';

export function StepSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-pink-500 to-pink-600 text-white px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative">
        {/* Header Text */}
        <div className="text-center w-full px-4 lg:px-0 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            make it one for the books.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold">
            add your own kind of magic.
          </h3>
        </div>

        {/* Centered composition wrapper */}
        <div className="relative w-full flex items-center justify-center h-[760px] lg:h-[820px]">
          <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full gap-8 lg:gap-12 px-4">
            {/* Laptop - left side on large screens */}
            <div className="z-20 flex-shrink-0 lg:w-1/2 flex justify-center">
              <Image
                src="/webp-assets/laptop.webp"
                alt="Laptop showing wedding planning interface"
                width={880}
                height={520}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* White Card - right side on large screens */}
            <div
              className="bg-white text-gray-900 rounded-3xl shadow-2xl z-10 flex flex-col justify-between p-8 lg:p-12 w-full lg:w-[640px]"
              style={{ minHeight: 520 }}
            >
              {/* Right Content inside white container */}
              <div className="w-full">
                <div className="mb-4">
                  <span className="text-pink-500 text-sm md:text-base font-medium">✨ as easy as 1, 2, 3!</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-6">
                  helping you plan your<br />
                  <span className="underline decoration-pink-500 decoration-4">event step by step.</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <span className="text-pink-500 text-3xl md:text-4xl font-bold">01</span>
                    <span className="text-base md:text-lg font-medium text-gray-900">choose your type of event.</span>
                  </div>

                  <div className="flex gap-6 items-start">
                    <span className="text-pink-500 text-3xl md:text-4xl font-bold">02</span>
                    <span className="text-base md:text-lg font-medium text-gray-900">select your must haves.</span>
                  </div>

                  <div className="flex gap-6 items-start">
                    <span className="text-pink-500 text-3xl md:text-4xl font-bold">03</span>
                    <span className="text-base md:text-lg font-medium text-gray-900">
                      discover trustworthy creative<br />
                      event suppliers near you.
                    </span>
                  </div>
                </div>
              </div>

              {/* Button positioned bottom-right */}
              <div className="flex justify-end pt-4">
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:bg-pink-600 transition-colors">
                  simulate my event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}