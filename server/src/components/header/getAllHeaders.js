import Header from "../../models/Header.js";

export const getAllHeaders = async (_, args) => {
    try {
        return await Header.findAll({
            include: ['headerContents'],
            order: [
                ['order_index', 'ASC'],
                ['created_at', 'ASC']
            ]
        });
    } catch (error) {
        console.error('Error fetching headers:', error);
        throw new Error('Headers could not be fetched');
    }
};