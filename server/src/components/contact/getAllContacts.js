import Contact from '../../models/Contact.js';

export const getAllContacts = async () => {
    try {
        const contacts = await Contact.findAll({
            order: [['created_at', 'DESC']]
        });
        return contacts;
    } catch (error) {
        throw new Error(`Failed to fetch contacts: ${error.message}`);
    }
};
