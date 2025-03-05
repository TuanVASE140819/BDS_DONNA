import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/images/logo/Logo.png"
            alt="BatDongSan Logo"
            width={52}
            height={52}
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-primary">
            Trang Chủ
          </Link>
          <Link
            href="/mua-ban"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Mua Bán
          </Link>
          <Link
            href="/cho-thue"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Cho Thuê
          </Link>
          <Link
            href="/du-an"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Dự Án
          </Link>
          <Link
            href="/tin-tuc"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Tin Tức
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Đăng Nhập
          </Button>
          <Button>Đăng Tin</Button>
        </div>
      </div>
    </header>
  );
}
