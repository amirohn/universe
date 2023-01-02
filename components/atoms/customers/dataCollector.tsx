import React, { Component } from "react";
import Customer from "./object";
import { inputList } from "./data";
import { useState } from "react";
import { Button, Box, Container } from "@mui/material";

type UseObjectTypes = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
};

export const DataCollector = ({ storeUser }: any) => {
  const [inputValue, setinputValue] = useState<UseObjectTypes>({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });
  const [users, setUsers] = useState([]);
  const [storage, setStorage] = useState([]);

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setinputValue((prev) => ({ ...prev, [name]: value }));
  };

  const { firstName, lastName, email, age } = inputValue;
  const newCustomer: Customer = new Customer(firstName, lastName, email, age);
  const datafields = inputList;

  const submitHandler = (e: any) => {
    e.preventDefault();
    storeUser.addCustomer(newCustomer);
    setStorage(storeUser.makeCustomerList());
    if (typeof window !== "undefined") {
      localStorage.setItem("customer", JSON.stringify(storage));
    }
  };

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
              value={inputValue[input.name as keyof UseObjectTypes]}
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
