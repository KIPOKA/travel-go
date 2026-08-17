import { useState } from "react";
import { Star } from "lucide-react";

interface DestinationCardProps {
  name: string;
  priceFrom: number;
  rating: number;
  imageUrl: string;
}

function DestinationCard({
  name,
  priceFrom,
  rating,
  imageUrl,
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full cursor-pointer overflow-hidden rounded-[1.75rem] shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`h-96 w-full object-cover transition-transform duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>

          <p className="mt-1 text-sm font-medium text-white/80">
            From ${priceFrom.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm">
          <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />

          <span className="text-sm font-semibold text-white">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
