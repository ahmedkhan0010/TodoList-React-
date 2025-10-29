function TodoRowItem(props) {
  return (
    <tr onClick={() => props.deleteTodo(props.id)}>
      <th scope="row ">{props.id}</th>
      <td>{props.description}</td>
      <td>{props.assignedTo}</td>
    </tr>
  );
}

export default TodoRowItem;
