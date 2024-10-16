import { ChevronRightIcon } from "lucide-react";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductList from "./_components/product-list";
import PromoBanner from "./_components/promo-banner";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import { db } from "./_lib/prisma";

const Home = async () => {
  const products = await db.products.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6 ">
        <PromoBanner
          src="/promo-banner.png"
          alt="Até 30% de desconto em pizza"
        />
      </div>

      <div className="pt-6 space-y-4">
        <div className="flex justify-between items-center px-5 ">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit text-primary p-0 hover:bg-transparent hover:text-primary hover:opacity-80"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          src="/promo-banner-02.png"
          alt="A partir de R$17,90 em lanches"
        />
      </div>
    </>
  );
};

export default Home;
