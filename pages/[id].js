const View = (picID) => {
  return (
    <div>
      <p>{picID.id}</p>
      <h1>View</h1>
    </div>
  );
};

export default View;

export const getServerSideProps = async (params) => {
  const key = process.env.My_KEY;
  const res = await fetch(
    `https://pixabay.com/api/?key=${key}&id=${params.id}}`
  );
  const { picID } = await res.json();
  console.log(hits);
  return {
    props: { picID },
  };
};
