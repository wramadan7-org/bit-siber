import { FaGlobe, FaTwitter, FaFacebook } from "react-icons/fa";
import BITSiberLogo from "../../assets/images/Logo BIT White 2.png";

const FooterComponent = () => {
  return (
    <footer className="bg-[#072B72] text-white relative overflow-hidden">
      {/* Circle Left */}
      <div className="w-[10rem] z-10 h-full bg-transparent rounded-r-full absolute bottom-0 -left-[3rem] overflow-hidden">
        <div className="w-full h-full bg-[#0D3A92] r-full"></div>
      </div>
      <div className="w-[10rem] z-20 h-full bg-transparent rounded-r-full absolute bottom-0 -left-[5rem] overflow-hidden">
        <div className="w-full h-full bg-[#0F3F9D] r-full"></div>
      </div>
      <div className="w-[10rem] z-30 h-full bg-transparent rounded-r-full absolute bottom-0 -left-[7rem] overflow-hidden">
        <div className="w-full h-full bg-[#1345A8] r-full"></div>
      </div>
      {/* Circle Right */}
      <div className="w-[10rem] z-10 h-full bg-transparent rounded-l-full absolute bottom-0 -right-[3rem] overflow-hidden">
        <div className="w-full h-full bg-[#0D3A92] r-full"></div>
      </div>
      <div className="w-[10rem] z-20 h-full bg-transparent rounded-l-full absolute bottom-0 -right-[5rem] overflow-hidden">
        <div className="w-full h-full bg-[#0F3F9D] r-full"></div>
      </div>
      <div className="w-[10rem] z-30 h-full bg-transparent rounded-l-full absolute bottom-0 -right-[7rem] overflow-hidden">
        <div className="w-full h-full bg-[#1345A8] r-full"></div>
      </div>
      <div className="container mx-auto px-[171px] py-10 bg-[#072B72] relative">
        <div className="flex flex-row flex-wrap justify-between z-40">
          <div className="flex flex-col">
            <img
              src={BITSiberLogo}
              alt="BIS Logo"
              className="w-[228px] h-[83px]"
            />
            <p className="font-[500] text-white text-[22px] leading-[25px] mt-5">
              PT. Bit Informatika Siber
            </p>
            <p className="font-[400] text-white text-[18px] leading-[25px]">
              www.bitsiber.com
            </p>
            <div className="h-[4px] w-[75px] bg-white mt-[14px]" />
          </div>
          <div className="flex flex-1 flex-col gap-[25px] lg:pl-[50px]">
            <div className="flex flex-col gap-[29px]">
              <div>
                <p className="font-[400] text-white text-[16px] leading-[30px] ">
                  Ruko Boulevard Tekno Blok F No.8, Desa/Kelurahan Setu, Kec.
                  Setu, Kota Tangerang Selatan, Provinsi Banten, 15314.
                  INDONESIA
                </p>
              </div>
              <div>
                <p className="font-[300] text-white text-[16px] leading-6  ">
                  Email: <span className="font-[400]">sales@bitsiber.com</span>
                </p>
                <p className="font-[300] text-white text-[16px] leading-6  ">
                  Telephone: <span className="font-[400]">0812-108-5346</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="w-fit h-fit rounded-full bg-white p-1 text-center">
                <FaGlobe className="text-[#072B72]" />
              </div>
              <div className="w-fit h-fit rounded-full bg-white p-1 text-center">
                <FaTwitter className="text-[#072B72]" />
              </div>
              <div className="w-fit h-fit rounded-full bg-white p-1 text-center">
                <FaFacebook className="text-[#072B72]" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-[33px] w-[324px] lg:pl-[40px] gap-[88px]">
            <a
              href="#"
              className="text-white text-[18px] leading-[25px] font-[600] text-nowrap"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-[18px] leading-[25px] font-[600] text-nowrap"
            >
              Service
            </a>
            <a
              href="#"
              className="text-white text-[18px] leading-[25px] font-[600] text-nowrap"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white text-[18px] leading-[25px] font-[600] text-nowrap"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white text-[18px] leading-[25px] font-[600] text-nowrap"
            >
              Our Product
            </a>
            <a
              href="#"
              className="text-white text-[18px] leading-[25px] font-[600] text-nowrap"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
      <div className="text-center font-[400] text-[14px] leading-[25px] py-4 z-30 bg-[#083690] relative">
        <p>Copyright © 2024 | Powered by PT. BIT Informatika Siber</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
