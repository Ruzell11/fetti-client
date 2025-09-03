"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, User, Briefcase } from "lucide-react";
import Footer from "../modules/components/Footer";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export default function Signup() {
    const [isEventPlanner, setIsEventPlanner] = useState<boolean>(true);
    const [step, setStep] = useState<number>(1); // 🔑 track step
    const [email, setEmail] = useState<string>("juan@company.com");
    const [otp, setOtp] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([])


    
  const services = ["Photography", "Catering", "Makeup", "Videography", "Decoration"]

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

    const handleRoleSelect = (role: "event" | "supplier") => {
        setIsEventPlanner(role === "event");
    };

    const handleNextStep = () => {
        setStep((prev) => {
            // Mock logic for step 2
            if(isEventPlanner){
                if (prev === 2) {
                const isEventSuccess = Math.random() > 0.5; // mock success/fail randomly

                if (isEventSuccess) {
                    // Redirect to dashboard
                    window.location.href = "/dashboard";
                    return prev; // prevent step increment since we redirect
                } else {
                    // If fail, go to step 3
                    return 3;
                }
            }

            }else {
                 window.location.href = "/suppliers";
            }
            // Default: just go to next step
            return prev + 1;
        });
    };

    const handlePrevStep = () => setStep((prev) => prev - 1);

    return (
        <section>
            <div className="min-h-screen flex items-center justify-center bg-white px-6">
                <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">
                    {/* Left Stepper */}
                    {/* Left Stepper */}
                    <Card className="p-6">
                        <CardContent>
                            <h2 className="text-2xl font-bold">Get Started!</h2>
                            <p className="text-sm text-gray-500">
                                Just a few quick steps and you’re in.
                            </p>

                            <div className="relative mt-6 flex flex-col gap-8">
                                {/* Vertical line */}
                                <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-pink-500"></div>

                                {/* Step 1 */}
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex items-start gap-4 text-left"
                                >
                                    <div
                                        className={`relative z-10 p-3 rounded-full ${step >= 1 ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"
                                            }`}
                                    >
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Account Info</h3>
                                        <p className="text-sm text-gray-500">
                                            Choose role & provide details
                                        </p>
                                    </div>
                                </button>

                                {/* Step 2 */}
                                <button
                                    onClick={() => setStep(2)}
                                    className="flex items-start gap-4 text-left"
                                >
                                    <div
                                        className={`relative z-10 p-3 rounded-full ${step >= 2 ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"
                                            }`}
                                    >
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email Verification</h3>
                                        <p className="text-sm text-gray-500">
                                            Verify your email to continue
                                        </p>
                                    </div>
                                </button>

                                {/* Step 3 (only if Creative Supplier) */}
                                {!isEventPlanner && (
                                    <button
                                        onClick={() => setStep(3)}
                                        className="flex items-start gap-4 text-left"
                                    >
                                        <div
                                            className={`relative z-10 p-3 rounded-full ${step >= 3 ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"
                                                }`}
                                        >
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Complete Profile</h3>
                                            <p className="text-sm text-gray-500">
                                                Set up your role as creative vendor
                                            </p>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </CardContent>
                    </Card>


                    {/* Right Side Content */}
                    <div className="p-6 border-0">
                        <CardContent className="flex flex-col gap-6">
                            {step === 1 && (
                                <>
                                    <div>
                                        <h2 className="text-2xl font-bold text-center">Sign up</h2>
                                        <p className="text-sm text-gray-500 text-center">
                                            Awesome seeing you here!
                                        </p>
                                    </div>

                                    {/* Account Selection */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => handleRoleSelect("event")}
                                            className={`cursor-pointer border rounded-lg overflow-hidden flex items-center gap-3 p-3 hover:border-pink-600 ${isEventPlanner && "ring-2 ring-pink-600"
                                                }`}
                                        >
                                            <Image
                                                src="/images/event-planner.png"
                                                alt="Event Planner"
                                                width={48}
                                                height={48}
                                                className="h-12 w-12 object-cover rounded-md"
                                            />
                                            <span className="text-sm font-medium whitespace-nowrap">
                                                Event Planner
                                            </span>
                                        </button>

                                        <button
                                            onClick={() => handleRoleSelect("supplier")}
                                            className={`cursor-pointer border rounded-lg overflow-hidden flex items-center gap-3 p-3 hover:border-pink-600 ${!isEventPlanner && "ring-2 ring-pink-600"
                                                }`}
                                        >
                                            <Image
                                                src="/images/creative-supplier.png"
                                                alt="Creative Supplier"
                                                width={48}
                                                height={48}
                                                className="h-12 w-12 object-cover rounded-md"
                                            />
                                            <span className="text-sm font-medium whitespace-nowrap">
                                                Creative Supplier
                                            </span>
                                        </button>
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="email"
                                                placeholder="E.g juan@company.com"
                                                className="pl-10"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="password">Password *</Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                type="password"
                                                id="password"
                                                placeholder="Create password"
                                                className="pl-10"
                                            />
                                        </div>
                                    </div>

                                    {/* Terms */}
                                    <div className="flex items-center gap-2 text-sm">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">
                                            By signing up, you agree with our{" "}
                                            <a href="#" className="text-pink-600 hover:underline">
                                                Terms & Conditions
                                            </a>
                                        </label>
                                    </div>

                                    <Button onClick={handleNextStep} className="bg-pink-600 hover:bg-pink-700 w-full">
                                        Continue →
                                    </Button>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div>
                                        <h2 className="text-2xl font-bold text-center">Verify your email</h2>
                                        <p className="text-sm text-gray-500 text-center mt-2">
                                            We have sent a verification code to <span className="font-semibold">{email}</span>
                                            <br />
                                            Please check your inbox and input the code below to activate your account.
                                        </p>
                                    </div>

                                    {/* OTP Input */}
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="otp">OTP Code</Label>
                                        <Input
                                            id="otp"
                                            placeholder="Enter verification code"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>

                                    <Button onClick={handleNextStep} className="bg-pink-600 hover:bg-pink-700 w-full">
                                        Verify →
                                    </Button>

                                    <p className="text-sm text-center text-gray-600">
                                        Didn’t receive the code?{" "}
                                        <button className="text-pink-600 hover:underline">Resend</button>
                                    </p>

                                    <Button variant="outline" onClick={handlePrevStep}>
                                        ← Back
                                    </Button>
                                </>
                            )}

                            {step === 3 && (
                               <>
  <div>
    <h2 className="text-2xl font-bold text-center">Profile Setup</h2>
    <p className="text-sm text-gray-500 text-center">
      Great! Now let’s finish setting up your account.
    </p>
  </div>

  {/* Example service setup */}
  <div className="flex flex-col gap-2">
        <Label>Your Service</Label>
        <div className="grid grid-cols-3 gap-3">
          {services.map((service) => (
            <div
              key={service}
              onClick={() => toggleService(service)}
              className={cn(
                "cursor-pointer rounded-md border px-4 py-2 text-center text-sm font-medium transition",
                selectedServices.includes(service)
                  ? "border-pink-600 ring-1 ring-pink-600"
                  : "border-gray-300 hover:border-gray-400"
              )}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

  <Button className="bg-pink-600 hover:bg-pink-700 w-full mt-4">
    Finish →
  </Button>
</>
                            )}
                        </CardContent>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
