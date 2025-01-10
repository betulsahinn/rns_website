import Header from "../../models/Header.js";

export const updateHeader = async (_, { id, input }) => {
    try {
        await Header.update(input, {
            where: { id }
        });

        const header = await Header.findByPk(id, {
            include: ['headerContents']
        });

        return {
            message: "Header successfully updated",
            success: true,
            header: header
        };
    } catch (error) {
        return {
            message: error.message || 'Header could not be updated',
            success: false,
            header: null
        };
    }
};