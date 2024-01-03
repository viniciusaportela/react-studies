const DataFetching = ({ data }: any) => {
  console.log("body of Data Fetching")
  const item = data.read();

  return (
    <div>
      Fetched: {item}
    </div>
  );
}

export default DataFetching;