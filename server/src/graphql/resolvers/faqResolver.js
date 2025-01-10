import { createFaq } from '../../components/faq/createFaq.js';
import { updateFaq } from '../../components/faq/updateFaq.js';
import { deleteFaq } from '../../components/faq/deleteFaq.js';
import { getAllFaqs } from '../../components/faq/getAllFaqs.js';
import { getFaqsByCategory } from '../../components/faq/getFaqsByCategory.js';

export const faqsResolver = {
    Query: {
        getAllFaqs: getAllFaqs,
        getFaqsByCategory: getFaqsByCategory,
    },
    Mutation: {
        createFaq: createFaq,
        updateFaq: updateFaq,
        deleteFaq: deleteFaq,
    }
};

export default faqsResolver;