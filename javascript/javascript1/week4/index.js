//Voice assistant
const user = { todo: [] };
function getReply(command) {
    let todoItem;

    if (command.startsWith('Hello my name')) {
        const splitElements = command.split(' ');
        const indexOfName = splitElements.length - 1;
        user['myName'] = splitElements.slice(indexOfName);
        return `Nice to meet you ${user.myName}`;
    }
    else if ('What is my name' == command) {
        return `Your name is ${user['myName']}`;
    }
    else if (command.startsWith("Add") && command.endsWith("to my todo")) {
        todoItem = command.split(' ');
        const sliceElements = todoItem.slice(1, todoItem.length - 3).join(' ');
        user.todo.push(sliceElements);
        return `${sliceElements} added to your todo`;
    }
    else if (command.startsWith("Remove") && command.endsWith("for my todo")) {
        todoItem = command.split(' ');
        const sliceElements = (todoItem.slice(1, todoItem.length - 3)).join(' ');
        const index = user.todo.indexOf(sliceElements);
        if (index > -1) {
            const itemToDelete = user.todo.splice(index, 1);
            return `removed ${itemToDelete} from your todo`;
        }
    }
    else if ('What is on my todo?' == command) {
        const numberOfItemsOnTodo = user.todo.length;
        return `your to have ${numberOfItemsOnTodo} todos - ${user.todo}`;
    }
    else if ('What day is it today?' == command) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dateObj = new Date();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const date = dateObj.getDate();
        return `${date} ${month} ${year}`;
    }
    else if (command.startsWith("what is")) {
        let regExp = /\d [\+\/\*\-]/g;
        if (regExp.test(command)) {
            const operation = command.slice(7);
            return eval(operation);
        }
    }
    else if (command.startsWith('Set a timer') && command.endsWith('minutes')) {
        const splitElements = command.split(' ');
        const indexOfTime = splitElements.length - 2;
        const time = splitElements.splice(indexOfTime, 1);
        const oneMinuteToMilliseconds = 60000;
        const timeToMilliseconds = time * oneMinuteToMilliseconds
        setTimeout(timerFunction, timeToMilliseconds);
        return `timer set for ${time} minutes`;
        function timerFunction() {
            console.log(`timer done`);
        }
    }

}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply("Add laundry to my todo"));
console.log(getReply('Remove laundry for my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 6 + 5'));
console.log(getReply('Set a timer for 2 minutes'));