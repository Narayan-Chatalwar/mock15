import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../Redux/action";
import { saveData } from "../utils/LocalStorage";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [diff, setDiff] = useState("");
  const handleSubmit = () => {
    let payload = {
      name: name,
      level: diff,
      score: 0,
    };

    saveData("user", payload);
    dispatch(addData(payload)).then(() => navigate("/playzone"));
  };



  
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="200px"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        background="black"
        color="white"
        padding="20px"
        fontWeight="bold"
        width="100%"
      >
        Masai Word game
      </Text>
      <Box
        display="flex"
        width="300px"
        borderRadius="10px"
        border="1px solid teal"
        boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
        padding="10px"
      >
        <FormControl
          isRequired
          display="flex"
          flexDirection="column"
          gap="20px"
        >
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="First name"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Difficulty level</FormLabel>
          <Select
            placeholder="Select Difficulty"
            onChange={(e) => setDiff(e.target.value)}
          >
            <option value="40">Low level - 40 seconds</option>
            <option value="30">Medium level - 30 seconds</option>
            <option value="10">High level - 10 seconds</option>
          </Select>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Start
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Home;
