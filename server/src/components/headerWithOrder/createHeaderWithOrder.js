import Header from "../../models/Header.js";

export const createHeaderWithOrder = async (_, { id, input }, context) => {
    try {
        if (input.parent_id) {
            const parentHeader = await Header.findByPk(input.parent_id);
            if (!parentHeader) {
                return {
                    success: false,
                    message: 'Parent header not found',
                    header: null
                };
            }
        }

        const existingHeader = await Header.findOne({
            where: { slug: input.slug }
        });

        if (existingHeader) {
            return {
                success: false,
                message: 'A header with this slug already exists',
                header: null
            };
        }

        // Yeni header'ı oluştur
        const newHeader = await Header.create({
            title: input.title,
            slug: input.slug,
            parent_id: input.parent_id,
            order_index: input.order_index
        });

        return {
            success: true,
            message: 'Header created successfully',
            header: newHeader
        };

    } catch (error) {
        console.error('Error in createHeaderWithOrder:', error);
        return {
            success: false,
            message: error.message,
            header: null
        };
    }
};