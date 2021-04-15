#Part1: Working with tasks

USE hyf_lesson2;

#Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT  INTO task (title, description, created, updated, due_date, status_id)
VALUES ('Making cheese cake','Happy to bake','2021-04-14 11:54:16','2021-04-14 11:56:16','2021-04-14 13:56:16',1);
INSERT INTO user_task(user_id,task_id)
VALUES (5, 36);

#Change the title of a task
UPDATE task
SET title = 'Making chocholate cake'
WHERE task.id = 36;
  
#Change a task due date
UPDATE task 
SET due_date = '2021-04-14 03:54:16'
WHERE task.id = 36;
  
#Change a task status
UPDATE task 
SET status_id= 2
WHERE task.id = 36;

#Mark a task as complete
UPDATE task 
SET status_id= 3
WHERE task.id = 36;
  
# Delete a task
DELETE FROM task
WHERE task.id = 36;
  
