

function filterTasksByDueDate(tasks, due_date) {
    return tasks.filter(task => task.due_date.valueOf() === due_date.valueOf());
}

// test cases

tasks = [
    { id: 1, title: "Task 1", due_date: new Date("2023-06-01") },
    { id: 2, title: "Task 2", due_date: new Date("2023-06-02") },
    { id: 3, title: "Task 3", due_date: new Date("2023-06-01") },
    { id: 4, title: "Task 4", due_date: new Date("2023-06-03") },
    { id: 5, title: "Task 5", due_date: new Date("2023-06-03") },
    { id: 6, title: "Task 6", due_date: new Date("2023-06-04") },
    { id: 7, title: "Task 7", due_date: new Date("2023-06-02") },
];


console.log(filterTasksByDueDate(tasks, new Date('2023-06-02'))); // [{ id: 2, title: "Task 2", due_date: new Date("2023-06-02") }, { id: 7, title: "Task 7", due_date: new Date("2023-06-02") }]
console.log(filterTasksByDueDate(tasks, new Date('2023-06-01'))); // [{ id: 1, title: "Task 1", due_date: new Date("2023-06-01") }, { id: 3, title: "Task 3", due_date: new Date("2023-06-01") }]   
console.log(filterTasksByDueDate(tasks, new Date('2023-06-03'))); // [{ id: 4, title: "Task 4", due_date: new Date("2023-06-03") }, { id: 5, title: "Task 5", due_date: new Date("2023-06-03") }]