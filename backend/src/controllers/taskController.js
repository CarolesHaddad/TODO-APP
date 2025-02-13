// backend/src/controllers/taskController.js
const Task = require('../models/Task');

// Criar uma nova tarefa
exports.createTask = async (req, res) => {
    try {
        const { title, description, due_date } = req.body;
        const task = await Task.create({ title, description, due_date });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a tarefa' });
    }
};

// Buscar todas as tarefas
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as tarefas' });
    }
};

// Buscar uma tarefa pelo ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a tarefa' });
    }
};

// Atualizar uma tarefa
exports.updateTask = async (req, res) => {
    try {
        const { title, description, due_date } = req.body;
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
        
        task.title = title;
        task.description = description;
        task.due_date = due_date;
        await task.save();
        
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
    }
};

// Deletar uma tarefa
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
        await task.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar a tarefa' });
    }
};
