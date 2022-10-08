import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getRandom, updataScore } from "../Redux/action";
import { loadData } from "../utils/LocalStorage";
import "./Playzone.css";

const Playzone = () => {
  var userarr;
  var userdata = loadData("user");
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(Number(userdata.level));

  const dispatch = useDispatch();

  const appdata = useSelector((store) => store.appdata);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
      if (timer == 0) {
        return navigate("/dashboard");
      }
    }, 1000);
  }, [timer]);

  useEffect(() => {
    if (appdata.length === 0) {
      dispatch(getData());
    }
    if (randomdata.length === 0) {
      dispatch(getRandom());
    }
  }, [dispatch]);

  let randomdata = useSelector((store) => store.randomdata);
  var length = randomdata.length;

  randomdata = randomdata.toLowerCase();

  useEffect(() => {
    if (randomdata) {
      if (type === randomdata) {
        console.log("score increase");
        dispatch(getRandom());
        setType("");
        setScore(score + length);
      } else if (type.length == randomdata.length && type !== randomdata) {
        console.log("score decrease");
        dispatch(getRandom());
        setType("");
        setScore(score - length);
      }
    }
  }, [type]);

  var userdata = loadData("user");
  useEffect(() => {
    userarr = appdata.filter((item) => item.name == userdata.name);
  }, []);

  return (
    <div>
      <Text background="black" color="white" padding="20px" fontWeight="bold">
        Play Zone
      </Text>
      <Text marginRight="20px" textAlign="right" fontWeight="bold">
        Time remaining: {timer}
      </Text>
      <Text marginRight="20px" textAlign="right" fontWeight="bold">
        Your Current Score : {score}
      </Text>

      <br />
      <br />
      <br />
      <br />

      <Text fontWeight="bold" color="brown">
        Random World : <strong style={{ color: "teal" }}>"{randomdata}"</strong>{" "}
      </Text>

      <br />
      <br />
      <br />
      <Box>
        <Text animation="ease-in-out">You Typed: "{type}"</Text>
      </Box>

      <br />
      <br />
      <br />

      <Box
        display="flex"
        flexDirection="column"
        gap="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex className="keyboardflex">
          <Button
            colorScheme="cyan"
            className="key"
            value="a"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            a
          </Button>
          <Button
            colorScheme="purple"
            className="key"
            value="b"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            b
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="c"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            c
          </Button>
          <Button
            colorScheme="purple"
            className="key"
            value="d"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            d
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="e"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            e
          </Button>
          <Button
            colorScheme="purple"
            className="key"
            value="f"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            f
          </Button>
        </Flex>
        <Flex className="keyboardflex">
          <Button
            className="key"
            value="g"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            g
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="h"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            h
          </Button>
          <Button
            className="key"
            value="i"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            i
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="j"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            j
          </Button>
          <Button
            className="key"
            value="k"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            k
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="l"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            l
          </Button>
        </Flex>
        <Flex className="keyboardflex">
          <Button
            colorScheme="cyan"
            className="key"
            value="m"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            m
          </Button>
          <Button
            colorScheme="purple"
            className="key"
            value="n"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            n
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="o"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            o
          </Button>
          <Button
            colorScheme="purple"
            className="key"
            value="p"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            p
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="q"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            q
          </Button>
          <Button
            colorScheme="purple"
            className="key"
            value="r"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            r
          </Button>
        </Flex>
        <Flex className="keyboardflex">
          <Button
            className="key"
            value="s"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            s
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="t"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            t
          </Button>
          <Button
            className="key"
            value="u"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            u
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="v"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            v
          </Button>
          <Button
            className="key"
            value="w"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            w
          </Button>
          <Button
            colorScheme="cyan"
            className="key"
            value="x"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            x
          </Button>
        </Flex>
        <Flex className="keyboardflex">
          <Button
            colorScheme="cyan"
            className="key"
            value="y"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            y
          </Button>
          <Button
            colorScheme="purple"
            className="key"
            value="z"
            onClick={(e) => setType((prev) => prev + e.target.value)}
          >
            z
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Playzone;
