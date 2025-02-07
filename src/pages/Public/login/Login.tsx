/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Login.css";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import BookForm from "../../../components/form/FormField";
import BookInput from "../../../components/form/InputField";
import { Button, Col, Row } from "antd";
import { toast } from "sonner";
import { verifyToken } from "../verifyToken";
import { setUser } from "../../../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultValues = {
    email: "abujayed@gmail.com",
    password: "Jayed778",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        email: data?.email,
        password: data?.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login successfully", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err: any) {
      toast.error(err.data.message, { id: toastId });
      // Log full error for debugging
    }
  };

  return (
    <Row
      className="login-container"
      style={{ fontFamily: "fantasy", color: "whitesmoke" }}
    >
      <BookForm onSubmit={onSubmit}>
        <h2 className="form-title" style={{ color: "white", fontSize: "30px" }}>
          Log In
        </h2>
        <Col className="form-group">
          <BookInput type="text" name="email" label="Email" />
        </Col>
        <Col className="form-group">
          <BookInput type="password" name="password" label="Password" />
        </Col>
        <Button htmlType="submit" className="submit-btn">
          Log in
        </Button>
      </BookForm>
    </Row>
  );
};

export default Login;
