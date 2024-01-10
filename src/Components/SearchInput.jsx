import { Fragment } from "react";
import { Search } from "../assets/Icons";

const SearchInput = (props) => {
  const { placeholder, name, onChangeHandler, value } = props || {};
  return (
    <div className="flex grow items-center relative">
      <input
        type="text"
        className="flex grow items-center pl-[3.6rem] pr-[1.6rem] py-[.9rem] focus:outline-none font-[inherit] text-[1.5rem]/[2.2rem] rounded-[.6rem] bg-[#F2F2F2]"
        placeholder={placeholder || "Search here..."}
        id={name || "searchInputText"}
        onChange={onChangeHandler}
        value={value}
        name={name || "searchInputText"}
      />
      <span className="absolute pl-[1.6rem] ">
        <Search width="1.6rem" height="1.6rem" />
      </span>
    </div>
  );
};

export default SearchInput;
