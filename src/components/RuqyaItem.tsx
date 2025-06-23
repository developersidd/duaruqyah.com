import { getSubCategories } from "@/api/subCategories.api";
import { Category } from "@/types/index.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type RuqyaItemProps = {
  category: Category;
};

const RuqyaItem: FC<RuqyaItemProps> = async ({
  category,
}) => {
  const { id, cat_name_bn, no_of_subcat,  cat_icon, cat_id } =
    category || {};
  const { data: subcategories } = (await getSubCategories(cat_id + "")) || {};
  const firstSubCatId = subcategories?.[0]?.subcat_id || 1;
  return (
    <Link href={`/categories/dua?cat_id=${cat_id}&subcat_id=${firstSubCatId}`} >
      
<div className="rounded-[15px] border p-2 md:p-[10px]">
  <div className="flex items-center gap-3 2xl:gap-[15px]">
    <div className="bg-[#292D320D] p-3 rounded-xl min-w-max">
      <Image
        className="size-[34px] 2xl:size-[36px]"
        src={`/assets/icons/${cat_icon}.svg`}
        width={30}
        height={30}
        alt={"icon"}
        />
    </div>
    <div>
      <h3 className=" 2xl:text-base font-semibold">{cat_name_bn}</h3>
      <small className="text-gray-500">
        সাবক্যাটাগরিঃ {no_of_subcat}
      </small>
    </div>
  </div>
</div>
    </Link>
  );
};

export default RuqyaItem;
