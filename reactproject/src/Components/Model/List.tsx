import React, { useState } from "react";
import { GET_ALL_MODELS, GET_ALL_MARQUES } from "../../Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Form, Table, Button } from "react-bootstrap";
import { CREATE_MODEL } from "../../Graphql/Mutation";


const List = () => {
  const { data } = useQuery(GET_ALL_MODELS);
  const dataMarque: any = useQuery(GET_ALL_MARQUES);

  const [createModel, { error }] = useMutation(CREATE_MODEL);

  const [nameModel, setNameModel] = useState("");
  const [year, setYear] = useState("");
  const [powerHorse, setPowerHorse] = useState("");
  const [fuel, setFuel] = useState("");
  const [marqueId, setMarqueId] = useState("");

  return (
    <Container>
        <h1 style={{ textAlign: "center", marginTop: "20px"}}>List Models</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name Marque</th>
                    <th>Name Model</th>
                    <th>Year</th>
                    <th>PowerHorse</th>
                    <th>Fuel</th>
                </tr>
            </thead>
            <tbody>
                { data &&
                    data.getAllModels.map((model: any, index: any) => {
                        return (
                            <tr key={index}>
                                <td>{model.id}</td>
                                <td>{model.marque.nameMarque}</td>
                                <td>{model.nameModel}</td>
                                <td>{model.year}</td>
                                <td>{model.powerHorse}</td>
                                <td>{model.fuel}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>

        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name model</Form.Label>
                <Form.Control type="text" onChange={(event) => {
                    setNameModel(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" onChange={(event) => {
                    setYear(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Fuel</Form.Label>
                <Form.Control type="text" onChange={(event) => {
                    setFuel(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Power Horse</Form.Label>
                <Form.Control type="text" onChange={(event) => {
                    setPowerHorse(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control as="select" onChange={(event) => {setMarqueId(event.target.value);}}>
                    <option value="">Selectionnez</option>
                    { data &&
                        dataMarque.data.getAllMarques.map((marque: any, index: any) => {
                            return (
                                <option value={marque.id} key={index}>{marque.nameMarque}</option>
                            );
                        })
                    }
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(event) => {
                createModel({
                    variables: {
                        nameModel: nameModel,
                        year: year,
                        fuel: fuel,
                        powerHorse: powerHorse,
                        marqueId: parseInt(marqueId)
                    },
                });
            }}>
                Submit
            </Button>
        </Form>
    </Container>
  );
}

export default List;