import { useNavigate } from "react-router-dom";
import LogoBitSiber from "../../assets/images/logo-bit-siber.png";
import { navbars } from "../../constants/navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [dropdownActiveState, setDropdownActiveState] = useState<string | null>(
    null,
  );

  const handleChangePage = (pathParam: string) => {
    console.log(pathParam);
    navigate(pathParam);
  };

  const handleShowDropdown = (dropdownActiveParam: string | null) => {
    setDropdownActiveState((prevState) =>
      prevState === dropdownActiveParam ? null : dropdownActiveParam,
    );
  };

  return (
    <section className="grid grid-cols-3 content-center px-[171px] py-[20px]">
      <div className="w-[162px] h-[59px]">
        <img
          src={LogoBitSiber}
          alt="logo-bit-siber"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-row flex-nowrap gap-[40px]">
        {!!navbars?.length &&
          navbars?.map((itemParent, indexParent) => (
            <div key={indexParent}>
              {!!itemParent?.children?.length && (
                <div
                  className="w-full h-full flex flex-col items-center justify-center relative"
                  onClick={() => handleShowDropdown(itemParent?.label)}
                >
                  <div className="flex flex-row gap-2 items-center hover:cursor-pointer">
                    <span className="text-center uppercase font-[800] text-[1rem] text-[#ffffff]">
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
                            <span className="text-center uppercase font-[300] text-[1rem]">
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
                  <span className="text-center m-auto font-[300] text-[1rem] text-[#d8d8d8]">
                    {itemParent?.label?.toUpperCase()}
                  </span>
                </button>
              )}
            </div>
          ))}
      </div>
      <div></div>
    </section>
  );
};

export default NavbarComponent;
