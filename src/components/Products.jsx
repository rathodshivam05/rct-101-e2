import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import axios from "axios";
import { Grid } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(3);
  
  const showProduct = async()=>{
    let res = await axios.get("http://localhost:8080/products")
    // console.log(res.data)
    setData(res.data.slice(0,limit));
  }
  useEffect(()=>{
    //console.log("inside use")
    showProduct();
    },[limit]);
  //console.log("data is ",data)
    return (
    <Flex direction = "column"  pb={5} >
      {/*  AddProduct */}
      <AddProduct/>
      <Grid  templateColumns='repeat(3, 1fr)' gap={6}>{/* List of Products */}
      {data.map((product)=>
      (
         <Product key={product.id} product ={product}/>
      ))}
      </Grid>
      {/* Pagination */}
      <Pagination setLimit={setLimit}/>
    </Flex>
  );
};

export default Products;
