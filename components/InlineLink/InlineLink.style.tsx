import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  text-decoration: none;
`;
