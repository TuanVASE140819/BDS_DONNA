import Image from "next/image";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function PropertyContact() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Liên hệ người bán</h2>

      <div className="flex items-center mb-6">
        <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
          <Image
            src="/images/properties/Luxury.webp"
            alt="Agent"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">Nguyễn Văn A</h3>
          <p className="text-sm text-muted-foreground">
            Chuyên viên tư vấn BĐS
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <Button className="w-full">
          <Phone className="mr-2 h-4 w-4" />
          Gọi ngay
        </Button>
        <Button variant="outline" className="w-full">
          <MessageCircle className="mr-2 h-4 w-4" />
          Nhắn tin
        </Button>
        <Button variant="outline" className="w-full">
          <Calendar className="mr-2 h-4 w-4" />
          Đặt lịch xem nhà
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Để lại thông tin liên hệ</h3>
        <Input placeholder="Họ tên" />
        <Input placeholder="Số điện thoại" type="tel" />
        <Input placeholder="Email" type="email" />
        <Textarea placeholder="Tin nhắn" rows={3} />
        <Button className="w-full">Gửi thông tin</Button>
      </div>
    </div>
  );
}
