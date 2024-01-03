const DataFetchingError = ({ data }: any) => {
  console.log("body of Data Fetching Error")
  const item = data.read();

  return (
    <div>
      Fetched: {item}
    </div>
  );
}

export default DataFetchingError;