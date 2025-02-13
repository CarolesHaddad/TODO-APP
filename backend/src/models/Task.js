// backend/src/models/Task.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Task = db.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    timestamps: true
});

module.exports = Task;
