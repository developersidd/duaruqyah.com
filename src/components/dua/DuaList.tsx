import { getDuasByCategory } from "@/api/dua.api";
import { Dua } from "@/types/index.type";
import { FC } from "react";
import DuaCard from "./DuaCard";

type DuaListProps = {
  cat_id: string;
};

const DuaList: FC<DuaListProps> = async ({ cat_id }) => {
  const { data: duas, error: duasError } =
    (await getDuasByCategory(cat_id)) || {};
  // decide what to render
  let content;
  if (duasError) {
    content = <p> {duasError}</p>;
  } else if (!duas || duas?.length === 0) {
    content = <p>No duas found for this category.</p>;
  } else {
    content = duas?.map((dua: Dua) => <DuaCard key={dua.id + dua.dua_name_en} dua={dua} />);
  }
  return <div className="space-y-5 ">{content}</div>;
};

export default DuaList;
