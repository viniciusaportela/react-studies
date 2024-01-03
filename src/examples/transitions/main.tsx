import {startTransition, useState} from "react";
import SlowList from "./SlowList";

export function App() {
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={e => startTransition(() => setText(e.target.value))} />
      <SlowList text={text} />
    </>
  );
}