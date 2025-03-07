"use client";

import { useState } from "react";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";

export function PropertyMap() {
  const [view, setView] = useState("map");

  return (
    <div>
      <Tabs value={view} onValueChange={setView} className="mb-4">
        <TabsList>
          <TabsTrigger value="map">Bản đồ</TabsTrigger>
          <TabsTrigger value="street">Street View</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.125280904304!2d106.7192!3d10.7944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzQwLjAiTiAxMDbCsDQzJzA5LjEiRQ!5e0!3m2!1svi!2s!4v1629781234567!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div>
          <h3 className="font-medium text-sm mb-1">Giao thông</h3>
          <p className="text-muted-foreground text-sm">
            5 phút đi bộ đến xe bus
          </p>
        </div>
        <div>
          <h3 className="font-medium text-sm mb-1">Giáo dục</h3>
          <p className="text-muted-foreground text-sm">
            Gần trường học quốc tế
          </p>
        </div>
        <div>
          <h3 className="font-medium text-sm mb-1">Y tế</h3>
          <p className="text-muted-foreground text-sm">2km đến bệnh viện</p>
        </div>
      </div>
    </div>
  );
}
