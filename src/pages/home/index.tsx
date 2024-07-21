import NavbarComponent from "../../components/navbar/NavbarComponent";
import HeaderVideo from "../../assets/videos/Y2meta.app-Smart City Digital City Video-(1080p).mp4";
import TitleComponent from "../../components/titles/TitleComponent";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import FirstContentImage from "../../assets/images/need-solution.png";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Keyboard, Pagination } from "swiper/modules";
import SmartPatrolSwiperImage from "../../assets/images/smart-patrol-swiper.png";
import VisitorManagementSwiperImage from "../../assets/images/visitor-management-swiper.png";
import TicketingSwiperImage from "../../assets/images/ticketing-swiper.png";
import SecondContentImage from "../../assets/images/smart-patrol.png";
import SmartPatrolContentImage from "../../assets/images/smart-patrol-content.png";
import SmartPatrolContentHandImage from "../../assets/images/smart-patrol-documentation-hand.png";
import SmartPatrolPhone1 from "../../assets/images/smart-patrol-phone-1.png";
import SmartPatrolPhone2 from "../../assets/images/smart-patrol-phone2.png";
import ScrollSvg from "../../assets/svgs/scroll.svg";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import VisitormanagementContentImage from "../../assets/images/visitor-management.png";
import VisitorManagementSystemImage from "../../assets/images/visitor-management-system-.png";
import FBL500 from "../../assets/images/FBL500 1.png";
import FBL520 from "../../assets/images/FBL520 v1 1.png";
import TicketingManagementSystem from "../../assets/images/ticketing-group.png";
import { useCallback, useEffect, useRef } from "react";
import { documentationTicketingManagementSystems } from "../../constants/swiper";
import { benefitCards, usabilityCards } from "../../constants/card";
import FooterComponent from "../../components/footer/FooterComponent";

