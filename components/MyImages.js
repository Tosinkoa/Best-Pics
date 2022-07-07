import Link from "next/link";
import Image from "next/image";

export default function MyImages({ id, src, alt, width, height }) {
  return (
    <div>
      <Link href="/[id]" as={`${id}`}>
        <div className="eachimage">
          <Image className="rounded-md " src={src} alt={alt} width={width} height={height} objectFit="cover" />
          <p className="imagetitle">{alt.split(",")[0]}</p>
        </div>
      </Link>
    </div>
  );
}
