#Part 3: More queries

USE hyf_lesson2;

#Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.name, task.title, user.email
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
WHERE user.email LIKE "%@spotify.com";

#Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name, task.title, status.name
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
JOIN status ON status.id = task.status_id
WHERE user.name = "Donald Duck" AND status.name = "Not started";

#Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT user.name, task.title, task.created
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
WHERE user.name = "Maryrose Meadows" AND month(task.created) = 9;

#Find how many tasks where created in each month
SELECT COUNT(month(task.created)) AS tasks_created, month(task.created) AS month
FROM task
GROUP BY month(task.created);






