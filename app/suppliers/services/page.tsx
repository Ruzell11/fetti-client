'use client'
import { useState } from "react";
import SupplierNavbar from "@/app/modules/components/SupplierNavbar";
import Services from "../components/Services";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Footer from "@/app/modules/components/Footer";

export default function SupplierServices() {
  const [view, setView] = useState("grid");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const serviceTypes = ["Cleaning", "Consulting", "Delivery", "Photography", "Catering"];

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <>
      <SupplierNavbar />

      <section className="mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">My Services</h3>
            <p className="text-gray-600 mt-1">
              You currently have <span className="font-medium text-primary">3</span> services
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Add Service Trigger */}
           <Dialog>
  <DialogTrigger asChild>
    <Button className="rounded-lg px-4 py-2 text-sm" variant="secondary">
      + Add Service
    </Button>
  </DialogTrigger>

<DialogContent className="w-11/12 sm:max-w-xl">
    {/* Close X button */}
    <DialogClose asChild>
      <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        ✕
      </button>
    </DialogClose>

    <DialogHeader className="mb-1">
      <DialogTitle>Add Service</DialogTitle>
    </DialogHeader>

    {/* Service Types */}
    <div className="mt-4">
      <label className="block text-gray-700 mb-2">Type of Service</label>
      <div className="flex flex-wrap gap-2">
        {serviceTypes.map((type) => {
          const selected = selectedTypes.includes(type);
          return (
            <button
              key={type}
              type="button"
              onClick={() => toggleType(type)}
              className={`px-4 py-2 rounded-full border font-medium ${
                selected
                  ? "text-pink-500 border-pink-500"
                  : "border-1 text-gray-700 border-gray-300"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>

    {/* Actions */}
    <div className="mt-6 flex justify-end space-x-2">
      <DialogClose asChild>
        <Button
          variant="outline"
          onClick={() => setSelectedTypes([])}
        >
          Cancel
        </Button>
      </DialogClose>
      <DialogClose asChild>
        <Button
          onClick={() => console.log("Selected Types:", selectedTypes)}
        >
          Save
        </Button>
      </DialogClose>
    </div>
  </DialogContent>
</Dialog>


            <Button
              variant={view === "table" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setView("table")}
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setView("grid")}
            >
              <Grid className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Services List */}
        <div className="bg-white">
          <Services view={view} />
        </div>
      </section>

      <Footer/>
    </>
  );
}
