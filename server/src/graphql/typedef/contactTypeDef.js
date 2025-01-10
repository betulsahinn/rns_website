import { gql } from 'graphql-tag';

export const contactTypeDefs = gql`
    type Contact {
        id: ID!
        full_name: String!
        email: String!
        phone: String!
        message: String!
        to_email: String
        created_at: DateTime!
        updated_at: DateTime!
    }

    type ContactResponse {
        success: Boolean!
        message: String!
        contact: Contact
    }

    type Query {
        getAllContacts: [Contact!]!
        getContactById(id: ID!): Contact
    }

    type Mutation {
        createContact(input: CreateContactInput!): ContactResponse!
        deleteContact(id: ID!): ContactResponse!
    }

    input CreateContactInput {
        full_name: String!
        email: String!
        phone: String!
        message: String!
    }
`;

export default contactTypeDefs;