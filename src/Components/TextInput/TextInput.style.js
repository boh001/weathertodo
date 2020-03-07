import styled from "styled-components";
export const RelativeBox = styled.div`
  position: relative;
`;
export const InputLabel = styled.label`
  padding: 10px;
  left: 0px;
  bottom: 5px;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  font-size: 20px;
  opacity: 0;
  color: #2ed573;
`;

export const TextInput = styled.input.attrs(props => ({
  type: "text",
  placeholder: props.placeholder
}))`
  font-size: 20px;
  flex: none;
  bottom: 0;
  height: 30px;
  padding-left: 10px;
  border: none;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid;
  transition: all ease 0.5s;
  border-radius: 1px;
  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
  &:focus ~ label {
    font-size: 20px;
    bottom: 30px;
    opacity: 1;
  }
  &::placeholder {
    color: white;
  }
`;
