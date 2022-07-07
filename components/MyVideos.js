const MyVideos = ({ src }) => {
  return (
    <div className="w-full mt-6 flex md:px-10 lg:px-16 sm:px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-center place-content-center gap-4 ">
        <div className="p-4 shadow-xl w-fit rounded-md flex">
          <iframe allowFullScreen={true} src={src}></iframe>
        </div>
      </div>
    </div>
  );
};

export default MyVideos;
