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
import SecondContentImage from "../../assets/images/smart-patrol.png";
import SmartPatrolContentImage from "../../assets/images/smart-patrol-content.png";
import SmartPatrolContentHandImage from "../../assets/images/smart-patrol-documentation-hand.png";
import SmartPatrolPhone1 from "../../assets/images/smart-patrol-phone-1.png";
import SmartPatrolPhone2 from "../../assets/images/smart-patrol-phone2.png";
import ScrollSvg from "../../assets/svgs/scroll.svg";

const HomePage = () => {
  document.title = "BIT Siber";

  return (
    <section>
      <section className="sticky top-0 bg-transparent z-30 h-0">
        <NavbarComponent />
      </section>

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
            className="bg-transparent border border-[#ffffff] flex flex-row gap-2 items-center justify-center px-[9px] py-[14px] max-h-[42px] max-w-[152px]"
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
            className="border border-[#ffffff] px-[9px] py-[14px] max-w-[131px] max-h-[40px] flex flex-row gap-2 items-center justify-center"
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

      <section className="relative flex items-center justify-center w-full min-h-[1117px]">
        <img
          src={SecondContentImage}
          alt="second-content"
          className="absolute w-full h-full object-cover object-center"
        />

        <div className="grid grid-cols-2 items-center absolute top-1/2 transform -translate-y-1/2 gap-16 px-[171px]">
          <img
            src={SmartPatrolContentImage}
            alt="snart-patrol"
            className="w-[637px] h-[772px] object-center object-contain"
          />

          <div className="flex flex-col gap-3">
            <TitleComponent title="SMART PATROL" width={121} isCenter={false} />

            <p className="font-[400] text-[18px] text-[#ffffff]">
              Smart Patrol is an innovative app designed to assist organizations
              in the management of attendance, patrols, and other security and
              employee related activities. The app consists of two main
              components: Smart Patrol Mobile and Smart Patrol Website.
            </p>
            <p className="font-[400] text-[18px] text-[#ffffff]">
              Smart Patrol Mobile allows employees to take attendance, receive
              notifications, manage schedules and attendance history, conduct
              patrols, input guest data, and apply for leave and reimbursement.
              Meanwhile, the Smart Patrol Website provides comprehensive
              monitoring and reporting features, enabling managers to monitor
              activities in real-time, view data on patrols, incidents, guests,
              etc. in graphical and tabular form, and manage organizational and
              user data.
            </p>

            <p className="font-[400] text-[18px] text-[#ffffff]">
              Smart Patrol Website provides comprehensive monitoring and
              reporting features, allowing managers to monitor activities in
              real-time, view patrol data, incidents, guests, etc. in charts and
              tables, and manage organizational and user data
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex items-start justify-center w-full min-h-[838px] bg-[#F2F2F2]">
        <div className="absolute transform top-14 left-1/2 -translate-x-1/2 flex flex-col justify-start items-center w-[396px]  h-[191px] leading-none gap-5 align-bottom">
          <span className="text-[#043FB3] font-[800] text-[50px] text-center">
            Documentation Smart Patrol
          </span>
          <button
            type="button"
            className="border border-[#072B72] px-[9px] py-[14px] max-h-[40px] max-w-[131px] flex flex-row items-center justify-center gap-1"
          >
            <span className="text-[14px] font-[500] text-[#072B72] uppercase">
              SEE MORE
            </span>
            <MdKeyboardArrowRight className="w-[22px] h-[22px] text-[#072B72]" />
          </button>
        </div>
        <div className="px-[171px] w-full flex flex-row gap-2 relative">
          <div className="relative flex flex-1">
            <div className="absolute bottom-0 left-0 w-full">
              <img
                src={SmartPatrolContentHandImage}
                alt="smart-patrol"
                className="w-[600px] h-[551px]"
              />
            </div>
          </div>
          <div className="absolute bottom-5 right-28 border flex flex-col w-[44px] h-fit">
            <img
              src={ScrollSvg}
              alt="scroll"
              className="w-[38.5px] h-[36.67px]"
            />

            <span className="font-[700] text-[18px] text-[#072B72]">
              Scroll up & down
            </span>
          </div>
          <div className="flex flex-col overflow-y-scroll overflow-x-hidden w-[366px] h-[838px] relative hide-scrollbar">
            <div className="w-full h-[736px] transform scale-[1.1] flex items-center justify-center">
              <img
                src={SmartPatrolPhone1}
                alt="smart-patrol-phone-1"
                className="h-[810px] object-cover object-center"
              />
            </div>
            <div className="w-full h-[736px] transform scale-[1.1] flex items-center justify-center">
              <img
                src={SmartPatrolPhone2}
                alt="smart-patrol-phone-2"
                className="h-[810px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
