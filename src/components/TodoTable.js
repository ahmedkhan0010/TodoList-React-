import TodoRowItem from "./TodoRowItem";

function todoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col ">#</th>
          <th scope="col ">Description</th>
          <th scope="col ">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            assignedTo={todo.assignedTo}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
export default todoTable;
