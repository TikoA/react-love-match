import { useState } from 'react'
import { Box, Image, Button, Text, useColorMode, useColorModeValue, Input, Stack, Switch } from "@chakra-ui/react";

function App() {
  const {colorMode, toggleColorMode} = useColorMode()
  const [names, setNames] = useState([])
  const [name, setName] = useState('')
  const [crushName, setCrushName] = useState('')
  const [probablity, setProbablity] = useState(0)   

  const bg = useColorModeValue("gray.100", "gray.700")
  const color = useColorModeValue("gray.900", "white")
  const modeLink = [
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/new-moon_1f311.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/sun-with-face_1f31e.png",
  ]

  function submitName(event) {
    setName(event.target.value)
  }

  function submitCrushName(event) {
    setCrushName(event.target.value)
  }

  function submitNames() {
    if (name.length && crushName.length && name.length < 10 && crushName.length < 10 && ( names[0] != name || names[1] != crushName )) {
      setNames([name, crushName])
      setProbablity(`${Math.floor(Math.random() * 100)}%`)
      console.log(names)
    }
  }

  return (
    <div className="App">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center" 
        minHeight="100vh"
        backgroundColor={bg}
      >
        <Box
          textAlign="center"
        >
          <Text
          color={color} 
          fontSize="5xl" 
          textAlign="center"
        >
          Love Match
        </Text>
        <Image
          display="block"
          m="0 auto"
          src="https://www.flaticon.com/svg/static/icons/svg/3315/3315275.svg"
          width={["6rem","10rem"]}
        />
        </Box>
        <Box display='flex'>
          <Input color='gray.800' marginRight={2} onChange={submitName} backgroundColor='white' placeholder='Your name' />
          <Input color='gray.800' backgroundColor='white' onChange={submitCrushName} placeholder='Crush name' />
        </Box>

        <Button
          size="md" 
          colorScheme="blue"
          onClick={submitNames}
        >
          Submit Names
        </Button>

        <Stack direction="row">
          <Image width="2rem" src={modeLink[0]} />
          <Switch onChange={toggleColorMode} colorScheme="red" size="lg" />
          <Image width="2rem" src={modeLink[1]} />
        </Stack>
          
        {names.length ? <Text fontSize="xl">
          {names[0]} and {names[1]} match with {probablity}
        </Text> : <></>}
        
      </Box>
    </div>
  );
}

export default App;
