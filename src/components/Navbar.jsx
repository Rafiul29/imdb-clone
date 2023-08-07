import Link from "next/link";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="dark:bg-gray-600 bg-amber-100 lg:text-lg h-20 flex justify-center items-center ">
      <div className="wrapper flex justify-center items-center gap-5">
    
        <NavbarItem title="Trending" param="fetchTrending"/>
        
        <NavbarItem title="Top Rated" param="fetchTopRated"/>

      </div>
    </div>
  );
};

export default Navbar;
