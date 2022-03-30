import React, { useState } from "react";

import {
  HStack,
  SimpleGrid,
  Box,
  Button,
  FormControl,
  Image,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InputForm from "./../Components/Common/inputForm";
import Upload from "./../Components/Common/upload";

const Form = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const onSubmit = () => {
    console.log("name: ", name);
    console.log("symbol: ", symbol);
    console.log("description: ", description);
    console.log("address: ", address);
    console.log("selectedImages: ", selectedImages);

    const data = new FormData();
    data.append("name", name);
    data.append("symbol", symbol);
    data.append("description", description);
    data.append("address", address);
    data.append("selectedImages", selectedImages);
  };
  const onSelectedFile = (event) => {
    const selectedFile = event.target.files;
    // console.log(selectedFile)
    // console.log(Array.isArray(selectedFile))
    const selectedFileArray = Array.from(selectedFile);
    // console.log(selectedFileArray)

    const imageArray = selectedFileArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imageArray);
    // console.log(setSelectedImages)
  };

  return (
    <HStack>
      <SimpleGrid columns={[1, null, 2]} w="150vw" h="80vh">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box className="upload" m="10">
            <Box>
              <Text fontSize="30" fontWeight="bold">
                Your Project NFT
              </Text>
            </Box>
            <Center w="100%" h="100%" bgColor="yellow.300">
              <SimpleGrid columns={[1, null, 3]} align="center" whiteSpace="3">
                {selectedImages &&
                  selectedImages.map((image, index) => {
                    return (
                      <Box key={image} className="image" mx="10px" mt="20px">
                        <Image src={image} alt="preview" />
                        <Button
                          onClick={() =>
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image)
                            )
                          }
                        >
                          Delete
                        </Button>
                        <Text>{index + 1}</Text>
                      </Box>
                    );
                  })}
              </SimpleGrid>
            </Center>
            <Upload onChange={onSelectedFile} mb="15" multiple accept="auto" />
          </Box>
        </Box>
        <Box display="flex" alignItems="Center" justifyContent="center">
          <Box w="80%">
            <InputForm
              label="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              mb="15"
            />
            <InputForm
              label="Symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              mb="15"
            />
            <InputForm
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              mb="15"
            />
            <InputForm
              label="Recipient Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              mb="15"
            />
            <Box>
              <FormControl mt={4}>
                <Button onClick={onSubmit} size="lg" colorScheme="facebook">
                  Deploy Now
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </HStack>
  );
};

export default Form;
