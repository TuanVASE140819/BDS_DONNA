import { Check } from "lucide-react";

interface PropertyFeaturesProps {
  features: string[];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Tiện ích</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0 h-5 w-5 text-primary">
              <Check className="h-5 w-5" />
            </div>
            <span className="ml-3">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
