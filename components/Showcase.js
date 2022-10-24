export default function HomeShowcase({ src, showcaseText }) {
  return (
    <div className="w-full relative sm:h-80 -mt-12 md:h-[500px]">
      <div className="showcaseoverlay"></div>
      <div className="flex font-sans-serif">
        {showcaseText}
        <video autoPlay loop muted disablePictureInPicture controlsList="nodownload" className="w-full sm:h-80 md:h-[500px] object-cover">
          <source src={`/videos/${src}`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
