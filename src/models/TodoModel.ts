class TodoModel {
  id: number;
  description: string;
  assignedTo: string;

  constructor(id: number, description: string, assignedTo: string) {
    this.id = id;
    this.description = description;
    this.assignedTo = assignedTo;
  }
}
