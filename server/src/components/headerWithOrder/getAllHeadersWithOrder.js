import Header from "../../models/Header.js";
import { Op } from "sequelize";

export const getAllHeadersWithOrder = async (_, args) => {
    try {
        console.log('Starting getAllHeadersWithOrder query...');

        const subHeaders = await Header.findAll({
            where: {
                parent_id: {
                    [Op.not]: null
                }
            },
            attributes: ['id', 'title', 'slug', 'parent_id', 'order_index'],
            order: [
                ['order_index', 'ASC']
            ],
            raw: true
        });

        console.log('Query results:', subHeaders);

        if (!subHeaders) {
            throw new Error('No headers found');
        }

        return subHeaders;

    } catch (error) {
        console.error('Detailed error in getAllHeadersWithOrder:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });

        if (error.name === 'SequelizeConnectionError') {
            throw new Error('Database connection error');
        }

        if (error.name === 'SequelizeValidationError') {
            throw new Error('Data validation error');
        }

        throw new Error(`Failed to fetch headers: ${error.message}`);
    }
};