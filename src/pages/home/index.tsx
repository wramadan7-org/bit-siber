import NavbarComponent from "../../components/navbar/NavbarComponent";
import HeaderVideo from "../../assets/videos/header-video.mp4";
import TitleComponent from "../../components/titles/TitleComponent";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import SmartPatrolSwiperImage from "../../assets/images/smart-patrol-swiper.png";
import VisitorManagementSwiperImage from "../../assets/images/visitor-management-swiper.png";
import TicketingSwiperImage from "../../assets/images/ticketing-swiper.png";
import SmartPatrolContentImage from "../../assets/images/smart-patrol-content.png";
import SmartPatrolContentHandImage from "../../assets/images/smart-patrol-documentation-hand.png";
import SmartPatrolPhone1 from "../../assets/images/smart-patrol-phone-1.png";
import SmartPatrolPhone2 from "../../assets/images/smart-patrol-phone2.png";
import ScrollSvg from "../../assets/svgs/scroll.svg";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import VisitorManagementSystemImage from "../../assets/images/visitor-management-system-.png";
import FBL500 from "../../assets/images/FBL500 1.png";
import FBL520 from "../../assets/images/FBL520 v1 1.png";
import TicketingManagementSystem from "../../assets/images/ticketing-group.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { documentationTicketingManagementSystems } from "../../constants/swiper";
import { benefitCards, usabilityCards } from "../../constants/card";
import FooterComponent from "../../components/footer/FooterComponent";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import "swiper/css/effect-coverflow";

