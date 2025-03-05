import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Đăng Ký Nhận Thông Tin
            </h2>
            <p className="text-muted-foreground">
              Nhận thông tin mới nhất về bất động sản và các dự án hot
            </p>
          </div>
          <div className="mx-auto w-full max-w-md space-y-2">
            <div className="flex space-x-2">
              <Input placeholder="Email của bạn" type="email" />
              <Button type="submit">Đăng ký</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <Link href="#" className="underline underline-offset-2">
                Điều khoản dịch vụ
              </Link>{" "}
              và{" "}
              <Link href="#" className="underline underline-offset-2">
                Chính sách bảo mật
              </Link>{" "}
              của chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
