import React, { useState } from "react";
import { GET_ALL_MARQUES } from "../../Graphql/Queries";
import { CREATE_MARQUE } from "../../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Form, Table, Button } from "react-bootstrap";


const List = () => {
  const { data } = useQuery(GET_ALL_MARQUES);

  const [createMarque, { error }] = useMutation(CREATE_MARQUE);

  const [nameMarque, setNameMarque] = useState("");

  return (
    <Container>
        <h1 style={{ textAlign: "center", marginTop: "20px"}}>List Brands</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name Marque</th>
                </tr>
            </thead>
            <tbody>
                { data &&
                    data.getAllMarques.map((marque: any, index: any) => {
                        return (
                            <tr key={index}>
                                <td>{marque.id}</td>
                                <td>{marque.nameMarque}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name brand</Form.Label>
                <Form.Control type="text" onChange={(event) => {
                    setNameMarque(event.target.value);
                    }}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => {
                createMarque({
                    variables: {
                        nameMarque: nameMarque
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