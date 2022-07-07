export default function HomeShowcase({ src }) {
  return (
    <div className="sm:hidden md:flex">
      <div className="w-full relative sm:h-80 md:h-[500px]">
        <div className="showcaseoverlay"></div>
        <div className="flex font-sans-serif">
          <div className="showcasetext">
            <h1>
              Welcome to <span className="text-red-600 shadow-sm  ">BESTPICS</span>
            </h1>
            <p>Get best pictures of all time </p>
          </div>

          <video autoPlay loop muted playsInline className="w-full sm:h-80 md:h-[500px] object-cover">
            <source src={`/videos/${src}`} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
