import React from "react";
import { useProjectUser } from "screens/project-list/util";
import { IdSelect } from "./id-select";

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const users = useProjectUser();

  return <IdSelect options={users || []} {...props} />;
};
