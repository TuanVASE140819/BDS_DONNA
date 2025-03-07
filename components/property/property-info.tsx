import { Home, Bed, Bath, Square, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PropertyInfoProps {
  property: {
    id: string;
    title: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    address: string;
    description: string;
    features: string[];
    createdAt: string;
    updatedAt: string;
  };
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  // Format dates
  const createdDate = new Date(property.createdAt).toLocaleDateString("vi-VN");
  const updatedDate = new Date(property.updatedAt).toLocaleDateString("vi-VN");

  return (
    <Card className="border-0 shadow-sm bg-white/50">
      <CardContent className="p-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Bed className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">Phòng ngủ</p>
              <p className="text-2xl font-bold">{property.bedrooms}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Bath className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">Phòng tắm</p>
              <p className="text-2xl font-bold">{property.bathrooms}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Square className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">Diện tích</p>
              <p className="text-2xl font-bold">{property.area} m²</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">Loại hình</p>
              <p className="text-2xl font-bold">Căn hộ</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border p-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Đăng ngày: {createdDate}</span>
            </div>
            <div>
              <span>Cập nhật: {updatedDate}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
