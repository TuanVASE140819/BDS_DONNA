import Image from "next/image";
import { MapPin, Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PropertyCard({ item }: { item: number }) {
  return (
    <Card key={item} className="overflow-hidden">
      <div className="relative">
        <Badge className="absolute left-2 top-2 z-10">Đề xuất</Badge>
        <Image
          src="/images/properties/Luxury.webp"
          alt={`Bất động sản ${item}`}
          width={400}
          height={200}
          className="aspect-video object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-lg">
          Căn hộ cao cấp tại trung tâm thành phố
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="text-sm">Quận 7, TP. Hồ Chí Minh</span>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center">
            <Home className="mr-1 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">2 PN</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <span className="text-sm">2 WC</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4 text-muted-foreground"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            <span className="text-sm">75m²</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex w-full items-center justify-between">
          <span className="font-bold text-lg text-primary">2.5 tỷ</span>
          <Button variant="outline" size="sm">
            Chi tiết
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
