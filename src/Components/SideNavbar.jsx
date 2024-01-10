import CompanyLogoItem from "./CompanyLogoItem";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

const SideNavbar = () => {
  return (
    <div className="py-[1.6rem] px-[1rem] flex flex-col items-center gap-[1.6rem] bg-[#1E2640]">
      <NavTop />
      <NavBottom />
    </div>
  )
}

export default SideNavbar;