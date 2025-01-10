import {gql} from "@apollo/client";

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


export const CREATE_HEADER_WITH_ORDER = {
    mutation: CREATE_HEADER,
    variables: {
        input: {
            title: "Ana Menü",
            slug: "ana-menu-1",
            parent_id: null,
            order_index: 1
        }
    }
};

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