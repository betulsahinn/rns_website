import {gql} from "@apollo/client";

//contacts
export const CREATE_CONTACT = gql`
    mutation CreateContact($input: CreateContactInput!) {
        createContact(input: $input) {
            success
            message
            contact {
                id
                full_name
                email
                phone
                message
                to_email
            }
        }
    }
`;

// Contact sil
export const DELETE_CONTACT = gql`
    mutation DeleteContact($id: ID!) {
        deleteContact(id: $id) {
            success
            message
        }
    }
`;
//headers
export const CREATE_HEADER = gql`
    mutation CreateHeader($input: CreateHeaderInput!) {
        createHeader(input: $input) {
            message
        }
    }
`;

export const UPDATE_HEADER_ORDER = gql`
    mutation UpdateHeaderOrder($id: ID!, $orderIndex: Int!) {
        updateHeaderOrder(id: $id, order_index: $orderIndex) {
            success
            message

        }
    }
`;

export const UPDATE_HEADER = gql`
mutation UpdateHeader($id: ID!) {
    updateHeader(id: $id) {
        success
        message
    }
}`

export const DELETE_HEADER = gql`
    mutation DeleteHeader($id: ID!) {
        deleteHeader(id: $id) {
            success
            message
        }
    }`

//FAQS
export const CREATE_FAQ =gql`
    mutation CreateFaq($input: CreateFaqInput!) {
        createFaq(input: $input) {
            success
            message
            faq {
                id
                question
                answer
            }
        }
    }`

export const DELETE_FAQ = gql`
mutation DeleteFaq($id: ID!) {
    deleteFaq(id: $id) {
        message
        success
        faq {
            id
        }
    }
}`
export const UPDATE_FAQ = gql`
mutation UpdateFAQ($id: ID!) {
    updateFaq(id: $id) {
        message
        success
        faq {
            id
            answer
            question
        }
    }
}`