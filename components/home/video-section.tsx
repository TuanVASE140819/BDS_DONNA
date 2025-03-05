import Image from "next/image";
import { MapPin, Play, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function VideoSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Video & Livestream HOT
            </h2>
            <p className="text-muted-foreground">
              Khám phá bất động sản qua video và livestream
            </p>
          </div>
          <Button variant="outline">Xem tất cả</Button>
        </div>

        {/* Grid layout cho TikTok style cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden border-0 shadow-lg">
              <div className="relative aspect-[9/16] w-full">
                {/* Hiển thị badge HOT */}
                <Badge
                  className="absolute right-2 top-2 z-10"
                  variant="destructive"
                >
                  HOT
                </Badge>

                {/* Nút play giữa video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-black/50 p-3">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Ảnh thumbnail video với aspect ratio của TikTok */}
                <Image
                  src="/images/properties/Luxury.webp"
                  alt={`Video bất động sản ${item}`}
                  fill
                  className="object-cover rounded-lg"
                />

                {/* Overlay gradient từ dưới lên để text dễ đọc */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Thông tin địa điểm ở dưới cùng */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span className="text-xs font-medium">
                      Bình Thạnh, TP. HCM
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Thông tin người đăng */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/properties/Luxury.webp"
                      alt={`Avatar môi giới ${item}`}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Môi giới BDS</p>
                    <p className="text-xs text-muted-foreground">
                      @moigioi{item}
                    </p>
                  </div>
                </div>

                {/* Tiêu đề video */}
                <CardTitle className="line-clamp-2 text-base">
                  Tham quan căn hộ mẫu dự án Vinhomes Central Park #{item}
                </CardTitle>

                {/* Các tag */}
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline">Căn hộ</Badge>
                  <Badge variant="outline">Dự án</Badge>
                </div>
              </CardContent>

              {/* Nút tương tác kiểu TikTok */}
              <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <span className="text-xs">
                    {Math.floor(Math.random() * 100) + 10}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <span className="text-xs">
                    {Math.floor(Math.random() * 20) + 1}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
