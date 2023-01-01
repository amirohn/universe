import Customer from "./object";
import { inputList } from "./data";
import { useState, useEffect } from "react";
import { Button, Box, Container } from "@mui/material";

export const DataCollector = ({ storeUser }) => {
  const [inputValue, setinputValue] = useState({});
  const [users, setUsers] = useState([]);
  const [storage, setStorage] = useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setinputValue((prev) => ({ ...prev, [name]: value }));
  };

  const { firstName, lastName, email, age } = inputValue;
  const newCustomer = new Customer(firstName, lastName, email, age);
  const datafields = inputList;

  const submitHandler = (e) => {
    e.preventDefault();
    storeUser.addCustomer(newCustomer);
    setStorage(storeUser.makeCustomerList());
    if (typeof window !== "undefined") {
      localStorage.setItem("customer", JSON.stringify(storage));
    }
  };

  console.log("####", storage);
  return (
    <Container maxWidth="xs">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {datafields.map((input) => (
            <input
              key={input.id}
              type="text"
              name={input.name}
              placeholder={input.placeholder}
              value={inputValue.name}
              onChange={(e) => {
                onChangeHandler(e);
              }}
            />
          ))}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};
