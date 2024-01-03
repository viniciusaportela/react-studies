import {useDeferredValue, useState} from "react";

export const KeepOldData = ({ data, onUpdate }: any) => {
  const deferred = useDeferredValue(data.read())

  return <div>{deferred} <button onClick={() => onUpdate()}>update</button></div>
}