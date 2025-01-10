import sequelize from '../config/database.js';
import Header from './Header.js';
import HeaderContent from './HeaderContent.js';
import Faq from './Faq.js';
import Contact from "./Contact.js";

const setupAssociations = () => {
    Header.hasMany(HeaderContent, {
        foreignKey: 'header_id',
        as: 'headerContents'
    });

    HeaderContent.belongsTo(Header, {
        foreignKey: 'header_id'
    });

};

export {
    sequelize,
    Header,
    HeaderContent,
    Faq,
    Contact,
    setupAssociations
};