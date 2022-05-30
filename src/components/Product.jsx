import React from "react";
import { Stack } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,} from '@chakra-ui/react';
  import { Heading } from '@chakra-ui/react';
  import { Box } from '@chakra-ui/react';
  import { Image } from '@chakra-ui/react';
const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
// console.log('..............................');
//   const Text = ({ children }) => {<div>{children}</div>}

//   const Image = ({ children }) =>  {<div>{children}</div>}
//   const Box = ({ children }) =>{<div>{children}</div>}
//   const Stack = ({ children }) => {<div>{children}</div>}
//   const Heading = ({ children }) => {<div>{children}</div>}
//   const Tag = ({ children }) => {<div>{children}</div>}
//   const TagLabel = ({ children }) => {<div>{children}</div>};
  console.log("inside product", props.product)
// return (
//   <Stack direction={['column', 'row']} spacing='24px'>
  
//   <div>
//     {props.product.imageSrc}
//   </div>
// </Stack>
// )
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image"  src={props.product.imageSrc}/>
      <div data-cy="product-category">{props.product.category}</div>
      <Tag>
        <TagLabel data-cy="product-gender">{props.product.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{props.product.title}</Heading>
      <Box data-cy="product-price">{props.product.price}</Box>
    </Stack>
  );
};

export default Product;
