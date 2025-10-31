class Task {
  @param { string } title
@param { string } description
@param { string } dueDate
@param { string } priority

constructor(title, description, dueDate, priority){
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;

  this.isComplete = false;

  this.id = Date.now().string(36) + Math.random().toString(36).substring(2)
}





};