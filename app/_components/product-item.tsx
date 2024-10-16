import { Prisma } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";

interface ProductItemProps {
  product: Prisma.ProductsGetPayload<{
    include: {
      restaurant: {
        select: { name: true };
      };
    };
  }>;
}

const ProductItem = async ({ product }: ProductItemProps) => {
  return (
    <div className=" w-[150px] min-w-[150px] space-y-2">
      <div className="h-[150px] w-full relative">
        <Image
          fill
          src={product.imageUrl}
          alt={product.name}
          className="object-cover rounded-lg shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 left-2 flex items-center gap-[2px] bg-primary px-2 py-[2px] rounded-full text-white opacity-85">
            <ArrowDownIcon size={12} />
            <span className="font-semibold text-xs">
              {product.discountPercentage}
            </span>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-sm truncate">{product.name}</h2>
        <div className="flex gap-1 items-center">
          <h3 className="font-semibold">
            {formatCurrency(calculateProductTotalPrice(product))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="line-through text-muted-foreground text-xs">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="text-xs text-muted-foreground block">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
