import { FC } from "react";

interface InterfaceTitlePorps {
  title: string;
  isCenter: boolean;
  width: number;
}

const TitleComponent: FC<InterfaceTitlePorps> = ({
  title,
  width,
  isCenter,
}) => {
  return (
    <section
      className={`flex flex-col ${isCenter ? "justify-center" : "justify-start"}`}
    >
      <div className="block">
        <span className="font-[800] leading-[35px] lg:leading-[50px] text-clamp-45 text-[#ffffff]">
          {title}
        </span>

        <div
          className="my-[20px] h-[5px] bg-[#ffffff] rounded-sm"
          style={{
            width: `${width}px`,
          }}
        />
      </div>
    </section>
  );
};

export default TitleComponent;
