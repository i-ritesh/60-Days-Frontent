import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import LoadingIndicator from "../indicators/LoadingIndicator";
import ErrorIndicator from "../indicators/ErrorIndicator";

const ViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [err, setErr] = useState(false);
  const toast = useToast();

  async function fetchAndUpdateData(id) {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
      );

      const data = res.data;
      setProduct(data.data); 
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }

  const { brand, title, image, category, price } = product;

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Brand
              </Heading>
              <Text pt="2" fontSize="sm">
                {brand}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Category
              </Heading>
              <Text pt="2" fontSize="sm">
                {category}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Price
              </Heading>
              <Text pt="2" fontSize="sm">
                ${price}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <HStack spacing={4}>
            <Button
              variant="outline"
              colorScheme="teal"
              onClick={() =>
                toast({
                  title: "Added To Cart",
                  description: "We've Added Produt to cart.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Add To Cart
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
};

export default ViewProduct;
