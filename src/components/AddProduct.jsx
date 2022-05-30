import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const AddProduct = () => {

  // TODO: Remove below const and instead import them from chakra
  const Button = ({ children}) =>
  (
<button>{children }</button>
  );
  // const Modal = (props) =>(< Modal>{props.children}</Modal>
//   const ModalBody = ({children}) =>(
// <div>{children}</div>
//   )
   const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log("hi");
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>AddProduct</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6} >
            <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button"></Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
