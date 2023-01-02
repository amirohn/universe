import { DataCollector } from "../components/atoms/customers/dataCollector";
import { CustomerList } from "../components/atoms/customers/object";
import { Box } from "@mui/material";
import React from "react";

const SignIn = () => {
  const storeUser: CustomerList = new CustomerList();

  return (
    <Box sx={{ m: "4rem" }}>
      <DataCollector storeUser={storeUser} />
    </Box>
  );
};

export default SignIn;
