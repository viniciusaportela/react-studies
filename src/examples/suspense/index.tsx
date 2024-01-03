import {lazy} from "react";

export const SeparatedScreen = lazy(() => {
  console.log("body of lazy executed")
  return import("./SeparatedScreen")
})

export const SeparatedPromise = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("body of promise executed")
      resolve({ default: (() => <div>From promise!</div>) as never })
    }, 3000)
  })
})