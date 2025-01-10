import Header from "../../models/Header.js";

export const updateHeaderWithOrder = async (_, { id, input }, context) => {
    try {
        const header = await Header.findByPk(id);

        if (!header) {
            return {
                success: false,
                message: 'Header not found',
                header: null
            };
        }

        // Eğer parent_id değişiyorsa, yeni parent'ın varlığını kontrol et
        if (input.parent_id && input.parent_id !== header.parent_id) {
            const newParent = await Header.findByPk(input.parent_id);
            if (!newParent) {
                return {
                    success: false,
                    message: 'New parent header not found',
                    header: null
                };
            }
        }

        // Eğer slug değişiyorsa, benzersiz olduğunu kontrol et
        if (input.slug && input.slug !== header.slug) {
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
        }

        await header.update({
            title: input.title || header.title,
            slug: input.slug || header.slug,
            parent_id: input.parent_id !== undefined ? input.parent_id : header.parent_id,
            order_index: input.order_index || header.order_index
        });

        return {
            success: true,
            message: 'Header updated successfully',
            header: header
        };

    } catch (error) {
        console.error('Error updating header:', error);
        return {
            success: false,
            message: error.message,
            header: null
        };
    }
};