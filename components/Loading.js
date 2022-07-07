import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image className="loading" src="/images/loading.gif" alt="loading" width={400} height={160} />
    </div>
  );
};

export default Loading;
