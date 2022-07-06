import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/action/auth_api";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1516053256215-94022213b13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMHN1cHBsaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Select = styled.select`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;
const Register = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if (user.password !== user.cpassword) {
      alert("Password and confirm password must be match");
      return;
    }
    register(dispatch, user);
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="First Name"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, firstname: e.target.value }))
            }
          />
          <Input
            placeholder="Last Name"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, lastname: e.target.value }))
            }
          />
          <Input
            placeholder="Email"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            placeholder="Password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <Input
            placeholder="Confirm Password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, cpassword: e.target.value }))
            }
          />
          <Select
            placeholder="Select Role"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, role: e.target.value }))
            }
          >
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Referral">Referral</option>
          </Select>
          <Input
            placeholder="Add Referral Code"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, referral_code: e.target.value }))
            }
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {error && <Error>Something went wrong...</Error>}
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
