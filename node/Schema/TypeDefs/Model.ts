import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import { MarqueType } from "./Marque";

export const ModelType: any = new GraphQLObjectType({
    name: "model",
    fields: () => ({
        id: { type: GraphQLID },
        nameModel: { type: GraphQLString },
        year: { type: GraphQLString },
        powerHorse: { type: GraphQLString },
        fuel: { type: GraphQLString },
        marqueId: { type: GraphQLID },
        marque: { type: MarqueType }
    })
});
