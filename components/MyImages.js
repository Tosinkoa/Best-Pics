export default function MyImages({ data }) {
  return (
    <div className='myimage'>
      {data.map((mydata, i) => (
        <div key={i} className='oneimage'>
          <img
            src={mydata.webformatURL}
            alt={mydata.tags.split(' ').slice(0, 1)}
          />
          <p>{mydata.tags.split(' ').slice(1)}</p>
        </div>
      ))}
    </div>
  );
}
