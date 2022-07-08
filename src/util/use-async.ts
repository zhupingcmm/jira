import { useState } from "react";
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

  const setData = (data: D) => {
    setState({
      data,
      error: null,
      stat: "success",
    });
  };

  const setError = (error: Error) => {
    setState({
      error,
      data: null,
      stat: "error",
    });
  };

  const run = async (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请输入promise对象");
    }
    setState({ ...state, stat: "loading" });

    return promise
      .then((res) => {
        console.log(res);
        setData(res);
        return res;
      })
      .catch((e) => {
        setError(e);
        return e;
      });
  };

  return {
    isLoading: state.stat === "loading",
    isIdle: state.stat === "idle",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    run,
    setState,
    setData,
    ...state,
  };
};
