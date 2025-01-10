import { gql } from 'graphql-tag';

export const headerTypeDefs = gql`
    scalar DateTime

    type Header {
        id: ID!
        title: String!
        slug: String!
        parent_id: Int
        order_index: Int
        created_at: DateTime!
        updated_at: DateTime!
        subHeaders: [Header!]
        headerContents: [HeaderContent!]!
    }

    type HeaderContent {
        id: ID!
        header_id: ID!
        title: String!
    }

    type HeaderResponse {
        success: Boolean!
        message: String!
        header: Header
    }

    type HeaderContentResponse {
        success: Boolean!
        message: String!
        headerContent: HeaderContent
    }
    type BulkDeleteResponse {
        success: Boolean!
        message: String!
        deletedCount: Int!
    }

    extend type Query {
        getAllHeaders: [Header!]!
        getHeaderById(id: ID!): Header
        getAllHeadersWithOrder: [Header!]!
    }

    extend type Mutation {
        createHeader(input: CreateHeaderInput!): HeaderResponse!
        updateHeader(id: ID!, input: UpdateHeaderInput!): HeaderResponse!
        deleteHeader(id: ID!): HeaderResponse!
        updateHeaderOrder(id: ID!, order_index: Int!): HeaderResponse!

        createHeaderWithOrder(id: ID!, input: UpdateHeaderInput!): HeaderResponse!
        updateHeaderWithOrder(id: ID!, input: UpdateHeaderInput!): HeaderResponse!
        deleteHeaderWithOrder(id: ID!): HeaderResponse!
        deleteHeadersByParentId(parentId: ID!): BulkDeleteResponse!

        createHeaderContent(header_id: ID!, title: String!): HeaderContentResponse!
    }

    input CreateHeaderInput {
        title: String!
        slug: String!
        parent_id: Int
        order_index: Int
    }

    input UpdateHeaderInput {
        title: String
        slug: String
        parent_id: Int
        order_index: Int
    }
`;

export default headerTypeDefs;