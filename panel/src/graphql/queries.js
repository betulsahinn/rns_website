import { gql } from '@apollo/client';

export const GET_CONTACTS = gql`
    query GetContacts {
        getAllContacts {
            id
            full_name
            email
            phone
            message
            to_email
        }
    }
`;

export const GET_CONTACT_BY_ID = gql`
    query GetContactById($id: ID!) {
        getContactById(id: $id) {
            id
            full_name
            email
            phone
            message
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