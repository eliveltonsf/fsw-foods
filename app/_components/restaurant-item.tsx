import { Restaurant } from "@prisma/client";
import { BikeIcon, Heart, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface ProductItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = async ({ restaurant }: ProductItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-3">
      <div className="w-full h-[136px] relative">
        <Image
          src={restaurant.imageUrl}
          fill
          className="rounded-lg object-cover"
          alt={restaurant.name}
        />

        <div className="absolute top-2 left-2 flex items-center gap-[2px] b px-2 py-[2px] rounded-full bg-white opacity-85">
          <StarIcon size={12} className="fill-yellow-500 text-yellow-500" />
          <span className="font-semibold text-xs">5.0</span>
        </div>

        <Button className="absolute right-2 top-2 h-7 w-7 flex items-center gap-[2px] b px-2 py-[2px] rounded-full bg-gray-700 opacity-80">
          <Heart size={12} className="fill-white text-white" />
        </Button>
      </div>
      <div className="">
        <h3 className="font-semibold text-sm">{restaurant.name}</h3>
        <div className="flex gap-3 ">
          <div className="flex gap-1 items-center">
            <BikeIcon className="text-primary  items-center" size={12} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <TimerIcon className="text-primary  items-center" size={14} />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
