import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const HeaderContent = sequelize.define('HeaderContent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    header_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'headers',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

export default HeaderContent;