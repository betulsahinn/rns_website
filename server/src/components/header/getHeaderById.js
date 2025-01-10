import Header  from "../../models/Header.js";

export const getHeaderById = async (_, args,{ id }) => {
    try {
        const header = await Header.findByPk(id, {
            include: ['headerContents']
        });
        return header;
    } catch (error) {
        throw new Error('Header not found');
    }
};