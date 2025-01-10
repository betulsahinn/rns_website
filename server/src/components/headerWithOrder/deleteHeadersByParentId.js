import Header from "../../models/Header.js";

//alt başlıkları tıopluca silmek için servis
export const deleteHeadersByParentId = async (_, args, context) => {
    try {
        // Parent ID'ye göre tüm alt başlıkları bul
        const subHeaders = await Header.findAll({
            where: { parent_id: args.parentId }
        });

        if (subHeaders.length === 0) {
            return {
                success: false,
                message: 'No sub-headers found for this parent'
            };
        }

        // Tüm alt başlıkları sil
        await Header.destroy({
            where: { parent_id: args.parentId }
        });

        return {
            success: true,
            message: `Successfully deleted ${subHeaders.length} sub-headers`,
            deletedCount: subHeaders.length
        };
    } catch (error) {
        console.error('Error deleting sub-headers:', error);
        throw error;
    }
};