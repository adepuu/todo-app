import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="py-6 px-0 flex justify-between w-full fixed top-0 z-10 bg-primary">
      <h1 className="m-0 text-white text-2xl font-bold ml-[18px]">TODO APP</h1>
      <img className="mr-[18px]" height={32} width={32} src="/calendar.png" alt="calendar" />
    </header>
  );
};

export default Header;
