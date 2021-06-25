
import { gql } from "@apollo/client";

export const CREATE_MARQUE = gql`
  mutation createMarque($nameMarque: String!) {
    createMarque(nameMarque: $nameMarque) {
      id,
      nameMarque
    }
  }
`;

export const CREATE_MODEL = gql`
  mutation createModel($nameModel: String!, $year: String!, $fuel: String!, $powerHorse: String!, $marqueId: ID!) {
    createModel(nameModel: $nameModel, year: $year, fuel: $fuel, powerHorse: $powerHorse, marqueId: $marqueId) {
      id,
      nameModel,
      year,
      fuel,
      powerHorse,
      marqueId
    }
  }
`;