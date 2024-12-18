const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const query = {};
        if(req.query.isDone){
            query.isDone = req.query.isDone;
        } if (req.query.title){
            query.title = req.query.title;
        } if (req.query.deadline){
            query.deadline = req.query.deadline;
        }
        let filteredTasks = await Task.find(query);
        res.status(201).json(filteredTasks);
    } catch (err) {
        res.status(500).json({ error: "Error fetching tasks" });
    }
};

const getTaskById = async (req, res) => {
    try {
        const neededTask = await Task.findById(req.params.id);
        if (neededTask) {
            res.json(neededTask);
        } else{
            res.status(404).send('Not found')
        }
    } catch (err) {
        res.status(404).json({ error: "Error fetching task" });
    }
};

const postTask = async (req, res) => {
    try {
        const {title, deadline, isDone} = req.body;

        const newTask = new Task({
            title,
            deadline,
            isDone
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: "Error adding task" });
    }
};

const putTask = async (req, res) => {
    const updatedData = req.body;
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, updatedData);
        if(task) res.status(201).json(task);
        else res.status(404).send("No task found");
    } catch (err) {
        res.status(500).json({ error: "Error updating task" });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(task){
            res.status(201).send("Task deleted.")
        }else{
            res.status(404).send('No task found.')
        }
    } catch (err) {
        res.status(500).json({ error: "Error deleting task" });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    postTask,
    putTask,
    deleteTask
}