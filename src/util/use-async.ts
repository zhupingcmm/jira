import { useMountRef } from "./index";
import { useState, useCallback } from "react";
interface State<D> {
  error: Error | null;
  data: D | null;
  stat: "idle" | "loading" | "success" | "error";
}

const defaultStateInitialState: State<null> = {
  error: null,
  data: null,
  stat: "idle",
};

export const useAsync = <D>(initState?: State<D>) => {
  const [state, setState] = useState({
    ...defaultStateInitialState,
    ...initState,
  });
  const [retry, setRetry] = useState(() => () => {});
  const mountRef = useMountRef();

  const setData = useCallback((data: D) => {
    setState({
      data,
      error: null,
      stat: "success",
    });
  }, []);

  const setError = useCallback((error: Error) => {
    setState({
      error,
      data: null,
      stat: "error",
    });
  }, []);

  const run = useCallback(
    async (promise: Promise<D>, runConfig?: { retry: () => Promise<D> }) => {
      if (!promise || !promise.then) {
        throw new Error("请输入promise对象");
      }

      setRetry(() => () => {
        if (runConfig?.retry) {
          run(runConfig?.retry(), runConfig);
        }
      });
      setState((preState) => ({ ...preState, stat: "loading" }));

      return promise
        .then((res) => {
          if (mountRef.current) {
            setData(res);
          }
          return Promise.resolve(res);
        })
        .catch((e) => {
          setError(e);
          return Promise.reject(e);
        });
    },
    [setState, setRetry, mountRef]
  );

  return {
    isLoading: state.stat === "loading",
    isIdle: state.stat === "idle",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    run,
    setState,
    setData,
    retry,
    ...state,
  };
};
