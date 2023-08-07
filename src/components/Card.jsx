import Image from "next/image";
import Link from "next/link";
import {AiOutlineLike} from "react-icons/ai"

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-500 sm:shadow-md rounded-lg sm:border sm:border-slate-400  transition-shadow group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={500}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <p className=" line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center gap-3 text-xl">
           <span> {result.release_date || result.first_air_date}</span>
           <span className="flex gap-2"> <AiOutlineLike></AiOutlineLike> {result.vote_count}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
