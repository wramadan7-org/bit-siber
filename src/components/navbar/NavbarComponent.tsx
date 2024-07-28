import { useNavigate } from "react-router-dom";
import LogoBitSiber from "../../assets/images/logo-bit-siber.png";
import { navbars } from "../../constants/navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [dropdownActiveState, setDropdownActiveState] = useState<string | null>(
    null,
  );

  const handleChangePage = (pathParam: string) => {
    navigate(pathParam);
  };

  const handleShowDropdown = (dropdownActiveParam: string | null) => {
    setDropdownActiveState((prevState) =>
      prevState === dropdownActiveParam ? null : dropdownActiveParam,
    );
  };

  return (
    <section className="flex flex-row flex-nowrap mx-auto items-center px-[15px] sm:px-[50px] md:px-[90px] lg:px-[120px] xl:px-[171px] py-[20px] max-w-[1879px] justify-between bg-transparent">
      {/* backdrop-blur-sm bg-[#cecece80] */}
      <div className="w-[162px] h-[59px] relative">
        <img
          src={LogoBitSiber}
          alt="logo-bit-siber"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden flex-1 flex-row items-center justify-center gap-[40px] lg:flex w-full">
        {!!navbars?.length &&
          navbars?.map((itemParent, indexParent) => (
            <div key={indexParent}>
              {!!itemParent?.children?.length && (
                <div
                  className="w-full h-full flex flex-col items-center justify-center relative"
                  onClick={() => handleShowDropdown(itemParent?.label)}
                >
                  <div className="flex flex-row gap-2 items-center hover:cursor-pointer">
                    <span className="text-center uppercase font-[800] text-[14px] text-[#ffffff]">
                      {itemParent?.label}
                    </span>

                    <MdKeyboardArrowDown className="w-[24px] h-[24px] text-[#ffffff]" />
                  </div>
                  {dropdownActiveState === itemParent?.label && (
                    <div className="absolute top-[70%] flex flex-col w-fit h-fit bg-white text-black rounded-sm">
                      {itemParent?.children?.map(
                        (itemChildren, indexChildren) => (
                          <button
                            key={indexChildren}
                            type="button"
                            className="w-full h-fit flex items-center justify-start py-1 px-[20px] text-black hover:bg-[#072b72] hover:text-[#ffffff] border-b-2 last:border-none"
                          >
                            <span className="text-center uppercase font-[300] text-[14px]">
                              {itemChildren?.label}
                            </span>
                          </button>
                        ),
                      )}
                    </div>
                  )}
                </div>
              )}
              {!itemParent?.children?.length && (
                <button
                  type="button"
                  className="w-full h-full border-none outline-none"
                  onClick={() => handleChangePage(itemParent?.path)}
                >
                  <span className="text-center m-auto font-[300] text-[14px] text-[#d8d8d8]">
                    {itemParent?.label?.toUpperCase()}
                  </span>
                </button>
              )}
            </div>
          ))}
      </div>
      <div className="flex flex-row items-center justify-end">
        <button
          type="button"
          className="hidden flex-row gap-2 justify-center items-center outline-none border-none lg:flex"
        >
          <AiOutlineGlobal className="w-[24px] h-[24px] text-[#ffffff]" />

          <div className="flex flex-row gap-1 items-center">
            <span className="text-[#ffffff] font-[600] text-[14px] uppercase">
              EN
            </span>
            <MdKeyboardArrowDown className="w-[24px] h-[24px] text-[#ffffff]" />
          </div>
        </button>
        <button
          type="button"
          className="flex flex-row gap-2 justify-center items-center outline-none border-none lg:hidden"
        >
          <GiHamburgerMenu className="w-[24px] h-[24px] text-[#ffffff]" />
        </button>
      </div>
    </section>
  );
};

export default NavbarComponent;
