import Faq from "../../models/Faq.js";

export const getAllFaqs = async () => {
    try {
        return await Faq.findAll({
            where: { status: true },
            order: [['order_index', 'ASC']]
        });
    } catch (error) {
        throw new Error('Could not fetch FAQs');
    }
};