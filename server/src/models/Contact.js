import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('new', 'read', 'responded'),
        defaultValue: 'new'
    },
    isArchived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    to_email:{
        type: DataTypes.STRING,
        defaultValue: true
    }
}, {
    timestamps: true,
    tableName: 'contacts',
    underscored: true
});

export default Contact;
