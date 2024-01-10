import { useState } from "react";
import {
  Home,
  Orders,
  Products,
  Delivery,
  Marketing,
  Analytics,
  Payments,
  Tools,
  Discounts,
  Audience,
  Appearance,
  Plugins,
} from "../assets/Icons";
import NavButton from "./NavButton";

const Pages = () => {
  const [selectedId, setSelectedId] = useState(7);

  const handleOnBtnClick = (id) => {
    console.log({ id });
    setSelectedId(id);
  };

  const navButtons = [
    {
      id: 1,
      navBtnName: "Home",
      navBtnIcon: <Home width="2rem" height="2rem" />,
    },
    {
      id: 2,
      navBtnName: "Orders",
      navBtnIcon: <Orders width="2rem" height="2rem" />,
    },
    {
      id: 3,
      navBtnName: "Products",
      navBtnIcon: <Products width="2rem" height="2rem" />,
    },
    {
      id: 4,
      navBtnName: "Delivery",
      navBtnIcon: <Delivery width="2rem" height="2rem" />,
    },
    {
      id: 5,
      navBtnName: "Marketing",
      navBtnIcon: <Marketing width="2rem" height="2rem" />,
    },
    {
      id: 6,
      navBtnName: "Analytics",
      navBtnIcon: <Analytics width="2rem" height="2rem" />,
    },
    {
      id: 7,
      navBtnName: "Payments",
      navBtnIcon: <Payments width="2rem" height="2rem" />,
    },
    {
      id: 8,
      navBtnName: "Tools",
      navBtnIcon: <Tools width="2rem" height="2rem" />,
    },
    {
      id: 9,
      navBtnName: "Discounts",
      navBtnIcon: <Discounts width="2rem" height="2rem" />,
    },
    {
      id: 10,
      navBtnName: "Audience",
      navBtnIcon: <Audience width="2rem" height="2rem" />,
    },
    {
      id: 11,
      navBtnName: "Appearance",
      navBtnIcon: <Appearance width="2rem" height="2rem" />,
    },
    {
      id: 12,
      navBtnName: "Plugins",
      navBtnIcon: <Plugins width="2rem" height="2rem" />,
    },
  ];

  return (
    <div className="flex w-full grow flex-col items-start gap-[.4rem]">
      {navButtons &&
        Array.isArray(navButtons) &&
        navButtons.map(({ id, navBtnName, navBtnIcon }) => {
          return (
            <NavButton
              onClickHandler={handleOnBtnClick}
              selected={selectedId == id}
              key={id}
              id={id}
              name={navBtnName}
              icon={navBtnIcon}
            />
          );
        })}
    </div>
  );
};
export default Pages;
