import {SeparatedPromise, SeparatedScreen} from "./index";
import {Suspense, useState} from "react";
import DataFetching from "./DataFetching";
import {useFetch} from "./emulateFetch";
import DataFetchingError from "./DataFetchingError";
import {ErrorBoundary} from "./ErrorBoundary";
import {KeepOldData} from "./KeepOldData";

/*
* The order of execution is:
* body of App.tsx executed
* body of lazy executed
* body of SeparatedScreen.tsx executed
* */
export const App = () => {
  const [retrigger, setRetrigger] = useState(0);

  const data = useFetch();
  const dataError = useFetch(true);
  const updatableData = useFetch(false, retrigger);

  console.log("body of App.tsx executed");

  return <div style={{ display: "flex", flexDirection: "column" }}>
    <Suspense fallback={<div>Loading...</div>}>
      <SeparatedScreen />
    </Suspense>
    <Suspense fallback={<div>Loading Promise... </div>}>
      <SeparatedPromise />
    </Suspense>
    <Suspense fallback={<div>Fetching Data... </div>}>
      <DataFetching data={data}/>
    </Suspense>
    <ErrorBoundary>
      <Suspense fallback={<div>Fetching Data with error... </div>}>
        <DataFetchingError data={dataError}/>
      </Suspense>
    </ErrorBoundary>
    <Suspense fallback={<div>Loading KeepOldData</div>}>
      <KeepOldData data={updatableData} onUpdate={() => setRetrigger(old => old + 1)}/>
    </Suspense>
  </div>
}