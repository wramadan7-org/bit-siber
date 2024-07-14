import NavbarComponent from "../../components/navbar/NavbarComponent";
import HeaderVideo from "../../assets/videos/Y2meta.app-Smart City Digital City Video-(1080p).mp4";
import TitleComponent from "../../components/titles/TitleComponent";
import { MdKeyboardArrowDown } from "react-icons/md";

const HomePage = () => {
  document.title = "BIT Siber";
  return (
    <section>
      <section className="relative min-h-[686px]">
        <div className="w-full min-h-[686px] absolute z-10 bg-gray-950 opacity-[0.6]" />

        <video
          src={HeaderVideo} // Path to your video file
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover object-center"
        />

        <div className="sticky top-0 bg-transparent z-30">
          <NavbarComponent />
        </div>

        <div className="absolute flex flex-col gap-5 items-start z-20 max-w-[582px] w-full top-1/2 left-48 -translate-y-1/2">
          <div>
            <TitleComponent
              title="Provides convenience in every activity and time efficiency"
              width={82}
              isCenter={false}
            />

            <span className="font-[400] text-[18px] text-[#ffffff]">
              Provide top quality printed circuit boards that support
              mechanically and electrically connection by conductive pathways.
              From its layout, manufacturing to assembling, we offer you
              one-stop service that save both your time and money.
            </span>
          </div>

          <button
            type="button"
            className="bg-transparent border border-[1px solid #ffffff] flex flex-row gap-2 items-center justify-center px-[9px] py-[14px] max-h-[42px] max-w-[152px]"
          >
            <span className="uppercase font-[600] text-[#ffffff] text-[14px]">
              LEARN MORE
            </span>

            <MdKeyboardArrowDown className="w-[24px] h-[24px] text-[#ffffff]" />
          </button>
        </div>
      </section>

      <h1>HOME</h1>
    </section>
  );
};

export default HomePage;
