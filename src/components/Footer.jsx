import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flex text-white items-center justify-between py-4 px-4 bg-slate-800">
        <Link className="text-4xl font-bold" to={"/"}>
          Movie
        </Link>
        <p className="font-bold">All data provided by themovie</p>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
