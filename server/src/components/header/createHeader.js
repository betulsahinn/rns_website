import Header_Model from "../../models/Header.js";

export const createHeader = async (_, { input }) => {  // args'dan input'u direkt destructure ediyoruz
    try {
        const existingHeader = await Header_Model.findOne({
            where: { slug: input.slug }
        });

        if (existingHeader) {
            return {
                success: false,
                message: 'Slug must be unique',
                header: null
            };
        }

        const newHeader = await Header_Model.create({
            title: input.title,
            slug: input.slug,
            parent_id: input.parent_id,
            order_index: input.order_index  // order_index'i de ekledim
        });

        if (!newHeader) {
            return {
                success: false,
                message: 'Header creation failed',
                header: null
            };
        }

        return {
            success: true,
            message: "Header created successfully",
            header: newHeader  // Oluşturulan header'ı döndürüyoruz
        };

    } catch (error) {
        return {
            success: false,
            message: `Header could not be created: ${error.message}`,
            header: null
        };
    }
};