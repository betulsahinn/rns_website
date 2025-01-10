import Faq from "../../models/Faq.js";

export const deleteFaq = async (_, { id }) => {
    try {
        const faq = await Faq.findByPk(id);

        if (!faq) {
            throw new Error('FAQ not found');
        }

        await faq.destroy();

        return {
            message: "FAQ successfully deleted",
            success: true
        };
    } catch (error) {
        return {
            message: error.message || 'FAQ could not be deleted',
            success: false
        };
    }
};