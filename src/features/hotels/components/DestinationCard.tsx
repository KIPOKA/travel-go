import { Star } from "lucide-react";

interface DestinationCardProps {
  name: string;
  priceFrom: number;
  rating: number;
  imageUrl: string;
}

export function DestinationCard({
  name,
  priceFrom,
  rating,
  imageUrl,
}: DestinationCardProps) {
  return (
    <button type="button" className="group text-left">
      <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3">
        <p className="font-semibold text-slate-900">{name}</p>
        <div className="mt-1 flex items-center justify-between text-sm">
          <span className="text-slate-500">
            <span className="font-medium text-slate-700">${priceFrom}</span>{" "}
            starting
          </span>
          <span className="flex items-center gap-1 text-slate-600">
            <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </button>
  );
}
