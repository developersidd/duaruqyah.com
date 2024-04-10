import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Collection from "@/components/Collection/Collection";
import DownloadApp from "@/components/DownloadApp";
import MenuItems from "@/components/MenuItems";
import RuqyaCategories from "@/components/RuqyaCategories";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <section className="!overflow-x-hidden">
        <MenuItems />
        <Collection />
        <Categories />
        <Testimonial />
        <RuqyaCategories />
        <DownloadApp />
      </section>
    </main>
  );
}
