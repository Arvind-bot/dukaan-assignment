import { ChevronDown } from '../assets/Icons';
import companyLogo from '../assets/companyLogo.png';
const CompanyLogoItem = () => {
  return (
    <div className='w-[19.2rem] h-[4.2rem] flex gap-[1.2rem] items-center'>
      <div className='h-[4rem] w-[4rem] rounded-[.4rem] bg-white relative'>
        <div className='cursor-pointer absolute h-[3.9rem] w-[3.9rem] top-[.05rem] left-[.05rem]'>
          <img src={companyLogo} className="" alt="nishyan logo" />
        </div>
      </div>
      <div className='flex flex-col items-start gap-[.4rem] grow'>
        <p className='text-2xl text-white leading-[2.2rem] font-medium'>
          Nishyan
        </p>
        <div className='cursor-pointer underline underline-offset-2 decoration-[.5px] text-white/[.8] text-[1.3rem] leading-[1.6rem]'>
          Visit store
        </div>
      </div>
      <div className='cursor-pointer'>
        <span>
          <ChevronDown width='2rem' height='2rem'/>
        </span>
      </div>
    </div>
  );
}
export default CompanyLogoItem;