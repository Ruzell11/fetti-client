"use client";

import { useState } from "react";
import Feed from "./Feed";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { List, Grid } from "lucide-react";
import Services from "./Services";

export default function SupplierTabs() {
  const [activeTab, setActiveTab] = useState("feed");
  const [view, setView] = useState("grid");

  return (
    <div className="mt-24 p-8">
      {/* Tabs */}
      <div className="flex justify-between items-center border-b border-gray-200">
        <div className="flex">
          {["feed", "services"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 capitalize text-gray-600 font-medium relative
                ${activeTab === tab ? "text-pink-500" : ""}
              `}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right side controls (only for services tab) */}
        {activeTab === "services" && (
          <div className="flex items-center space-x-3">
            <Button variant="secondary">
              Manage Service
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
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "feed" && <Feed />}

        {activeTab === "services" && (
             <div className="mt-6 flex gap-8 items-start">
            <Card className="max-w-1/4  p-6">

              <div className="flex gap-8 justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold ">8</span>
                  <p className="text-sm text-gray-600">Services</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold 0">24</span>
                  <p className="text-sm text-gray-600">Items</p>
                </div>
              </div>

              <div>
                <p className="text-base font-medium text-gray-700">Services</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                    Haircut
                  </span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                    Hair Color
                  </span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                    Styling
                  </span>
                </div>
              </div>

            </Card>
          <Services view={view}/>
          </div>
        )}
{/* 
        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Reviews</h3>
            <p className="text-gray-600">Customer reviews will appear here.</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
