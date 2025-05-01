import { getCategories } from "@/api/categories.api";
import Banner from "@/components/Banner";
import Collection from "@/components/Collection/Collection";
import DownloadApp from "@/components/DownloadApp";
import DuaCategories from "@/components/DuaCategories";
import MenuItems from "@/components/MenuItems";
import RuqyaCategories from "@/components/RuqyaCategories";
import Testimonial from "@/components/Testimonial";

const Home = async () => {
  const { data, error } = (await getCategories()) || {};
  return (
    <main className="">
      <Banner />
      <section className="!overflow-x-hidden">
        <MenuItems />
        <Collection />
        <DuaCategories categories={data} />
        <Testimonial />
        <RuqyaCategories categories={data} />
        <DownloadApp />
      </section>
    </main>
  );
};

export default Home;
