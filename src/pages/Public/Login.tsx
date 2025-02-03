import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/api/authApi";
import { useAppDispatch } from "../../redux/features/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "./verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: { email: "abujayed@gmail.com", password: "Jayed778" },
  });

  const [login, { data, error, isSuccess }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();

    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
    // console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email :</label>
        <input type="text" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Log in</Button>
    </form>
  );
};

export default Login;
