import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';
import headersResolver from './resolvers/headersResolver.js';
import headerTypeDefs from './typedef/headersTypedef.js';
import faqResolver from "./resolvers/faqResolver.js";
import faqTypeDef from './typedef/faqTypeDef.js';
import contactResolver from './resolvers/contactResolver.js';
import contactTypeDef from './typedef/contactTypeDef.js';

const typeDefs = mergeTypeDefs([
    headerTypeDefs,
    faqTypeDef,
    contactTypeDef,
]);

const resolvers = mergeResolvers([
    headersResolver,
    faqResolver,
    contactResolver,
]);

export {
    typeDefs,
    resolvers,
};

