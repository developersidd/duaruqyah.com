import CollectionItem from "./CollectionItem";
const LastRedDuas = () => {
  return (
    <div className="flex flex-row 2xl:items-center 2xl:justify-center gap-5 overflow-x-scroll scrollbar-hide whitespace-nowrap">
      {Array.from(Array(5).keys()).map((item, index) => (
        <CollectionItem
          key={item}
          item={{
            title: "দোয়ার গুরুত্ব",
            icon: "watch.svg",
          }}
        />
      ))}
    </div>
  );
};

export default LastRedDuas;
