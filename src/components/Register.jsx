import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { schemaRegister } from "../services/data";
import { fileUpLoad } from "../services/fileUpload";
import { useDispatch } from "react-redux";
import { actionRegisterAsync } from "../redux/actions/userActions";
const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  const onUpLoadImage = async (image) => {
    const url = await fileUpLoad(image);
    if (url) {
      return url;
    } else {
      console.log("Ocurrió un error al cargar la imagen");
    }
  };
  const onSubmit = async (data) => {
    const photoUrl = await onUpLoadImage(data.image[0]);
    console.log(data);
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: photoUrl,
      phoneNumber: data.phone,
    };
    dispatch(actionRegisterAsync(newUser));
  };

  return (
    <div className="p-5">
      <h1>Crear una nueva cuenta</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <Form.Text className="text-muted">{errors.name?.message}</Form.Text>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <Form.Text className="text-muted">
              {errors.email?.message}
            </Form.Text>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label=" Phone number" className="mb-3">
            <Form.Control
              type="number"
              placeholder="Celular"
              {...register("phone")}
            />
            <Form.Text className="text-muted">
              {errors.phone?.message}
            </Form.Text>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <Form.Text className="text-muted">
              {errors.password?.message}
            </Form.Text>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel label="Confirm Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("repeatPassword")}
            />
            <Form.Text className="text-muted">
              {errors.repeatPassword?.message}
            </Form.Text>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Avatar" className="mb-3">
            <Form.Control type="file" size="sm" {...register("image")} />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </FloatingLabel>
        </Form.Group>

        <Button variant="warning" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};
export default Register;
