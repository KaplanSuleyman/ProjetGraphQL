import { gql } from "@apollo/client";

export const GET_ALL_MARQUES = gql`
    query getAllMarques {
        getAllMarques {
            id,
            nameMarque
        }
    }
`;

export const GET_ALL_MODELS = gql`
    query getAllModels {
        getAllModels {
            id,
            nameModel,
            fuel,
            powerHorse,
            year,
            marque {
                nameMarque
            }
        }
    }
`;