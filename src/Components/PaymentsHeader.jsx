import { useState } from "react";
import { DownPointer, Group, Help, TriangleDown } from "../assets/Icons";
import SearchInput from "./SearchInput";
const PaymentsHeader = () => {
  const [searchText, setSearchText] = useState("");
  const handleOnTextChange = (e) => {
    console.log({ e, n: e.target.name, v: e.target.value });
    const { target } = e || {};
    const { name, value } = target || {};
    if (name == "searchText") {
      setSearchText(value);
    }
  };

  return (
    <header className="flex w-full px-[3.2rem] py-[1.2rem] items-center gap-[1.6rem] border-b-[.1rem] border-solid border-[#D9D9D9]">
      <div className="flex items-center gap-[1.6rem] grow">
        <p className="text-[#1A181E] text-[1.5rem]/[2.2rem]">Payments</p>
        <div className="flex items-center gap-[.6rem]">
          <div className="cursor-pointer">
            <Help height="1.4rem" width="1.4rem" />
          </div>
          <p className="text-[#4D4D4D] text-[1.2rem]/[1.6rem]">How it works</p>
        </div>
      </div>
      <div className="flex grow">
        <SearchInput
          value={searchText}
          placeholder={"Search features, tutorials, etc."}
          name="searchText"
          onChangeHandler={handleOnTextChange}
        />
      </div>
      <div className="flex grow justify-end">
        <div className="flex gap-[1.2rem]">
          <button className="w-[4rem] h-[4rem] rounded-full bg-[#E6E6E6] relative">
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Group width="2rem" height="2rem" />
            </span>
          </button>
          <button className="w-[4rem] h-[4rem] rounded-full bg-[#E6E6E6] relative">
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <TriangleDown width="1.6rem" height="1.6rem" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default PaymentsHeader;
