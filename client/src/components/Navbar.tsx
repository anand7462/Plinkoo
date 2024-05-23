import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white z-50 border-gray-200 dark:bg-[#262522] borbder-b shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://i.pinimg.com/originals/31/e5/99/31e5998e06379ddf3e738fa6adf5c92c.png"
            className="h-12 rounded"
            alt="plinkoo Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Play Plinko Game
          </span>
        </Link>
        <Button
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-transparent"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <RxHamburgerMenu size={30} />
        </Button>{" "}
        <div
          className={`w-full lg:hidden flex flex-col md:w-auto items-center ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-default"
        >
          <Button
            className="bg-transparent mx-4 hover:bg-black w-[50%]"
            onClick={() => navigate("/simulation")}
          >
            Simulation
          </Button>
          <Button
            className="bg-transparent mx-4 hover:bg-black w-[50%]"
            onClick={() => navigate("/game")}
          >
            Game
          </Button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <Button
            className="bg-transparent mx-4 hover:bg-black"
            onClick={() => navigate("/simulation")}
          >
            Simulation
          </Button>
          <Button
            className="bg-transparent mx-4 hover:bg-black"
            onClick={() => navigate("/game")}
          >
            Game
          </Button>
        </div>
      </div>
    </nav>
  );
};
