import {Label} from "../../atoms/label/label";
import {Input} from "../../atoms/input/input";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
  ${Label} {
    margin-bottom: 5px;
  }
`

const FormField = ({onChange, label, name, id, title, type, value, ...props}) => {
    return (
        <>
            <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange} />
            </Wrapper>
        </>
    )
}

export default FormField
