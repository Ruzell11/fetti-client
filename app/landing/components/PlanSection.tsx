import Image from 'next/image';

export const PlanSection = () => {
  const eventTypes = [
    {
      id: 'wedding',
      title: 'wedding',
      image: '/webp-assets/wedding-plan.webp',
      alt: 'Wedding rings on flowers'
    },
    {
      id: 'birthday',
      title: 'birthday',
      image: '/webp-assets/birthday-plan.webp',
      alt: 'Birthday cake with confetti'
    },
    {
      id: 'baptism',
      title: 'baptism',
      image: '/webp-assets/baptism-plan.webp',
      alt: 'White baptism dress and accessories'
    },
    {
      id: 'business-launch',
      title: 'business launch',
      image: '/webp-assets/business-plan.webp',
      alt: 'Pink gift box with gold ribbon'
    },
    {
      id: 'corporate-events',
      title: 'corporate events',
      image: '/webp-assets/corporate-plan.webp',
      alt: 'Bar setup for corporate event'
    },
    {
      id: 'baby-shower',
      title: 'baby shower',
      image: '/webp-assets/baby-shower-plan.webp',
      alt: 'Pink baby shower decorations'
    },
    {
      id: 'proposal',
      title: 'proposal',
      image: '/webp-assets/proposal-plan.webp',
      alt: 'Hands holding each other'
    },
    {
      id: 'anniversary',
      title: 'anniversary',
      image: '/webp-assets/anniversary-plan.webp',
      alt: 'Number 50 with lights and decorations'
    }
  ];

  return (
    <section className="w-full py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              plan <span className="text-pink-500">any event.</span>
            </h2>
            <p className="text-gray-600 max-w-md text-sm md:text-base">
              we work with talented suppliers who bring all kinds of events to life.
              <br />
              browse suppliers per category.
            </p>
          </div>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors whitespace-nowrap">
            start planning
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {eventTypes.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[417px] rounded-lg overflow-hidden mb-3">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 277px"
                  priority={event.id === 'wedding' || event.id === 'birthday'}
                />
              </div>
              <h3 className="text-center font-medium text-gray-800 group-hover:text-pink-500 transition-colors text-sm md:text-base">
                {event.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};