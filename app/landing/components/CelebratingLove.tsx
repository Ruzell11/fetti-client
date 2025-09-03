import Image from "next/image";

// Static data for feature cards
const features = [
  {
    image: "discover-creative",
    title: "discover creative msmes",
    description: "fetti believes in the power of real creatives to make magic happen. we are working to ensure you get connected to trustworthy and capable suppliers for that dream event come true."
  },
  {
    image: "organize-event",
    title: "organize your events easily",
    description: "fetti's features were created to revolutionize event planning. we designed fetti to empower diy-ers to plan their own event by making it intuitive, friendly, and fun....and pretty!"
  },
  {
    image: "secure-payment",
    title: "secure payments",
    description: "fetti adds a layer of protection to event planners by implementing milestone payments. cross-check makes it possible to transact payment only when the service is delivered."
  }
];

export const CelebratingLove = () => {
  return (
    <section className="min-h-screen w-full py-16 flex flex-col items-center bg-pink-50">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl px-4">
        <h2 className="font-bold text-4xl md:text-5xl mb-4">
          celebrating <span className="text-pink-600">love.</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          with <i className="text-pink-600 font-medium">fetti</i>, we make event planning so easy that you can focus on what really matters: celebrating with the people you love.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-4">
        {features.map((feature, index) => (
          <div key={index} className="text-center space-y-4">
            {/* Feature image */}
            <div className="mb-6">
              <Image
                className="rounded-2xl object-cover w-full h-[200px] md:h-[250px]"
                src={`/webp-assets/${feature.image}.webp`}
                alt={feature.title}
                width={350}
                height={250}
              />
            </div>

            {/* Feature content */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg md:text-xl text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};