import {useDeferredValue, useState} from "react";
import SlowList from "./SlowList";

export function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );

  // const [query, setQuery] = useState("");
  // const deferredQuery = useDeferredValue(query);
  //
  // // Indicate that the list is stale if it doesn't match the query
  // const isStale = deferredQuery !== query;
  //
  // console.log(query, deferredQuery, isStale)
  //
  // const handleChange = (event: any) => {
  //   setQuery(event.target.value);
  // };
  //
  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={query}
  //       onChange={handleChange}
  //       placeholder="Search"
  //     />
  //     {isStale && <>Loading...</>}
  //     <ul>
  //       <VeryExpensiveList query={deferredQuery} />
  //     </ul>
  //   </>
  // );
}