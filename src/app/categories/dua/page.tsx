import { getCategories } from "@/api/categories.api";
import { getDuasByCategory } from "@/api/dua.api";
import Icon from "@/components/common/Icons";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DuaList from "../../../components/dua/DuaList";
import Settings from "../../../components/settting/Settings";
import Categories from "./_components/categories/Categories";

type HomeProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

const Home = async ({ searchParams }: HomeProps) => {
  const queries = await searchParams;
  const queryObject = new URLSearchParams(queries);
  const cat_id = queryObject.get("cat_id") as string;
  const { data: categories, error } = (await getCategories()) || {};
  
  return (
    <>
      <DashboardHeader>
        <div>
          <h3 className="text-[15px] text-primary-black sm:text-[20px] lg:text-xl font-semibold">
            দোয়ার ক্যাটাগরিসমূহ
          </h3>
          <div className="flex items-center gap-x-2 ">
            <h5 className="text-sm text-primary-black/60"> Dua Categories </h5>
            <Icon name="right-arrow.svg" alt="right-arrow" classes="size-4" />
            <h5 className="text-sm text-primary-black/60"> Dua Details </h5>
          </div>
        </div>
      </DashboardHeader>
      <main className="bg-secondary scroll-smooth py-5 w-[calc(100vw-85px)] px-5 grid grid-cols-[350px,1fr,300px] fixed top-[60px] right-0 gap-x-7 gap-y-5 rounded-l-xl bg-[#F5F5F5] border  border-[#292D320D]">
        <section className="h-[calc(100vh-100px)] w-full  bg-white px-2 py-3 rounded-xl">
          <Categories searchParams={queryObject} categories={categories} />
        </section>

        <section className="h-[calc(100vh-100px)] w-full overflow-y-auto scrollbar-hide ">
          <DuaList cat_id={cat_id} />
        </section>

        <section className="h-[calc(100vh-100px)]">
          <Settings />
        </section>
      </main>
    </>
  );
};
export default Home;
