import React from "react";
import styled from "styled-components";
import Job from "./Job";

export default function Body({ Jobs, filters, setFilters }) {
  return (
    <Container>
      {Jobs &&
        Array.isArray(Jobs) &&
        Jobs.length > 0 &&
        React.Children.toArray(
          Jobs.map((job) => (
            <Job data={job} filters={filters} setFilters={setFilters} />
          ))
        )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1158px;
  margin: auto;
  padding: 76px 24px;
`;
