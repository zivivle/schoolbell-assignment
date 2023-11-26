import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Input,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export const CardContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  width: 600px;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 15px;
  position: relative;
  padding-bottom: 10px;
`;

export const CardHeading = styled(CardHeader)`
  margin-bottom: 0px;
  padding-bottom: 0px;
  display: flex;
`;

export const CardCloseButton = styled(CloseButton)`
  position: absolute;
  right: 14px;
  top: 5px;
`;

export const CardBodyContainer = styled(CardBody)`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const ValidateInputContainer = styled.form`
  width: 100%;
`;
