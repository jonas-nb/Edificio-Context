import React from "react";
import styled from "styled-components";

export const Beck = styled.div`
  border: blue 1px solid;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TreinoBg = () => {
  return (
    <div>
      <Beck>
        <h1 style={{ color: "red" }}>Luz</h1>
      </Beck>
    </div>
  );
};

export default TreinoBg;
