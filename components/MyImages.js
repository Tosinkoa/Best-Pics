import Image from 'next/image';

export default function MyImages({ data }) {
  return (
    <div>
      <img
        src={data.webformatURL}
        alt={data.tags.split(' ').slice(0, 1)}
        width={500}
        height={400}
      />
    </div>
  );
}
