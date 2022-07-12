import React from "react";
import { IdSelect } from "@src/components/id-select";
import { useUsers } from "@src/screens/project-list/hook.util";

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const users = useUsers();

  return <IdSelect options={users || []} {...props} />;
};
