import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = async ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white shadow-md rounded-full mb-3">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={20}
        width={20}
        className="max-w-96"
      />
      <span className="font-semibold text-sm">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
