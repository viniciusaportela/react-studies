import {memo} from "react";
import jsonList from "./list.json";

function expensiveFunction(duration: number) {
  const endTime = Date.now() + duration;

  while (Date.now() < endTime) {

  }
}

export const VeryExpensiveList = memo(function({ query }: any) {
  const list = jsonList.filter((item) => item.includes(query))

  return <div>{list.map((item: any) => <SlowItem item={item}/>)}</div>
});

export const SlowItem = ({ item }: any) => {
  console.log("start of expensive")
  expensiveFunction(1000);
  console.log("end of expensive")

  return <li key={item}>{item}</li>
}