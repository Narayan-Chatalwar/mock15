import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";

const Dashboard = () => {
  const dispatch = useDispatch();

  const appdata = useSelector((store) => store.appdata);
  console.log(appdata);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontWeight="bold" color="brown">
        Dashboard Total Scores
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        gap="20px"
        justifyContent="center"
        alignItems="center"
      >
        {appdata.map((item) => (
          <Box key={item.id}>
            <Flex gap="20px" justifyContent="start" width="300px">
              <Text
                fontWeight="bold"
                width="500px"
                padding="10px"
                textAlign="start"
                backgroundColor="teal.100"
              >
                User: {item.name}
              </Text>
              <Text
                fontWeight="bold"
                width="300px"
                padding="10px"
                textAlign="start"
                backgroundColor="teal.100"
              >
                Score: {item.score}
              </Text>
              <Text
                fontWeight="bold"
                width="300px"
                padding="10px"
                textAlign="start"
                backgroundColor="teal.100"
              >
                level: {item.level}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