const HomePage = () => {
  document.title = "BIT Siber";

  const ticketingSwiperRef = useRef<SwiperClass | null>(null);

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
            keyboard={true}
            grabCursor
            modules={[Pagination, Keyboard]}
            className="smart-patrol-swiper absolute"
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
            alt="smart-patrol"
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

      <section className="relative flex items-center justify-center w-full min-h-[1025px] bg-[#F6F6F6]">
        <div className="relative flex flex-row items-center">
          <div className="bg-[#D7E4FC] h-screen max-h-[586px] rounded-[10px] w-full max-w-[597px] px-[26px] py-10 flex flex-col gap-16">
            <div className="text-[#072B72] text-center flex flex-col items-center justify-center gap-5">
              <span className="text-[36px] font-[700] leading-tight ">
                The benefits of <br /> Smart Patrol
              </span>
              <div className="w-full h-[7px] px-[40%]">
                <div className="w-full h-full bg-[#072B72]" />
              </div>
            </div>
            <div className="relative">
              <BiSolidQuoteLeft className="text-[#1C49A0] text-[32px] absolute -top-10 left-0" />
              <BiSolidQuoteRight className="text-[#1C49A0] text-[32px] absolute -bottom-10 right-0" />
              <span className="text-[#3F68B3] text-[18px] font-[700]">
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
          <div className="bg-[#BACEF4] h-screen max-h-[638px] rounded-[10px] w-full max-w-[597px] px-[36px] py-16 flex flex-col gap-16 z-10 -ml-1">
            <div className="text-[#072B72] text-center flex flex-col items-center justify-center gap-5">
              <span className="text-[36px] font-[700] leading-tight ">
                The benefits of <br /> Smart Patrol
              </span>
              <div className="w-full h-[7px] px-[40%]">
                <div className="w-full h-full bg-[#072B72]" />
              </div>
            </div>
            <div className="relative">
              <BiSolidQuoteLeft className="text-[#0A214F] text-[32px] absolute -top-10 left-0" />
              <BiSolidQuoteRight className="text-[#0A214F] text-[32px] absolute -bottom-10 right-0" />
              <span className="text-[#0A214F] text-[18px] font-[700]">
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

      <section className="relative h-fit w-full items-center flex justify-center">
        <img
          src={VisitormanagementContentImage}
          className="h-full w-full object-cover object-center"
          alt="visitor-management-system"
        />

        <div className="grid grid-cols-2 items-center absolute top-1/2 transform -translate-y-1/2 gap-16 px-[171px]">
          <div className="flex flex-col gap-3">
            <TitleComponent
              title="Visitor Management System"
              width={121}
              isCenter={false}
            />

            <p className="font-[400] text-[18px] text-[#ffffff]">
              A flap barrier gate is a type of pedestrian access control
              mechanism commonly used in areas where there is a need to restrict
              or control the flow of people. These gates typically consist of a
              series of retractable barriers or flaps that can swing open to
              allow authorized individuals to pass through and then close to
              prevent unauthorized access.
            </p>
            <p className="font-[400] text-[18px] text-[#ffffff]">
              Flap barrier gates are commonly used in places like office
              buildings, train stations, airports, stadiums, and other public
              venues where there is a need to regulate the movement of people.
              They are often integrated with access control systems such as
              keycard readers, biometric scanners, or ticketing systems to
              ensure that only authorized individuals are able to pass through.
            </p>

            <p className="font-[400] text-[18px] text-[#ffffff]">
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

          <div className="h-[605px]">
            <img
              src={VisitorManagementSystemImage}
              alt="smart-patrol"
              className="w-[637px] h-[772px] object-center object-contain"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[822px] bg-[#F2F2F2] flex flex-col px-[171px]">
        <div className="pt-[57px] flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="text-[#043FB3] font-[800] text-[50px] text-center">
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
          <div className="flex flex-row justify-evenly gap-[57px] h-full py-5 overflow-x-scroll max-w-[1.062.81px] px-[134.19px] hide-scrollbar">
            <div className="min-h-[415.11px] max-h-[415.11px] w-fit h-full border-[4px] border-[#EAE6E6] relative bg-[#EAE6E6] rounded-[20px] flex items-center justify-center p-[40px]">
              {/* <div className="w-[330.39] h-[342.04] flex items-center justify-center"> */}
              <div className="px-[24px] py-[10px] bg-[#072B72] absolute top-2/3 right-[98%] text-center rounded-[5px]">
                <span className="font-[700] text-[26px] text-[#ffffff]">
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
            <div className="h-screen max-h-[368px] my-auto border-dashed border border-[#A3A3A3]" />
            <div className="min-h-[415.11px] max-h-[415.11px] w-fit h-full border-[4px] border-[#EAE6E6] relative bg-[#EAE6E6] rounded-[20px] flex items-center justify-center p-[40px]">
              {/* <div className="w-[330.39] h-[342.04] flex items-center justify-center"> */}
              <div className="px-[24px] py-[10px] bg-[#072B72] absolute top-1/2 left-[98%] text-center rounded-[5px]">
                <span className="font-[700] text-[26px] text-[#ffffff]">
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

      <section className="flex flex-row flex-wrap min-h-[1021px] h-fit bg-[#F6F6F6] px-[171px] py-[100px]">
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="gap-y-[20px] flex flex-col leading-10">
            <span className="text-[#072B72] font-[600] text-[36px] ">
              Feature Visiting
              <br /> Management
              <br /> System
            </span>

            <div className="bg-[#072B72] w-[94px] h-[9px]" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-y-[20px] items-start justify-center relative">
          <div className="absolute -left-5 h-full border-[3px] border-[#0D43AC] rounded-sm" />
          <div className="absolute -left-[23.2px] w-[12px] h-[12px] border-[3px] border-[#0D43AC] rounded-full top-10 z-20 bg-white" />
          <div className="absolute -left-[23.2px] w-[12px] h-[12px] border-[3px] border-[#0D43AC] rounded-full bottom-10 z-20 bg-white" />
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Person information structure: based on Face Unique Biometric ID
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Supports 4 attendance status, including check in and check out
              (overtime in and overtime out are done by software)
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Supports multiple languages: English, Indonesian, Vietnamese,
              Thais, Philippines, Bahasa Melayu
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Configurable with local private cloud or on-premise Authentication
              server
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              7-inch LCD screen to display time, date, week, and attendance
              information Max
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Unlimited users as no data stored in the device and Max. 100,000
              events records
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Two attendance authentication modes: authentication by person,
              authentication by device
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Generates the attendance report automatically and views the
              attendance data easily
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Can be integrated with 3rd Party appliance, such as Gates,
              Turnstile, Door and etc.
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              IP address conflict detection
            </span>
          </div>
          <div className="px-[16px] py-[20px] border border-[#072B72] rounded-[5px]">
            <span className="text-[#072B72] font-[500] text-[16px]">
              Works properly with Lithium battery when powering off
            </span>
          </div>
        </div>
      </section>

      <section className="relative h-fit w-full max-h-[1000px] items-center flex justify-center overflow-hidden">
        <img
          src={VisitormanagementContentImage}
          className="h-full w-full object-cover object-center"
          alt="visitor-management-system"
        />

        <div className="grid grid-cols-2 items-center absolute top-1/2 transform -translate-y-1/2 gap-16 px-[171px]">
          <div className="flex flex-col gap-3">
            <TitleComponent
              title="TICKETING MANAGAMENT SYSTEM"
              width={121}
              isCenter={false}
            />

            <p className="font-[400] text-[18px] text-[#ffffff]">
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

          <div className="w-full max-w-[768.31px]">
            <img
              src={TicketingManagementSystem}
              alt="ticketing-management-system"
              className="w-full h-full object-center object-contain transform scale-125"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-full max-h-[846px] bg-[#F2F2F2] px-[171px] items-center justify-start pt-[87.5px] gap-[62px]">
        <div className="flex flex-col items-center justify-start gap-6">
          <span className="font-[800] text-[50px] text-[#043FB3] text-center leading-[63px]">
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
            slidesPerView={5}
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
            modules={[Keyboard]}
          >
            {documentationTicketingManagementSystems?.map(
              (item: { image: string }, index: number) => (
                <SwiperSlide
                  key={index}
                  className="max-w-[226px] min-w-[226px] min-h-[484px] border-[5px]"
                >
                  <img src={item?.image} alt={`ticketing-${index + 1}`} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </section>

      <section className="flex flex-col w-full h-full max-h-[1067px] max-w-[1879px] bg-[#F6F6F6] py-[100px] px-[171px] gap-[120px] ">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div className="flex flex-col gap-5">
              <span className="font-[600] text-[36px] text-[#072B72] leading-[45.36px] ">
                Benefits of Concert <br /> Ticketing App
              </span>
              <div className="h-[9px] w-[94px] bg-[#072B72] " />
            </div>
          </div>
          <div className="col-span-8 flex flex-row items-center justify-start gap-[24px]">
            {benefitCards?.map(
              (
                item: { title: string; description: string; image: string },
                index: number,
              ) => (
                <div
                  key={index}
                  className="bg-[#FBFBFB] w-full max-w-[316px] h-full rounded-[5px] flex flex-col overflow-hidden"
                >
                  <div className="h-[115px] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="pt-5 pb-8 px-2 flex flex-col gap-[15px]">
                    <span className="font-[600] text-[#072B72] text-[24px] leading-[30.24px] ">
                      {item.title}
                    </span>
                    <span className="font-[400] text-[#90A3C9] text-[16px] leading-[20.16px] ">
                      {item.description}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div className="flex flex-col gap-5">
              <span className="font-[600] text-[36px] text-[#072B72] leading-[45.36px] ">
                Usability of Concert <br /> Ticketing Application
              </span>
              <div className="h-[9px] w-[94px] bg-[#072B72] " />
            </div>
          </div>
          <div className="col-span-8 flex flex-row items-center justify-start gap-[24px]">
            {usabilityCards?.map(
              (
                item: { title: string; description: string; image: string },
                index: number,
              ) => (
                <div
                  key={index}
                  className="bg-[#FBFBFB] w-full max-w-[316px] h-full rounded-[5px] flex flex-col overflow-hidden"
                >
                  <div className="h-[115px] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="pt-5 pb-8 px-2 flex flex-col gap-[15px]">
                    <span className="font-[600] text-[#072B72] text-[24px] leading-[30.24px] ">
                      {item.title}
                    </span>
                    <span className="font-[400] text-[#90A3C9] text-[16px] leading-[20.16px] ">
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
