import Contact from '../../models/Contact.js';

export const deleteContact = async (_, { id }) => {
    try {
        const contact = await Contact.findByPk(id);

        if (!contact) {
            throw new Error('Contact not found');
        }

        await contact.destroy();

        return {
            success: true,
            message: "Contact deleted successfully",
            contact: null
        };
    } catch (error) {
        throw new Error(`Failed to delete contact: ${error.message}`);
    }
};