import {useMemo} from "react";

export const useFetch = (willThrowError?: boolean, refetchTrigger?: any) => {
  let result: any = null;
  let error: any = null;
  let status = 'pending';

  const promise = useMemo(() => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willThrowError) return reject("Thrown Error")
      resolve("Resolved!")
    }, 1000);
  }), [refetchTrigger]);

  promise.then((res) => {
    result = res;
    status = 'success';
  }).catch((err) => {
    error = err;
    status = 'error';
  });

  return { read: () => {
    if (status === 'pending') {
      throw promise;
    } else if (status === 'error') {
      throw error;
    } else if (status === 'success') {
      return result;
    }
  }};
}