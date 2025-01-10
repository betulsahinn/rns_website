import Header  from "../../models/Header.js";

export const deleteHeader = async (_, { id }) => {
    try {
        const deleted = await Header.destroy({
            where: { id }
        });

        if (deleted > 0) {
            return {
                success: true,
                message: "Header successfully deleted",
                header: null
            };
        }

        return {
            success: false,
            message: "Header not found",
            header: null
        };
    } catch (error) {
        return {
            success: false,
            message: "Header could not be deleted",
            header: null
        };
    }
};