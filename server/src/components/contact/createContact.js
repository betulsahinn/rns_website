import Contact from '../../models/Contact.js';

export const createContact = async (_, { input }) => {
    try {
        const newContact = await Contact.create({
            full_name: input.full_name,
            email: input.email,
            phone: input.phone,
            message: input.message,
            to_email: "iletisim@ronesis.com.tr",
        });

        if (!newContact) {
            throw new Error('Contact creation failed');
        }

        return {
            success: true,
            message: "İletişim formu başarıyla gönderildi",
            contact: newContact
        };
    } catch (error) {
        throw new Error(`İletişim formu gönderilemedi: ${error.message}`);
    }
};