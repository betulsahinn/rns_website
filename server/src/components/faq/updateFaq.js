import Faq from "../../models/Faq.js";

export const updateFaq = async (_, { id, input }) => {
    try {
        await Faq.update(input, {
            where: { id }
        });

        const faq = await Faq.findByPk(id);

        return {
            message: "FAQ successfully updated",
            success: true,
            faq: faq
        };
    } catch (error) {
        return {
            message: error.message || 'FAQ could not be updated',
            success: false,
            faq: null
        };
    }
};