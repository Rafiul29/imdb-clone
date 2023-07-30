import Link from "next/link";

const Navbar = () => {
  return (
    <div className="dark:bg-gray-600 bg-amber-100 lg:text-lg h-20 flex justify-center items-center ">
      <div className="wrapper flex justify-center items-center gap-5">
        
        <Link
          href="/?genre=fetchTopRated"
          className="link-item text-2xl font-semibold  hover:text-amber-600 duration-300"
        >
          Trending
        </Link>

        <Link
          href="/?genre=fetchTopRated"
          className="text-2xl font-semibold hover:text-amber-600 duration-300"
        >
          Top Rated
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
