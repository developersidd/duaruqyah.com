import CollectionItem from "./CollectionItem";

const BookMarks = () => {
  return (
    <div className="flex flex-row 2xl:items-center 2xl:justify-center gap-5 overflow-x-scroll scrollbar-hide whitespace-nowrap">
      {Array.from(Array(5).keys()).map((item, index) => (
        <CollectionItem
          key={item}
          item={{
            title: "Book Marks",
            icon: "bookmark.svg",
          }}
        />
      ))}
    </div>
  );
};

export default BookMarks;
