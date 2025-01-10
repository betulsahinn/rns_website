import { gql } from 'graphql-tag';

export const faqTypeDefs = gql`
    
    type Faq {
        id: ID!
        question: String!
        answer: String!
        order_index: Int
        status: Boolean
        category_id: ID
        created_at: DateTime
        updated_at: DateTime
    }

    type FaqResponse {
        success: Boolean!
        message: String!
        faq: Faq
    }

    extend type Query {
        getAllFaqs: [Faq!]!
        getFaqsByCategory(categoryId: ID!): [Faq!]!
        getFaqById(id: ID!): Faq
    }

    extend type Mutation {
        createFaq(input: CreateFaqInput!): FaqResponse!
        updateFaq(id: ID!, input: UpdateFaqInput!): FaqResponse!
        deleteFaq(id: ID!): FaqResponse!
        updateFaqOrder(id: ID!, order_index: Int!): FaqResponse!
    }

    input CreateFaqInput {
        question: String!
        answer: String!
        order_index: Int
        status: Boolean
        category_id: ID
    }

    input UpdateFaqInput {
        question: String
        answer: String
        order_index: Int
        status: Boolean
        category_id: ID
    }
`;

export default faqTypeDefs;