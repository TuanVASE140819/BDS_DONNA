import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PropertyRecommendations() {
  const properties = [
    {
      id: "1",
      slug: "can-ho-vinhomes-1",
      title: "Căn hộ cao cấp Vinhomes Central Park",
      address: "Quận Bình Thạnh, TP. HCM",
      price: 2300000000,
      bedrooms: 2,
      bathrooms: 2,
      area: 70,
    },
    {
      id: "2",
      slug: "can-ho-vinhomes-2",
      title: "Căn hộ view đẹp Vinhomes Central Park",
      address: "Quận Bình Thạnh, TP. HCM",
      price: 2700000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 85,
    },
    {
      id: "3",
      slug: "can-ho-vinhomes-3",
      title: "Studio Vinhomes Central Park",
      address: "Quận Bình Thạnh, TP. HCM",
      price: 1800000000,
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden">
          <div className="relative">
            <Image
              src="/images/properties/Luxury.webp"
              alt={property.title}
              width={400}
              height={200}
              className="aspect-video object-cover w-full"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold line-clamp-2">{property.title}</h3>
            <div className="flex items-center text-muted-foreground mt-2">
              <MapPin className="mr-1 h-4 w-4" />
              <span className="text-sm">{property.address}</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center">
                <Bed className="mr-1 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.bedrooms} PN</span>
              </div>
              <div className="flex items-center">
                <Bath className="mr-1 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.bathrooms} WC</span>
              </div>
              <div className="flex items-center">
                <Square className="mr-1 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.area}m²</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex w-full items-center justify-between">
              <span className="font-bold text-primary">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(property.price)}
              </span>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/mua-ban/${property.slug}`}>Chi tiết</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
