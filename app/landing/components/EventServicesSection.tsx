import { Button } from "@/components/ui/button";
import Image from "next/image";

// Static data for event services cards
const eventServices = [
  {
    name: "grow your business",
    description:
      "unleash your creativity with fetti. display your skills to a global audience, maximize the opportunities, and turn your passion into income effortlessly.",
  },
  {
    name: "organize your calendar",
    description:
      "streamline your schedule with our intuitive calendar, featuring seamless event creation and smart reminders that will help improve the organization of your business.",
  },
  {
    name: "manage your services",
    description:
      "simplify your technical workflow with our easy-to-use dashboard. We designed fetti to help creative msmes stay in control and help boost productivity effortlessly.",
  },
  {
    name: "communicate on time",
    description:
      "enhance client communication with our platform. streamline interactions, foster stronger connections, and elevate your client relationships for improved collaboration and satisfaction.",
  },
  {
    name: "securely receive payment",
    description:
      "receive payments securely. ensure swift transactions, protect sensitive information, and enjoy peace of mind in every financial exchange. fetti makes sure that you get the payments for your services on time.",
  },
  {
    name: "all in one account",
    description:
      "say hello to the convenience of managing multiple creative products and services. our comprehensive solution brings together everything you need to thrive in one multi account.",
  },
];

export const EventServicesSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center px-10 pb-20 gap-5 md:gap-10">
      {/* Event Services Container*/}
      <div className="p-5 grid grid-cols-1 gap-12 justify-items-center text-center sm:grid-cols-2 lg:grid-cols-3">
        {eventServices.map((services, index) => (
          <div key={index} className="flex flex-col items-center gap-4 w-[250px] md:w-[300px] xl:w-[390px] 2xl:w-[475px] sm:gap-4">
            <Image
                src={`/webp-assets/${services.name.replaceAll(" ", "-")}.webp`}
                alt={services.name}
                width={500}
                height={500}
                className="rounded-3xl"
            />
            <h3 className="font-bold text-xl lg:text-2xl">{services.name}</h3>
            <p className="text-wrap text-sm leading-relaxed px-3 md:text-base">{services.description}</p>
          </div>
        ))}
      </div>
      {/* Button */}
      <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-md p-5 text-md md:text-lg">
        list my creative event services
      </Button>
    </section>
  );
};
