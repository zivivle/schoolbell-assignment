import { Input } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardInput = styled(Input)`
  width: 100%;
  margin-bottom: ${({ isInvalid }) => (isInvalid ? "0px" : "15px")};
  border-color: ${({ isInvalid }) => (isInvalid ? "#FF6347" : "initial")};
  :focus {
    border-color: ${({ isInvalid }) => (isInvalid ? "#FF6347" : "#6495ED")};
    box-shadow: 0 0 0 1px
      ${({ isInvalid }) => (isInvalid ? "#FF6347" : "#6495ED")};
  }
`;

export const ValidationError = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #ff6347;
  margin: 4px 0px 10px 4px;
`;
