import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./views/Body";
import Header from "./views/Header";

import DATA from "./data/data.json";

export default function App() {
  const [filters, setFilters] = useState([]);

  const [jobs, setJobs] = useState([...DATA]);

  useEffect(() => {
    let filteredJob = [];
    if (filters.length > 0) {
      for (let el of filters) {
        filteredJob.push(
          ...DATA.filter(
            (da) =>
              da.languages.includes(el) ||
              da.level === el ||
              da.tools.includes(el) ||
              da.role === el
          )
        );
      }
      setJobs([...new Set(filteredJob)]);
    } else {
      setJobs([...DATA]);
    }
  }, [filters]);

  return (
    <Container>
      <Header filters={filters} setFilters={setFilters} />
      <Body Jobs={jobs} setFilters={setFilters} filters={filters} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
