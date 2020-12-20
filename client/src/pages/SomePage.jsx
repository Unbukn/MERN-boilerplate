import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function SomeDataPage() {
  // Set Page INIT state
  const [data, setPage] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all data and store them with setPage
  useEffect(() => {
    loadSomeData()
  }, [])

  // Loads all data and sets them to data
  function loadSomeData() {
    API.getAllData()
      .then(res => 
        setPage(res.data)
      )
      .catch(err => console.log(err));
      console.log(data)
  };

  // Deletes a book from the database with a given id, then reloads data from the db
  function deleteData(id) {
    API.deleteSomeData(id)
      .then(res => loadSomeData())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload data from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.someString && formObject.someNumber) {
      API.saveNewData({
        someString: formObject.someString,
        someNumber: formObject.someNumber,
        someArray: formObject.someArray
      })
        .then(res => loadSomeData())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
        <Col size="md-4">
            <Jumbotron>
              <h1>Add New someData</h1>
              
            </Jumbotron>
            <form>
              <TextArea
                onChange={handleInputChange}
                name="someString"
                placeholder="someString (required)"
                required='true'
              />
              <Input
                onChange={handleInputChange}
                type="number"
                name="someNumber"
                placeholder="someNumber (required)"
                required='true'
              />
              <Input
                onChange={handleInputChange}
                name="someArray"
                placeholder="someArray (Optional)"
              />
              <FormBtn
                disabled={!(formObject.someString && formObject.someString)}
                onClick={handleFormSubmit}
              >
                Create New Data
              </FormBtn>
            </form>
          </Col>

          <Col size="md-8 sm-12">
            <Jumbotron>
              <h1>All of someData Below</h1>
              
            </Jumbotron>
            {data.length ? (
              <List>
                {data.map(someData => (
                  <ListItem key={someData._id}>
                    <Link to={"/somedata/" + someData._id}>
                      <strong>
                        someString: {someData.someString} <br /> 
                        someNumber: {someData.someNumber} <br />
                        someArray: {someData.someArray}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteData(someData._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default SomeDataPage;
