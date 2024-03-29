const NavButton = (props) => {
  const { name, icon, id, onClickHandler, selected } = props || {};
  return (
    <div onClick={() => onClickHandler(id)} className={`${selected ? 'bg-white/[.1] rounded-[.4rem] opacity-100' : 'opacity-80'} text-white cursor-pointer flex gap-[1.2rem] px-[1.6rem] py-[.8rem] w-full`}>
      <div>
        {icon}
      </div>
      <p className="text-[1.4rem]">{name}</p>
    </div>
  );
}

export default NavButton;