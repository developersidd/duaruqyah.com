import { getCategories } from "@/api/categories.api";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DuaCategoryList from "@/components/DuaCategoryList";
import { FC } from "react";
import SearchDuaRuqya from "./_components/SearchDuaRuqya";

type DashboardHomePageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

const DashboardHomePage: FC<DashboardHomePageProps> = async ({
  searchParams,
}) => {
  const { data, error } = (await getCategories()) || {};
  const queries = await searchParams;
  const queryObj = new URLSearchParams(queries);
  return (
    <div className="">
      <DashboardHeader>
        <div>
          <h3 className="text-[15px] text-primary-black sm:text-[20px] lg:text-xl font-semibold">
            দোয়ার ক্যাটাগরিসমূহ
          </h3>
          <h5 className="text-sm text-primary-black/60"> Dua Categories </h5>
        </div>
        <SearchDuaRuqya />
      </DashboardHeader>
      <div className="mb-10 w-[calc(100vw-85px)] fixed  right-0 min-h-[calc(100vh-60px)] p-5 rounded-tl-lg bg-[#F5F5F5] border  border-[#292D320D]">
        <DuaCategoryList isShowAll categories={data} />
      </div>
    </div>
  );
};

export default DashboardHomePage;
