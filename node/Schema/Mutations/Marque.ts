import { GraphQLID, GraphQLString } from "graphql";
import { MarqueType } from "../TypeDefs/Marque";
import { Marque } from "../../Entities/Marque";

export const CREATE_MARQUE = {
  type: MarqueType,
  args: {
    nameMarque: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { nameMarque } = args;
    await Marque.insert({ nameMarque });
    return args;
  },
};

export const UPDATE_MARQUE = {
  type: MarqueType,
  args: {
    id: { type: GraphQLID },
    nameMarque: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, nameMarque } = args;
    const marque = await Marque.findOne({ id: id });

    if (!marque) {
      throw new Error("Cette marque n'existe pas");
    }

    await Marque.update({ id: id }, { nameMarque: nameMarque });

    return { successful: true, message: "Marque updated" };
  },
};

export const DELETE_MARQUE = {
  type: MarqueType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Marque.delete(id);

    return { successful: true, message: "Marque deleted" };
  },
};