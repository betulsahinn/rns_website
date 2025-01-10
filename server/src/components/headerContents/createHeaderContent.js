import HeaderContent  from "../../models/HeaderContent.js";

// Farklı dillerde içerik oluşturmak için eklendi. (Content Localization)
export const createHeaderContent = async (_, args,{ input }) => {
    try {
        const headerContent = await HeaderContent.create(input);
        return headerContent;
    } catch (error) {
        throw new Error('Header content could not be created');
    }
};