import { Wallet } from "../assets/Icons";

const WalletCredits = () => {
  return (
    <div className="flex gap-[1.2rem] items-center">
      <div className="bg-white/[.1] p-[.6rem] rounded-[.4rem]">
        <Wallet height='2.4rem' width='2.4rem' />
      </div>
      <div className="flex flex-col gap-[.2rem] items-start">
        <p className="text-[1.3rem]/[1.6rem] text-white/[.8]">
          Available credits
        </p>
        <p className="text-[1.6rem]/[2.4rem] text-white font-medium">
          222.10
        </p>
      </div>
    </div>
  );
}

export default WalletCredits;