"use client";
import { Dua } from "@/types/index.type";
import { FC } from "react";
import { toast } from "react-toastify";
import Icon from "../common/Icons";
type DuaActionProps = {
  dua: Dua;
};
const DuaAction: FC<DuaActionProps> = ({ dua }) => {
  const { dua_name_en, dua_indopak, translation_en, bottom_en } = dua || {};
  const handleCopyDua = () => {
    navigator.clipboard.writeText(
      `${dua_name_en} \n ${dua_indopak} \n ${translation_en} \n ${bottom_en}`
    );
  };
  //console.log(
  //  " dua",
  //  `${dua_name_en} \n ${dua_indopak} \n ${translation_en} \n ${bottom_en}`
  //);
  toast.success("Dua Copied to Clipboard");
  return (
    <div className="flex items-center gap-8">
      {/* bottomIcons */}
      <button onClick={handleCopyDua}>
        <Icon classes={"size-7"} alt={"copy-icon"} name={`copy.svg`} />
      </button>
      <button>
        <Icon classes={"size-5"} alt={"bookmark-icon"} name={`bookmark.svg`} />
      </button>
      <button>
        <Icon classes={"size-6"} alt={"memorize-icon"} name={`memorize.svg`} />
      </button>
      <button>
        <Icon classes={"size-6"} alt={"share-icon"} name={`share.svg`} />
      </button>
      <button>
        <Icon classes={"size-6"} alt={"report-icon"} name={`report.svg`} />
      </button>
    </div>
  );
};

export default DuaAction;
