import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_ALL_MARQUES, GET_MARQUE } from './Queries/Marque';
import { CREATE_MARQUE, UPDATE_MARQUE, DELETE_MARQUE } from './Mutations/Marque';
import { GET_ALL_MODELS, GET_MODEL } from './Queries/Model';
import { CREATE_MODEL } from './Mutations/Model';


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllMarques: GET_ALL_MARQUES,
        getMarque: GET_MARQUE,
        getAllModels: GET_ALL_MODELS,
        getModel: GET_MODEL,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createMarque: CREATE_MARQUE,
        updateMarque: UPDATE_MARQUE,
        deleteMarque: DELETE_MARQUE,
        createModel: CREATE_MODEL,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
