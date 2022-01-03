export default function MyImages({ data, isLoading }) {
  return (
    <div>
      <h1 className='pagetitle'>Pictures</h1>
      <h1>{isLoading}</h1>
      <div className='myimage'>
        {data.map((mydata, i) => (
          <div key={i} className='oneimage'>
            <img
              src={mydata.webformatURL}
              alt={mydata.tags.split(',').slice(0, 1)}
            />
            <p>{mydata.tags.toUpperCase().split(',').slice(0, 1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
