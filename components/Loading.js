import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full flex">
      <div className=" flex mx-auto">
        <Image className="loading" src="/images/loading.gif" alt="loading" width={400} height={160} />
      </div>
    </div>
  );
};

export default Loading;
