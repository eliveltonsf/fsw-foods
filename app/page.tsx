import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <Image
        src="/promo-banner.png"
        alt="Até 30% de desconto em pizza"
        height={0}
        width={0}
        className="w-full h-auto px-5 pt-6 object-contain"
        sizes="100vw"
        quality={100}
      />
    </>
  );
};

export default Home;
