import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Header = sequelize.define('headers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    parent_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'headers',
            key: 'id'
        }
    },
    order_index: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    freezeTableName: true,
    underscored: true
})
export default Header;