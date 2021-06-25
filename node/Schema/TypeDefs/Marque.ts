import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import { ModelType } from "./Model";

export const MarqueType: any = new GraphQLObjectType({
    name: "marque",
    fields: () => ({
        id: { type: GraphQLID },
        nameMarque: { type: GraphQLString }
    })
});