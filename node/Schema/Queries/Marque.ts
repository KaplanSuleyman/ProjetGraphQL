import { GraphQLID, GraphQLList } from "graphql"
import { MarqueType } from "../TypeDefs/Marque"
import { Marque } from "../../Entities/Marque";

export const GET_ALL_MARQUES = {
    type: new GraphQLList(MarqueType),
    resolve() {
        return Marque.find({ order: {'id': 'ASC' }});
    },
}

export const GET_MARQUE = {
    type: MarqueType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        const marque = await Marque.findOne({ id: id });

        if (!marque) {
            throw new Error("Cette marque n'existe pas");
        }

        return marque;
    },
};
