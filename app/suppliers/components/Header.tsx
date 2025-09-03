import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Camera } from "lucide-react";
import Image from 'next/image';

export default function HeaderSupplier(){
    return (
        <>
        
              {/* Banner */}
              <div className="relative w-full h-60 bg-gray-200">
                <Image
                  src="/images/banner.png"
                  alt="Banner"
                  fill
                  className="w-full h-full object-cover rounded-xl"
                />
        
                {/* Profile Section */}
             
        <div className="absolute -bottom-18 left-8 flex items-end gap-4">
          {/* Profile Image */}
          <div className="relative">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full ring-4 ring-white object-cover"
            />
            
            <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md cursor-pointer">
              <Camera className="w-4 h-4 text-black" />
            </button>
          </div>
        
        
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Cake Tralalas</h2>
        
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="text-gray-600 text-sm">4.7</span>
              <p className="text-gray-500 text-sm">📍 Cavite, Philippines</p>
            </div>
          </div>
        </div>
        
                <div className="absolute -bottom-22 right-8">
                  <Button variant="secondary">Edit Profile</Button>
                </div>
              </div>
        
        </>
    )
}