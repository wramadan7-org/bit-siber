import NavbarComponent from "../../components/navbar/NavbarComponent";
import HeaderVideo from "../../assets/videos/Y2meta.app-Smart City Digital City Video-(1080p).mp4";
import TitleComponent from "../../components/titles/TitleComponent";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import FirstContentImage from "../../assets/images/need-solution.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper/modules";
import SmartPatrolSwiperImage from "../../assets/images/smart-patrol-swiper.png";
import VisitorManagementSwiperImage from "../../assets/images/visitor-management-swiper.png";
import TicketingSwiperImage from "../../assets/images/ticketing-swiper.png";

const HomePage = () => {
  document.title = "BIT Siber";

  return (
    <section>
      <div className="sticky top-0 bg-transparent z-30 h-0">
        <NavbarComponent />
      </div>

      <section className="relative min-h-[686px]">
        <div className="w-full min-h-[686px] absolute z-10 bg-gray-950 opacity-[0.6]" />

        <video
          src={HeaderVideo} // Path to your video file
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover object-center"
        />

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

      <section className="relative min-h-[552px]">
        <img
          src={FirstContentImage}
          alt="first-content"
          className="absolute w-full h-full object-cover object-center"
        />

        <div className="absolute transform -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col justify-center items-center">
            <span className="font-[800] text-[26px] text-[#ffffff]">
              Need a solution? We've got you covered.
            </span>
            <div className="bg-white mt-[20px] h-[3px] w-[345px]" />
          </div>
        </div>
      </section>

      <section className="relative grid grid-cols-1 md:grid-cols-2 w-full h-fit min-h-[451px] bg-[#072B72] px-[171px] items-center -mt-1 gap-3">
        <div className="flex flex-col  items-start justify-center h-full gap-5">
          <span className="font-[800] text-[32px] text-[#ffffff]">
            EXPLORE OUR PRODUCTS
          </span>

          <span className="font-[500] text-[18px] text-[#eeecec]">
            BIT Siber main product is Security Management System which consists
            of Smart Patrol, Visitor Management and Ticketing.
          </span>

          <button
            type="button"
            className="border border-[1px solid #ffffff] px-[9px] py-[14px] max-w-[131px] max-h-[40px] flex flex-row gap-2 items-center justify-center"
          >
            <span className="font-[500] text-[14px] text-[#ffffff] uppercase">
              SEE MORE
            </span>

            <MdKeyboardArrowRight className="w-[22px] h-[22px] text-[#ffffff]" />
          </button>
        </div>
        <div className="h-full w-full relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="swiper absolute"
            loop
          >
            <SwiperSlide>
              <img
                src={SmartPatrolSwiperImage}
                alt="smart-patrol"
                className="w-[195px] h-[238px] object-cover"
              />

              <span className="font-[700] text-[#072B72] text-[24px] ">
                Smart Patrol
              </span>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={VisitorManagementSwiperImage}
                alt="visitor-management"
                className="w-[195px] h-[238px] object-cover"
              />
              <span className="font-[700] text-[#072B72] text-[24px] ">
                Visitor Management
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={TicketingSwiperImage}
                alt="ticketing"
                className="w-[195px] h-[238px] object-cover"
              />

              <span className="font-[700] text-[#072B72] text-[24px] ">
                Ticketing
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
