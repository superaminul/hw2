
const projects = [
    {todo: "Homework", done: false},
    {todo: "Lunch", done: true},
    {todo: "Dinner", done: false},
    {todo: "Work", done: true},
    {todo: "assignment", done: false}
];

const completedTask = projects.filter((todo) => todo.done === true);
const onGoing = projects.filter((todo) => todo.done === false);


console.log("DONE: ");
completedTask.forEach((task,index) => {console.log(`${index+1}. ${task.todo}`)});

console.log("\nOnGoing: ");
onGoing.forEach((task,index) => {console.log(`${index+1}. ${task.todo}`)});