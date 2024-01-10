import CompanyLogoItem from "./CompanyLogoItem";
import Pages from "./Pages";

const NavTop = () => {
  return (
    <div className="flex grow flex-col items-center gap-[2.4rem] w-full">
      <CompanyLogoItem />
      <Pages />
    </div>
  );
};
export default NavTop;
