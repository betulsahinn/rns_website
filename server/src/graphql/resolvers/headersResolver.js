import { deleteHeader } from '../../components/header/deleteHeader.js';
import { updateHeader } from '../../components/header/updateHeader.js';
import { createHeader } from '../../components/header/createHeader.js';
import { getAllHeaders } from "../../components/header/getAllHeaders.js";
import { getHeaderById } from "../../components/header/getHeaderById.js";
import { updateHeaderOrder } from "../../components/header/updateHeaderOrder.js";
import { createHeaderContent } from "../../components/headerContents/createHeaderContent.js";
import {createHeaderWithOrder}  from "../../components/headerWithOrder/createHeaderWithOrder.js";
import {updateHeaderWithOrder}  from "../../components/headerWithOrder/updateHeaderWithOrder.js";
import {deleteHeaderWithOrder}  from "../../components/headerWithOrder/deleteHeaderWithOrder.js";
import {getAllHeadersWithOrder} from "../../components/headerWithOrder/getAllHeadersWithOrder.js";
import {deleteHeadersByParentId} from "../../components/headerWithOrder/deleteHeadersByParentId.js";


export const headersResolver = {
    Query: {
        getAllHeaders:getAllHeaders,
        getHeaderById:getHeaderById,
        getAllHeadersWithOrder:getAllHeadersWithOrder,
    },

    Mutation: {
        createHeader:createHeader,
        deleteHeader:deleteHeader,
        updateHeader:updateHeader,
        createHeaderContent:createHeaderContent,
        updateHeaderOrder:updateHeaderOrder,
        createHeaderWithOrder:createHeaderWithOrder,
        updateHeaderWithOrder:updateHeaderWithOrder,
        deleteHeaderWithOrder:deleteHeaderWithOrder,
        deleteHeadersByParentId:deleteHeadersByParentId,

    }
};

export default headersResolver;