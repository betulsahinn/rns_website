import Faq_Model from "../../models/Faq.js";

export const createFaq = async (_, { input }) => {
    try {
        const newFaq = await Faq_Model.create({
            question: input.question,
            answer: input.answer,
            order_index: input.order_index,
            status: input.status,
            category_id: input.category_id
        });

        if (!newFaq) {
            throw new Error('FAQ creation failed');
        }

        return {
            message: "FAQ created successfully",
            success: true,
            faq: newFaq
        };

    } catch (error) {
        throw new Error(`FAQ could not be created: ${error.message}`);
    }
};
