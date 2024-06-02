import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Flex,
  SimpleGrid,
  Select,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import LoadingIndicator from "../indicators/LoadingIndicator";
// import ErrorIndicator from "../indicators/ErrorIndicator";
import ProductCard from "../components/Product/ProductCard";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const fetchProducts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );
      setProducts(res.data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      setErr(true);
    }
  };

  const sortAndFilter = () => {
    let filteredProducts = [...products];

    if (filterStatus) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterStatus
      );
    }

    if (sortOrderValue) {
      filteredProducts.sort((a, b) => {
        if (sortOrderValue === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    return filteredProducts;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const newProduct = sortAndFilter();

  return (
    <>
      <Container maxW="container.xl">
        <HStack my={4} spacing={4}>
          <Select
            placeholder="Sort by Price"
            value={sortOrderValue}
            onChange={(e) => setSortOrderValue(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
          <Select
            placeholder="Filter by Category"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="homedecor">Home Decor</option> 
          </Select>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {newProduct.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Products;
