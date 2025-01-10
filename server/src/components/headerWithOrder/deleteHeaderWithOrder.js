import Header from "../../models/Header.js";

export const deleteHeaderWithOrder = async (_,args, { id }) => {
    try {
        // İlgili header'ı bul
        const header = await Header.findByPk(id);

        if (!header) {
            throw new Error('Header not found');
        }

        // Alt başlıkları kontrol et
        const subHeaders = await Header.findAll({
            where: { parent_id: id }
        });

        if (subHeaders.length > 0) {
            throw new Error('Cannot delete header with sub-headers. Delete sub-headers first.');
        }

        // Header'ı sil
        await header.destroy();

        // Aynı parent_id'ye sahip diğer header'ların order_index'lerini güncelle
        if (header.parent_id) {
            const siblings = await Header.findAll({
                where: { parent_id: header.parent_id },
                order: [['order_index', 'ASC']]
            });

            // Sıralamayı yeniden düzenle
            for (let i = 0; i < siblings.length; i++) {
                await siblings[i].update({ order_index: i + 1 });
            }
        }

        return {
            success: true,
            message: 'Header successfully deleted'
        };

    } catch (error) {
        console.error('Error deleting header:', error);
        throw error;
    }
};