import Icon from "@/components/common/Icons";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DuaList from "../../../components/dua/DuaList";
import Settings from "../../../components/settting/Settings";
import Categories from "./_components/categories/Categories";

export default function Home() {
  return (
    <>
      <DashboardHeader>
        <div>
          <h3 className="text-[15px] text-primary-black sm:text-[20px] lg:text-xl font-semibold">
            দোয়ার ক্যাটাগরিসমূহ
          </h3>
          <div className="flex items-center gap-x-2 ">
            <h5 className="text-sm text-primary-black/60"> Dua Categories </h5>
            <h5 className="text-sm text-primary-black/60">
              {" "}
              Dua Categories{" "}
            </h5>{" "}
            <Icon name="right-arrow.svg" alt="right-arrow" classes="size-4" />
            <h5 className="text-sm text-primary-black/60"> Dua Details </h5>
          </div>
        </div>
      </DashboardHeader>
      <main className="bg-secondary scroll-smooth py-14 w-[calc(100vw-85px)] px-10 grid grid-cols-[350px,1fr,300px] fixed top-[60px] right-0 gap-x-7 gap-y-5 rounded-l-xl bg-[#F5F5F5] border  border-[#292D320D]">
        <section className="h-[calc(100vh-146px)] w-full  bg-white">
          <Categories />
        </section>

        <section className="h-[calc(100vh-100px)] overflow-y-auto pb-12 w-[calc(100vw-915px)]">
          <DuaList />
        </section>

        <section className="h-[calc(100vh-146px)]">
          <Settings />
        </section>
      </main>
    </>
  );
}
