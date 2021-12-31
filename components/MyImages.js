import Card from './Card';

export default function MyImages({ data }) {
  return (
    <div className='myimage'>
      {data.map((mydata, i) => (
        <Card key={i} className='oneimage'>
          <img
            src={mydata.webformatURL}
            alt={mydata.tags.split(' ').slice(0, 1)}
          />
        </Card>
      ))}
    </div>
  );
}
