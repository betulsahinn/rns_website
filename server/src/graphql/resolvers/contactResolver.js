import { createContact } from '../../components/contact/createContact.js';
import { deleteContact } from '../../components/contact/deleteContact.js';
import { getAllContacts } from '../../components/contact/getAllContacts.js';
import { getContactById } from '../../components/contact/getContactById.js';

export const contactResolver = {
    Query: {
        getAllContacts,
        getContactById,
    },
    Mutation: {
        createContact,
        deleteContact
    }
};

export default contactResolver;