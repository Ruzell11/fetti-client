import { Button } from "@/components/ui/button";
import Image from "next/image";

// Static data for creativity images
const creativityImages = [
  { name: "flowers" },
  { name: "paint-brush" },
  { name: "cake" },
  { name: "make-up-kit" },
];

export const CreativitySection = () => {
  return (
    <section className="min-h-screen w-full py-10 flex flex-col items-center px-4">
      {/* Images container */}
      <div className="grid grid-cols-2 py-3 lg:grid-cols-4 gap-2 lg:gap-7">
        {creativityImages.map((image, index) => (
          <Image
            className="rounded-xl object-cover w-[180px] md:w-[300px] lg:w-[500px] h-[200px] md:h-[300px] lg:h-[480px]"
            key={index}
            src={`/webp-assets/${image.name}.webp`}
            alt={image.name}
            width={408}
            height={408}
          />
        ))}
      </div>

      {/* Texts and button container */}
      <div className="w-full h-full flex justify-center items-center py-12">
        <div className="text-center max-w-[520px] space-y-4 md:space-y-7">
          {/* Heading */}
          <h2 className="font-bold text-3xl md:text-4xl">
            celebrating <span className="text-pink-600">creativity.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-sm leading-relaxed md:text-base">
            as fans of creatives, we believe in the rich value of creative
            talent. we created{" "}
            <i className="text-pink-600 font-medium">fetti</i> with the hope of
            establishing the creatives’ worth and, with it, living in a world
            where the creative profession is valued and celebrated.
          </p>

          {/* Subtext */}
          <p className="font-semibold text-base md:text-lg">
            help make people’s dream event <br /> come true with your talent.
          </p>

          {/* Button */}
          <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-md p-5 text-lg">
            join as a creative worker
          </Button>
        </div>
      </div>
    </section>
  );
};
