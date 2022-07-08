import { User } from "../../types";
import { Project } from "@src/types";
import { useDebounce } from "@src/util";
import { useHttp } from "@src/util/http";
import { useAsync } from "@src/util/use-async";
import { useEffect } from "react";

export const useProject = (
  param: Partial<Pick<Project, "name" | "personId">>
) => {
  const client = useHttp();
  const { data: list, isLoading, run } = useAsync<Project[]>();
  const debounceValue = useDebounce(param, 500);
  useEffect(() => {
    const tempVal = { ...debounceValue };
    if (tempVal?.personId === 0) {
      delete tempVal.personId;
    }
    run(client("projects", { data: tempVal }));
  }, [debounceValue]);
  return { list, isLoading };
};

export const useUser = () => {
  const client = useHttp();
  const { data: users, run } = useAsync<User[]>();

  useEffect(() => {
    run(client("users"));
  }, []);

  return users;
};
