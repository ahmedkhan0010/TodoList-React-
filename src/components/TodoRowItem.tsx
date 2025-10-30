import React from "react";

export const TodoRowItem: React.FC<{
  id: number;
  description: string;
  assignedTo: string;
  deleteTodo: Function;
}> = (props) => {
  return (
    <tr onClick={() => props.deleteTodo(props.id)}>
      <th scope="row ">{props.id}</th>
      <td>{props.description}</td>
      <td>{props.assignedTo}</td>
    </tr>
  );
};
