import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.25rem;
  display: flex;
  margin: 0;
`;

export const WrapperTab = styled(Tab)`
  border-radius: 1rem;
  border: 0.063rem solid #ccc;
  padding: 1rem;
  user-select: none;
  cursor: pointer;
  z-index: 99999999999999;
  background-color: #fff;
  margin: 0.5rem;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 1rem;
  margin-top: -0.313rem;
  border-radius: 0.375rem;

  &.is-selected {
    display: block;
  }
`;
