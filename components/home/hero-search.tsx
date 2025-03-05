import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HeroSearch() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banners/banner.webp"
          alt="Real Estate Banner"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay để đảm bảo text đọc được rõ trên background */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Tìm Kiếm Bất Động Sản Mơ Ước
          </h1>
          <p className="max-w-[700px] text-white/90 md:text-xl">
            Khám phá hàng ngàn bất động sản chất lượng cao với đầy đủ thông tin
            và hình ảnh chi tiết.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-xl bg-white p-4 shadow-lg">
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="buy">Mua Bán</TabsTrigger>
              <TabsTrigger value="rent">Cho Thuê</TabsTrigger>
              <TabsTrigger value="project">Dự Án</TabsTrigger>
            </TabsList>
            <TabsContent value="buy" className="space-y-4">
              <SearchFields type="buy" />
            </TabsContent>
            <TabsContent value="rent" className="space-y-4">
              <SearchFields type="rent" />
            </TabsContent>
            <TabsContent value="project" className="space-y-4">
              <SearchFields type="project" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function SearchFields({ type }: { type: "buy" | "rent" | "project" }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Địa điểm" className="pl-10" />
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Loại hình" />
        </SelectTrigger>
        <SelectContent>
          {type === "buy" && (
            <>
              <SelectItem value="apartment">Căn hộ</SelectItem>
              <SelectItem value="house">Nhà riêng</SelectItem>
              <SelectItem value="villa">Biệt thự</SelectItem>
              <SelectItem value="land">Đất nền</SelectItem>
            </>
          )}
          {type === "rent" && (
            <>
              <SelectItem value="apartment">Căn hộ</SelectItem>
              <SelectItem value="house">Nhà riêng</SelectItem>
              <SelectItem value="villa">Biệt thự</SelectItem>
              <SelectItem value="office">Văn phòng</SelectItem>
            </>
          )}
          {type === "project" && (
            <>
              <SelectItem value="residential">Khu dân cư</SelectItem>
              <SelectItem value="commercial">Thương mại</SelectItem>
              <SelectItem value="industrial">Khu công nghiệp</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue
            placeholder={type === "project" ? "Trạng thái" : "Khoảng giá"}
          />
        </SelectTrigger>
        <SelectContent>
          {type === "buy" && (
            <>
              <SelectItem value="1">Dưới 1 tỷ</SelectItem>
              <SelectItem value="2">1 - 2 tỷ</SelectItem>
              <SelectItem value="3">2 - 3 tỷ</SelectItem>
              <SelectItem value="4">3 - 5 tỷ</SelectItem>
              <SelectItem value="5">Trên 5 tỷ</SelectItem>
            </>
          )}
          {type === "rent" && (
            <>
              <SelectItem value="1">Dưới 5 triệu</SelectItem>
              <SelectItem value="2">5 - 10 triệu</SelectItem>
              <SelectItem value="3">10 - 15 triệu</SelectItem>
              <SelectItem value="4">15 - 20 triệu</SelectItem>
              <SelectItem value="5">Trên 20 triệu</SelectItem>
            </>
          )}
          {type === "project" && (
            <>
              <SelectItem value="upcoming">Sắp mở bán</SelectItem>
              <SelectItem value="selling">Đang mở bán</SelectItem>
              <SelectItem value="completed">Đã hoàn thành</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
      <Button className="w-full">
        <Search className="mr-2 h-4 w-4" />
        Tìm Kiếm
      </Button>
    </div>
  );
}
