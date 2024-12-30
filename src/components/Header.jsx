import Background from "../assets/img/hero.jpeg";
const Header = () => {
  return (
    <header>
      <div
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${Background})`,
          height: "600px",
          backgroundPositionY: "-50px",
        }}
      >
        <div className="absolute bottom-0 bg-black min-h-50 w-full"></div>
        <nav className="pt-2 text-xl text-white text-center">
          <a href="#">Movie</a>
        </nav>
        <div className="ps-10 absolute bottom-44 flex flex-col gap-4">
          <h1 className="text-white text-5xl font-bold">Judul</h1>
          <p className="text-white text-justify w-2/5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            cumque, harum quos fuga incidunt eligendi maxime, provident hic
            pariatur soluta nulla porro repudiandae impedit recusandae corrupti
            quod totam minus blanditiis explicabo quibusdam facilis. Ipsam eum
            ipsa rem, modi sequi nostrum.
          </p>
          <div className="flex gap-4">
            <h3 className="text-2xl font-bold text-white">2018</h3>
            <p className="bg-blue-400 px-2 py-1 text-white rounded inline-block ">
              Action
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
