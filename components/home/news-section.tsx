import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function NewsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Tin Tức & Xu Hướng
            </h2>
            <p className="text-muted-foreground">
              Cập nhật thông tin mới nhất về thị trường bất động sản
            </p>
          </div>
          <Button variant="outline">Xem tất cả</Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/properties/Luxury.webp"
                  alt={`Tin tức bất động sản ${item}`}
                  width={400}
                  height={200}
                  className="aspect-video object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    Thị trường
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    12/05/2023
                  </span>
                </div>
                <CardTitle className="line-clamp-2 mt-2 text-lg">
                  Thị trường bất động sản phía Nam dự báo sôi động trong quý
                  3/2023
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  Theo các chuyên gia, thị trường bất động sản phía Nam đang có
                  dấu hiệu phục hồi mạnh mẽ sau thời gian trầm lắng. Nhiều dự án
                  mới được mở bán với chính sách ưu đãi hấp dẫn...
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="link" className="px-0">
                  Đọc tiếp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
