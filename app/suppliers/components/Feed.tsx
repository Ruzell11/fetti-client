import { CheckCircle } from "lucide-react";
import Image from 'next/image';

export default function Feed(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">

  <div className="md:col-span-1  border-1 p-4 rounded-md ">
    <h3 className="text-lg font-semibold mb-2">Bio</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Cake Tralalas is a small home-based bakeshop that serves
      delicious customized cakes and pastries.  
      <br /><br />
      By ordering, you agree to our terms: all customized cakes require
      a 50% downpayment, no cancellations 2 days before pickup, and
      designs may slightly vary.
    </p>

       <div className="rounded-2x mt-6">
      <h2 className="text-lg font-semibold mb-4">Terms & Conditions</h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <CheckCircle className="w-10 h-10 t border-1 p-2 rounded-md" />
         <div>
             <span className="text-gray-700 font-semibold">Non negotiable of 20%</span>
          <p>Downpayment</p>
         </div>
        </li>
        <li className="flex items-center gap-3">
         <CheckCircle className="w-10 h-10 t border-1 p-2 rounded-md" />
          <div>
            <span className="text-gray-700 font-semibold">No cancellation a day prior</span>
            <p>Cancellation</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="w-10 h-10 t border-1 p-2 rounded-md" />
          <div>
            <span className="text-gray-700 font-semibold ">₱500 a week prior</span>
            <p>Cancellation Fee</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  {/* Gallery Section */}
  <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-5 gap-4">
        <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />

          <Image
        src="/images/cake.png"
        alt="Gallery"
        width={200}
        height={200}
        className="w-full  object-contain rounded-lg"
        />
   
  </div>
</div>
    )
}