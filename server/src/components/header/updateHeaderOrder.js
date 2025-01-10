import Header  from "../../models/Header.js";

//Ana başlıkların sıralamasını güncelleyen servis (olası silinme durumunda id karışıklığı için eklendi)
export const updateHeaderOrder = async (_,args, { id, order_index }) => {
    try {
        const header = await Header.findByPk(id);
        if (!header) {
            throw new Error('Header not found');
        }

        await header.update({ order_index });
        return header;
    } catch (error) {
        console.error('Error updating header order:', error);
        throw new Error('Could not update header order');
    }
};