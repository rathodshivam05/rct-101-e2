import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'

const Pagination = ({setLimit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">Last</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3" onClick={e=>setLimit(3)}>3</option>
        <option data-cy="pagination-limit-6" onClick={e=>setLimit(6)}>6</option>
        <option data-cy="pagination-limit-9" onClick={e=>setLimit(9)}>9</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Prev</Button>
    </ButtonGroup>
  );
};

export default Pagination;
