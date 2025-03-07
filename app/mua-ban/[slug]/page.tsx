import { Metadata } from "next";
import Link from "next/link";
import { PropertyGallery } from "@/components/property/property-gallery";
import { PropertyInfo } from "@/components/property/property-info";
import { PropertyFeatures } from "@/components/property/property-features";
import { PropertyMap } from "@/components/property/property-map";
import { PropertyContact } from "@/components/property/property-contact";
import { LoanCalculator } from "@/components/property/loan-calculator";
import { PropertyRecommendations } from "@/components/property/property-recommendations";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Trong thực tế, bạn sẽ lấy dữ liệu từ API dựa trên slug
  return {
    title: "Căn hộ cao cấp Vinhomes Central Park, Quận Bình Thạnh",
    description:
      "Căn hộ 2 phòng ngủ 75m² tại Vinhomes Central Park, với đầy đủ tiện nghi và tiện ích cao cấp",
  };
}

export default function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Mock data - trong thực tế sẽ được lấy từ API
  const property = {
    id: "1",
    title: "Căn hộ cao cấp Vinhomes Central Park, Quận Bình Thạnh",
    price: 2500000000,
    area: 75,
    bedrooms: 2,
    bathrooms: 2,
    address: "Vinhomes Central Park, Bình Thạnh, TP. Hồ Chí Minh",
    description:
      "Căn hộ cao cấp tại Vinhomes Central Park với view sông tuyệt đẹp. Thiết kế hiện đại, đầy đủ tiện nghi và tiện ích cao cấp như hồ bơi, gym, spa...",
    features: [
      "Ban công rộng",
      "View sông",
      "Nội thất cao cấp",
      "An ninh 24/7",
      "Hồ bơi",
      "Phòng gym",
    ],
    createdAt: "2023-05-12T00:00:00.000Z",
    updatedAt: "2023-05-15T00:00:00.000Z",
  };

  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          Trang chủ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/mua-ban" className="hover:text-primary">
          Mua bán
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Chi tiết</span>
      </div>

      {/* Title and Price */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
          <p className="text-muted-foreground">{property.address}</p>
        </div>
        <div className="mt-4 lg:mt-0 text-xl md:text-2xl font-bold text-primary">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(property.price)}
        </div>
      </div>

      {/* Main content and sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery */}
          <PropertyGallery />

          {/* Property Info */}
          <PropertyInfo property={property} />

          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Mô tả</h2>
            <div className="prose max-w-none">
              <p>{property.description}</p>
            </div>
          </div>

          {/* Features */}
          <PropertyFeatures features={property.features} />

          {/* Map */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Vị trí</h2>
            <PropertyMap />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Form */}
          <PropertyContact />

          {/* Loan Calculator */}
          <LoanCalculator price={property.price} />
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Bất động sản tương tự</h2>
        <PropertyRecommendations />
      </div>
    </div>
  );
}
