import { Bell, MessageSquare } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function SupplierNavbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white ">
      {/* Left Section - Logo + Menu */}
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold text-pink-600">
             <img src="/fetti-logo.svg" alt="Logo" />
        </div>
      
      </div>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <li className="hover:text-pink-600 cursor-pointer">My Business</li>
          <li className="hover:text-pink-600 cursor-pointer">Services</li>
          {/* <li className="hover:text-pink-600 cursor-pointer">Calendar</li> */}
          <li className="hover:text-pink-600 cursor-pointer">Delivery</li>
          {/* <li className="hover:text-pink-600 cursor-pointer">For Approval</li> */}
          <li className="hover:text-pink-600 cursor-pointer">Wallet</li>
          {/* <li className="hover:text-pink-600 cursor-pointer">Discount</li>
          <li className="hover:text-pink-600 cursor-pointer">History</li>
          <li className="hover:text-pink-600 cursor-pointer">Review</li>
          <li className="hover:text-pink-600 cursor-pointer">Analytics</li> */}
        </ul> 

      {/* Right Section - Icons + Profile */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600 hover:text-pink-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-600"></span>
        </button>
        <button>
          <MessageSquare className="w-5 h-5 text-gray-600 hover:text-pink-600" />
        </button>
        <Avatar className="w-9 h-9 ring-2 ring-pink-600">
          <AvatarImage src="/user.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