const HomePage = () => {
  document.title = "BIT Siber";

  const ticketingSwiperRef = useRef<SwiperClass | null>(null);
  const [scrolledState, setScrolledState] = useState<boolean>(false);

  const updatesSlideRotation = useCallback((swiper: SwiperClass) => {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;
    slides.forEach((slide, index: number) => {
      slide.classList.remove("rotate-left", "rotate-right");
      const offset = Math.abs(index - activeIndex);
      if (offset > 0) {
        if (index < activeIndex) {
          slide.classList.add("rotate-left");
        } else {
          slide.classList.add("rotate-right");
        }
      }
    });
  }, []);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolledState(true);
    } else {
      setScrolledState(false);
    }
  }, []);

  useEffect(() => {
    if (ticketingSwiperRef.current) {
      const swiper = ticketingSwiperRef.current;
      updatesSlideRotation(swiper);

      swiper.on("slideChange", () => {
        updatesSlideRotation(swiper);
      });

      swiper.on("transitionStart", () => {
        updatesSlideRotation(swiper);
      });

      swiper.on("transitionEnd", () => {
        updatesSlideRotation(swiper);
      });
    }
  }, [updatesSlideRotation]);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="mx-auto max-w-[1994px]">
      <section
        className={`sticky top-0 bg-transparent h-0 z-50 ${scrolledState ? "scrolled-navbar" : ""}`}
      >
        <NavbarComponent isScrolled={scrolledState} />
      </section>

      <section className="relative h-screen pb-[82px] max-h-[600px] sm:max-h-[686px] overflow-hidden">
        {/* <div className="w-full min-h-[686px] absolute z-10 bg-gray-950 opacity-[0.6]" /> */}

        <video
          src={HeaderVideo} // Path to your video file
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover object-center filter brightness-[50%]"
        />

        <div className="absolute flex flex-col gap-5 items-start z-20 max-w-[582px] w-full top-1/2 left-0 px-[15px] sm:px-[50px] md:px-0 md:left-40 lg:left-44 xl:left-48 -translate-y-1/2">
          <div>
            <TitleComponent
              title="Provides convenience in every activity and time efficiency"
              width={82}
              isCenter={false}
            />

            <span className="font-[400] text-clamp-16 text-[#ffffff]">
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

      <section className="relative h-fit py-32 max-h-[552px] bg-[url('assets/images/need-solution.png')] bg-cover bg-center px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <span className="font-[800] text-clamp-26 text-center text-[#ffffff]">
            Need a solution? We've got you covered.
          </span>
          <div className="bg-white mt-[20px] h-[3px] w-full max-w-[105px]  md:max-w-[245px]" />
        </div>
      </section>

      <section className="relative grid grid-cols-2 w-full h-fit min-h-[451px] bg-[#072B72] px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] items-center justify-center -mt-1 gap-3 py-20 lg:py-0 overflow-hidden">
        <div className="flex flex-col col-span-2 lg:col-span-1 items-center justify-center lg:items-start lg:justify-center h-full gap-5 lg:pr-10">
          <span className="font-[800] text-[32px] text-[#ffffff] text-center lg:text-start">
            EXPLORE OUR PRODUCTS
          </span>

          <span className="font-[500] text-clamp-16 text-[#eeecec] text-center lg:text-start lg:pr-[30px]">
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
        <div className="h-full w-full relative col-span-2 lg:col-span-1 smart-patrol-swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{ clickable: true }}
            keyboard={true}
            grabCursor
            loop
            centeredSlides
            modules={[Pagination, Keyboard, Navigation]}
            navigation={{
              nextEl: ".custom-next-smart-patrol",
              prevEl: ".custom-prev-smart-patrol",
            }}
            className="z-20"
            breakpoints={{
              479: {
                spaceBetween: 20,
                loop: true,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
                rewind: true,
                loop: true,
                // loopAddBlankSlides: true,
                // loopAdditionalSlides: 1,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
              },
            }}
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
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
          </Swiper>
          <div className="custom-navigation-smart-patrol flex flex-row justify-between absolute -left-4 -right-4 sm:-left-10 sm:-right-10 md:-left-12 md:-right-12 top-1/2 h-10">
            <div className="custom-prev-smart-patrol cursor-pointer z-20">
              <IoMdArrowDropleftCircle className="w-10 h-10 z-20 text-[#0569d3] sm:text-white" />
            </div>
            <div className="custom-next-smart-patrol cursor-pointer z-20">
              <IoMdArrowDroprightCircle className="w-10 h-10 z-20 text-[#0569d3] sm:text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-row items-center justify-center w-full min-h-[1117px] h-fit bg-[url('assets/images/smart-patrol.png')] py-20 md:py-0 bg-cover bg-center overflow-hidden">
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 items-center px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px]">
          <div className="flex flex-1">
            <img
              src={SmartPatrolContentImage}
              alt="smart-patrol"
              className="w-full h-full lg:h-[602px] object-center object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3 md:pl-10">
            <TitleComponent title="SMART PATROL" width={121} isCenter={false} />

            <p className="font-[400] text-clamp-16 text-[#ffffff]">
              Smart Patrol is an innovative app designed to assist organizations
              in the management of attendance, patrols, and other security and
              employee related activities. The app consists of two main
              components: Smart Patrol Mobile and Smart Patrol Website.
            </p>
            <p className="font-[400] text-clamp-16 text-[#ffffff]">
              Smart Patrol Mobile allows employees to take attendance, receive
              notifications, manage schedules and attendance history, conduct
              patrols, input guest data, and apply for leave and reimbursement.
              Meanwhile, the Smart Patrol Website provides comprehensive
              monitoring and reporting features, enabling managers to monitor
              activities in real-time, view data on patrols, incidents, guests,
              etc. in graphical and tabular form, and manage organizational and
              user data.
            </p>

            <p className="font-[400] text-clamp-16 text-[#ffffff]">
              Smart Patrol Website provides comprehensive monitoring and
              reporting features, allowing managers to monitor activities in
              real-time, view patrol data, incidents, guests, etc. in charts and
              tables, and manage organizational and user data
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex items-start justify-center w-full min-h-[838px] px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] overflow-hidden">
        <div className="absolute transform top-14 left-1/2 -translate-x-1/2 flex flex-col justify-start items-center h-full w-full max-w-[396px]  max-h-[191px] gap-5 align-bottom z-20">
          <span className="text-[#043FB3] font-[800] text-clamp-50 text-center leading-none lg:leading-[50px]">
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
        <div className="w-full flex flex-row gap-2 justify-end relative bg-transparent">
          <div className="absolute bottom-0 transform md:translate-x-1 md:left-40 w-full">
            <img
              src={SmartPatrolContentHandImage}
              alt="smart-patrol"
              className="w-[600px] h-[551px] object-center object-cover"
            />
          </div>
          <div className="absolute bottom-5 -right-2 md:-right-10 z-10 flex flex-col w-[44px] h-fit">
            <img
              src={ScrollSvg}
              alt="scroll"
              className="w-[38.5px] h-[36.67px]"
            />

            <span className="font-[700] text-clamp-16 text-[#072B72]">
              Scroll up & down
            </span>
          </div>
          <div className="flex flex-col overflow-y-scroll overflow-x-hidden w-[366px] h-[838px] relative hide-scrollbar documentation-smart-patrol-list">
            <div className="w-full h-[736px] transform md:scale-[1.1] flex items-center justify-center">
              <img
                src={SmartPatrolPhone1}
                alt="smart-patrol-phone-1"
                className="h-[810px] object-cover object-center"
              />
            </div>
            <div className="w-full h-[736px] transform md:scale-[1.1] flex items-center justify-center">
              <img
                src={SmartPatrolPhone2}
                alt="smart-patrol-phone-2"
                className="h-[810px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center w-full min-h-[1025px] bg-[#F6F6F6] px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] py-20 md:py-0 overflow-hidden">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="bg-[#D7E4FC] h-full md:h-screen md:max-h-[586px] rounded-[10px] w-full max-w-[597px] px-[26px] py-20 md:py-10 flex flex-col gap-16">
            <div className="text-[#072B72] text-center flex flex-col items-center justify-center gap-5">
              <span className="text-clamp-36 font-[700]  ">
                The benefits of <br /> Smart Patrol
              </span>
              <div className="w-full h-[7px] px-[40%]">
                <div className="w-full h-full bg-[#072B72]" />
              </div>
            </div>
            <div className="relative">
              <BiSolidQuoteLeft className="text-[#1C49A0] text-[32px] absolute -top-10 left-0" />
              <BiSolidQuoteRight className="text-[#1C49A0] text-[32px] absolute -bottom-10 right-0" />
              <span className="text-[#3F68B3] text-clamp-16 font-[700]">
                Defining Smart Patrol is very broad, including improving the
                efficiency of managing attendance, leave, patrol and guest data
                centrally, and facilitating real-time and structured monitoring
                of employee activities. The system also strengthens security
                with SOS and patrol features, supports various types of
                attendance and requests, and provides easy and transparent
                access to attendance and activity data.
              </span>
            </div>
          </div>
          <div className="bg-[#BACEF4] h-full md:h-screen md:max-h-[638px] rounded-[10px] w-full max-w-[597px] px-[36px] py-16 flex flex-col gap-16 z-10 ml-0 -mt-5 md:mt-0 md:-ml-1">
            <div className="text-[#072B72] text-center flex flex-col items-center justify-center gap-5">
              <span className="text-clamp-36 font-[700]  ">
                Usefulness of <br /> Smart Patrol
              </span>
              <div className="w-full h-[7px] px-[40%]">
                <div className="w-full h-full bg-[#072B72]" />
              </div>
            </div>
            <div className="relative">
              <BiSolidQuoteLeft className="text-[#0A214F] text-[32px] absolute -top-10 left-0" />
              <BiSolidQuoteRight className="text-[#0A214F] text-[32px] absolute -bottom-10 right-0" />
              <span className="text-[#0A214F] text-clamp-16 font-[700]">
                Smart Patrol supports clocking in, clocking out and overtime,
                conducting online and offline patrols with photo documentation,
                and managing important notifications such as SOS and
                instructions. It also enables leave and reimbursement
                application and management, tracks attendance schedules,
                attendance history, patrol data, incidents, and guests, and
                provides activity information in the form of charts and tables.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-fit w-full items-center flex justify-center bg-[url('assets/images/visitor-management.png')] bg-cover bg-center md:min-h-[1173px] py-20 md:py-0 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center gap-20 md:gap-0 px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px]">
          <div className="flex flex-1 flex-col gap-3">
            <TitleComponent
              title="Visitor Management System"
              width={121}
              isCenter={false}
            />

            <p className="font-[400] text-clamp-16 text-[#ffffff] lg:leading-[25px]">
              A flap barrier gate is a type of pedestrian access control
              mechanism commonly used in areas where there is a need to restrict
              or control the flow of people. These gates typically consist of a
              series of retractable barriers or flaps that can swing open to
              allow authorized individuals to pass through and then close to
              prevent unauthorized access.
            </p>
            <p className="font-[400] text-clamp-16 text-[#ffffff] lg:leading-[25px]">
              Flap barrier gates are commonly used in places like office
              buildings, train stations, airports, stadiums, and other public
              venues where there is a need to regulate the movement of people.
              They are often integrated with access control systems such as
              keycard readers, biometric scanners, or ticketing systems to
              ensure that only authorized individuals are able to pass through.
            </p>

            <p className="font-[400] text-clamp-16 text-[#ffffff] lg:leading-[25px]">
              These gates offer a more secure and controlled access solution
              compared to simple turnstiles or gates, as the flaps physically
              block access and can only be opened for one person at a time. This
              helps to prevent tailgating or unauthorized entry by individuals
              trying to follow closely behind someone who has been granted
              access. Overall, flap barrier gates are a popular choice for
              organizations looking to enhance security and control pedestrian
              flow in various environments.
            </p>
          </div>

          <div className="h-fit w-full max-w-[637px] md:h-[470px] flex flex-1 pl-0 md:pl-10">
            <img
              src={VisitorManagementSystemImage}
              alt="smart-patrol"
              className="w-full h-full object-center object-contain"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[822px] bg-[#F2F2F2] flex flex-col px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] overflow-hidden">
        <div className="pt-[57px] flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="text-[#043FB3] font-[800] leading-none lg:leading-[50px] text-clamp-50 text-center">
              Documentation Visiting
              <br /> Management System
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
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-evenly gap-[57px] h-full py-5 overflow-y-scroll overflow-x-hidden md:overflow-x-scroll max-w-[1.062.81px] px-[134.19px] hide-scrollbar">
            <div className="min-h-[415.11px] max-h-[415.11px] min-w-[280px] w-fit h-full border-[4px] border-[#EAE6E6] relative bg-[#EAE6E6] rounded-[20px] flex items-center justify-center p-[40px]">
              {/* <div className="w-[330.39] h-[342.04] flex items-center justify-center"> */}
              <div className="px-[24px] py-[10px] bg-[#072B72] absolute md:top-2/3 md:right-[95%] top-3/4 right-0  text-center rounded-[5px]">
                <span className="font-[700] text-clamp-26 text-[#ffffff]">
                  FBL500
                </span>
              </div>
              <img
                src={FBL500}
                alt="FBL500"
                className="w-full h-full object-cover object-center"
              />
              {/* </div> */}
            </div>
            <div className="h-[1px] w-screen max-w-[300px] md:max-w-0 md:w-0 md:h-screen max-h-[368px] my-auto border-dashed border border-[#A3A3A3]" />
            <div className="min-h-[415.11px] max-h-[415.11px] min-w-[280px] w-fit h-full border-[4px] border-[#EAE6E6] relative bg-[#EAE6E6] rounded-[20px] flex items-center justify-center p-[40px]">
              {/* <div className="w-[330.39] h-[342.04] flex items-center justify-center"> */}
              <div className="px-[24px] py-[10px] bg-[#072B72] absolute md:top-1/2 md:left-[95%] top-3/4 left-0 text-center rounded-[5px]">
                <span className="font-[700] text-clamp-26 text-[#ffffff]">
                  FBL520
                </span>
              </div>
              <img
                src={FBL520}
                alt="FBL520"
                className="w-full h-full object-cover object-center"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row min-h-[1021px] h-fit bg-[#F6F6F6] px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] py-[100px] gap-10 lg:gap-0 overflow-hidden">
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="gap-y-[20px] flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-start leading-none lg:leading-[50px]">
            <span className="text-[#072B72] font-[600] text-clamp-45 ">
              Feature Visiting Management
              <br /> System
            </span>

            <div className="bg-[#072B72] w-[94px] h-[9px]" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-y-[20px] items-start justify-center relative">
          <div className="absolute left-0 lg:-left-8 h-full border-[3px] border-[#0D43AC] rounded-sm" />
          <div className="absolute -left-[3px] lg:-left-[35.2px] w-[12px] h-[12px] border-[3px] border-[#0D43AC] rounded-full top-10 z-20 bg-white" />
          <div className="absolute -left-[3px] lg:-left-[35.2px] w-[12px] h-[12px] border-[3px] border-[#0D43AC] rounded-full bottom-10 z-20 bg-white" />
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Person information structure: based on Face Unique Biometric ID
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Supports 4 attendance status, including check in and check out
              (overtime in and overtime out are done by software)
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Supports multiple languages: English, Indonesian, Vietnamese,
              Thais, Philippines, Bahasa Melayu
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Configurable with local private cloud or on-premise Authentication
              server
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              7-inch LCD screen to display time, date, week, and attendance
              information Max
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Unlimited users as no data stored in the device and Max. 100,000
              events records
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Two attendance authentication modes: authentication by person,
              authentication by device
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Generates the attendance report automatically and views the
              attendance data easily
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Can be integrated with 3rd Party appliance, such as Gates,
              Turnstile, Door and etc.
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              IP address conflict detection
            </span>
          </div>
          <div className="ml-5 lg:ml-0 px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-clamp-16">
              Works properly with Lithium battery when powering off
            </span>
          </div>
        </div>
      </section>

      <section className="relative h-fit w-full items-center flex justify-center overflow-hidden bg-[url('assets/images/visitor-management.png')] bg-cover bg-center">
        <div className="flex flex-col-reverse md:flex-row items-center py-20 gap-16 px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px]">
          <div className="flex flex-1 flex-col gap-3">
            <TitleComponent
              title="TICKETING MANAGAMENT SYSTEM"
              width={121}
              isCenter={false}
            />

            <p className="font-[400] text-clamp-16 leading text-[#ffffff]">
              The app converts facial feature data into a secure SQRC format,
              enabling reliable ID authentication without the need for internet
              connectivity or additional devices. With key features such as
              secure access without an internet connection, no need for data
              storage on servers-enhancing user privacy, and ensuring fast and
              reliable entry to the venue, the app is ideal for venues that need
              a secure and efficient ticketing solution that protects user
              privacy.
            </p>
          </div>

          <div className="w-full flex flex-1 max-w-[768.31px]">
            <img
              src={TicketingManagementSystem}
              alt="ticketing-management-system"
              className="w-full h-full object-center object-contain transform scale-125"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-full max-h-[846px] bg-[#F2F2F2] px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] items-center justify-start pt-[87.5px] gap-[62px] overflow-hidden">
        <div className="flex flex-col items-center justify-start gap-6">
          <span className="font-[800] text-clamp-50 leading-none lg:leading-[50px] text-[#043FB3] text-center ">
            Documentation Ticketing <br /> Management System
          </span>
          <button
            type="button"
            className="flex flex-row gap-2 items-center justify-center border border-[#072B72] px-[9px] py-3 max-w-[131px] max-h-[40px] "
          >
            <span className="text-[#072B72] text-[14px] font-[500] ">
              SEE MORE
            </span>
            <MdKeyboardArrowRight className="w-[22px] h-[22px] text-[#072B72]" />
          </button>
        </div>
        <div className="relative flex flex-1 min-h-[505px] w-full overflow-hidden">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={10}
            pagination={true}
            initialSlide={2}
            grabCursor
            className="ticketing-swiper absolute -bottom-9"
            loop
            onSwiper={(swiper) => {
              ticketingSwiperRef.current = swiper;
              updatesSlideRotation(swiper);
            }}
            keyboard={true}
            navigation={{
              nextEl: ".custom-next-ticketing",
              prevEl: ".custom-prev-ticketing",
            }}
            modules={[Keyboard, Navigation]}
            breakpoints={{
              372: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              974: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1096: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1627: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {documentationTicketingManagementSystems?.map(
              (item: { image: string }, index: number) => (
                <SwiperSlide key={index} className=" min-h-[484px]">
                  <img src={item?.image} alt={`ticketing-${index + 1}`} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <div className="custom-navigation-ticketing flex flex-row justify-between absolute left-0 right-0 sm:left-2 sm:right-2 md:left-0 md:right-0 top-1/2 h-10">
            <div className="custom-prev-ticketing cursor-pointer z-20">
              <IoMdArrowDropleftCircle className="w-10 h-10 z-20 text-[#0569d3] sm:text-white" />
            </div>
            <div className="custom-next-ticketing cursor-pointer z-20">
              <IoMdArrowDroprightCircle className="w-10 h-10 z-20 text-[#0569d3] sm:text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-fit bg-[#F6F6F6] py-[100px] px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] gap-16 lg:gap-[120px] overflow-hidden">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-4 py-5 flex items-center justify-start">
            <div className="flex flex-col gap-5">
              <span className="font-[600] text-clamp-36 text-[#072B72]  leading-[30px] lg:leading-[45px]">
                Benefits of Concert <br /> Ticketing App
              </span>
              <div className="h-[9px] w-[94px] bg-[#072B72] " />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-row items-center justify-start gap-[24px] overflow-x-scroll py-5">
            {benefitCards?.map(
              (
                item: { title: string; description: string; image: string },
                index: number,
              ) => (
                <div
                  key={index}
                  className="bg-[#FBFBFB] w-full min-w-[296px] max-w-[316px] h-full rounded-[5px] flex flex-col overflow-hidden"
                >
                  <div className="h-[115px] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="pt-5 pb-8 px-2 flex flex-col gap-[15px]">
                    <span className="font-[600] text-[#072B72] text-[24px] leading-none lg:leading-[30px]">
                      {item.title}
                    </span>
                    <span className="font-[400] text-[#90A3C9] text-[16px]">
                      {item.description}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-4 py-5 flex items-center justify-start">
            <div className="flex flex-col gap-5">
              <span className="font-[600] text-clamp-36 text-[#072B72]  leading-[30px] lg:leading-[45px]">
                Usability of Concert <br /> Ticketing Application
              </span>
              <div className="h-[9px] w-[94px] bg-[#072B72] " />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-row items-center justify-start gap-[24px] overflow-x-scroll py-5">
            {usabilityCards?.map(
              (
                item: { title: string; description: string; image: string },
                index: number,
              ) => (
                <div
                  key={index}
                  className="bg-[#FBFBFB] w-full min-w-[296px] max-w-[316px] h-full rounded-[5px] flex flex-col overflow-hidden"
                >
                  <div className="h-[115px] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="pt-5 pb-8 px-2 flex flex-col gap-[15px]">
                    <span className="font-[600] text-[#072B72] text-[24px] leading-none lg:leading-[30px]">
                      {item.title}
                    </span>
                    <span className="font-[400] text-[#90A3C9] text-[16px]">
                      {item.description}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <FooterComponent />
    </section>
  );
};

export default HomePage;
