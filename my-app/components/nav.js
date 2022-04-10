import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4 "
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-1/5	 flex items-center">
        <a className="text-2xl font-semibold text-white" href="/">
          LOGO
        </a>
      </div>
      <div className="w-9/12 flex justify-start items-center text-white">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex ">
          <NavLink to="/contact">EVENTS</NavLink>
          <NavLink to="/about">FEATURES</NavLink>
          <NavLink to="/about">COMMUNITY</NavLink>
          <NavLink to="/about">CATALOGUE</NavLink>
        </div>
      </div>
      <div className="w-1/5	 flex justify-end items-center hexagon double">
        {/* <NavLink to="/about">picture</NavLink> */}
        {/* <div class="bg-indigo-300"> */}
        <img
          src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
          class="object-cover h-full w-full "
          alt=""
          style={{ position: "absolute" }}
        />
        {/* </div> */}
      </div>
    </nav>
  );
}