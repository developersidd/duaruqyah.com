import Image from "next/image";

const Button = ({
  btnText,
  imgPath,
  btnClasses,
  txtClasses,
  imgClasses,
}: {
  btnText: string;
  imgPath: string;
  btnClasses?: string;
  txtClasses?: string;
  imgClasses?: string;
}) => {
  return (
    <button
      className={`${btnClasses} flex items-center gap-2 px-3 md:px-4 py-2 bg-primary-green rounded-lg border-[1.5px]   border-[#71BF8C] border-primary-light-gray`}
    >
      <span className={`text-white ${txtClasses}`}> {btnText} </span>
      <Image
        className={`size-[15px] md:size-5 ${imgClasses}`}
        src={`/assets/icons/${imgPath}.svg`}
        width={30}
        height={30}
        alt={imgPath}
      />
    </button>
  );
};

export default Button;
