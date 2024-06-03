import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br /> place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          ... will help you find your home fast, easy and comfortable. Our
          expert support are always available
          <br />
          We have a wide range of properties for you to choose from
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Lets get started now...
        </Link>
      </div>

      <div className=""></div>

      <div className=""></div>
    </div>
  );
}
