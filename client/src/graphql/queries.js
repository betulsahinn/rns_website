import { gql } from "@apollo/client";

/*export const GET_MAIN_MENU_ITEMS = gql`
    query GetHeader($headerId: ID!) {
        getHeaderById(id: $headerId) {
            id
            title
            slug
            parent_id
            order_index
            created_at
            updated_at
            headerContents {
                id
                header_id
                title
            }
        }
    }
`;*/

export const GET_ALL_CONTACTS = gql`
    query GetAllContacts {
        getAllContacts {
            id
            full_name
            email
            phone
            message
            created_at
            updated_at
        }
    }
`;

// ID'ye göre contact getir
export const GET_CONTACT_BY_ID = gql`
    query GetContactById($id: ID!) {
        getContactById(id: $id) {
            id
            full_name
            email
            phone
            message
            created_at
            updated_at
        }
    }
`;

export const GET_ALL_FAQS = gql`
    query GetAllFaqs {
        getAllFaqs {
            id
            question
            answer
            order_index
            status
            created_at
            updated_at
        }
    }
`;

export const GET_ALL_HEADERS_WITH_ORDER = gql`
    query GetAllHeadersWithOrder {
        getAllHeadersWithOrder {
            id
            parent_id
            title
            slug
            order_index
        }
    }
`;

export const GET_ALL_HEADERS = gql`
    query GetAllHeaders {
        getAllHeaders {
            id
            title
            slug
            parent_id
            order_index
            headerContents {
                id
                title
                header_id
            }
        }
    }
`;