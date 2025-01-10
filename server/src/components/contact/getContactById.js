import Contact from '../../models/Contact.js';

export const getContactById = async (_, { id }) => {
    try {
        const contact = await Contact.findByPk(id);
        if (!contact) {
            throw new Error('Contact not found');
        }
        return contact;
    } catch (error) {
        throw new Error(`Failed to fetch contact: ${error.message}`);
    }
};