import Faq from "../../models/Faq.js";

export const getFaqsByCategory = async (_, { categoryId }) => {
    try {
        return await Faq.findAll({
            where: {
                category_id: categoryId,
                status: true
            },
            order: [['order_index', 'ASC']]
        });
    } catch (error) {
        throw new Error('Could not fetch FAQs by category');
    }
};