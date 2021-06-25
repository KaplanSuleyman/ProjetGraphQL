import { GraphQLID, GraphQLList } from "graphql"
import { ModelType } from "../TypeDefs/Model"
import { Model } from "../../Entities/Model";

export const GET_ALL_MODELS = {
    type: new GraphQLList(ModelType),
    async resolve() {
        return Model.find({ relations: ['marque'] });
    },
}

export const GET_MODEL = {
    type: ModelType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        const marque = await Model.findOne({ id: id });

        if (!marque) {
            throw new Error("Cette marque n'existe pas");
        }

        return marque;
    },
};
