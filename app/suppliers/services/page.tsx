'use client'
import SupplierNavbar from "@/app/modules/components/SupplierNavbar";
import Services from "../components/Services";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import { useState } from "react";

export default function SupplierServices() {
    const [view, setView] = useState("grid");
    return (
        <>
            <SupplierNavbar />

            <section className=" mx-auto px-6 py-10">
                {/* Page Header */}
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">My Services</h3>
                        <p className="text-gray-600 mt-1">
                            You currently have <span className="font-medium text-primary">3</span> services
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <Button className="rounded-lg px-4 py-2 text-sm" variant="secondary">
                            + Add Service
                        </Button>

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
        </>
    );
}
