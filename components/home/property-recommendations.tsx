import { Button } from "@/components/ui/button";
import { PropertyCard } from "./property-card";

export function PropertyRecommendations() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Đề Xuất Theo AI
            </h2>
            <p className="text-muted-foreground">
              Bất động sản phù hợp với nhu cầu của bạn
            </p>
          </div>
          <Button variant="outline">Xem tất cả</Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <PropertyCard key={item} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
