import { GraphQLID, GraphQLString } from "graphql";
import { ModelType } from "../TypeDefs/Model";
import { Model } from "../../Entities/Model";

export const CREATE_MODEL = {
  type: ModelType,
  args: {
    nameModel: { type: GraphQLString },
    year: { type: GraphQLString },
    fuel: { type: GraphQLString },
    powerHorse: { type: GraphQLString },
    marqueId: { type:  GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { nameModel, year, fuel, marqueId, powerHorse } = args;
    await Model.insert({ nameModel, year, fuel, marqueId, powerHorse });
    return args;
  },
};