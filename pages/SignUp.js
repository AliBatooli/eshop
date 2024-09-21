import React from "react";
import styles from "./Login.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import loginSignupErrorMessage from "@/Components/messageComponents/loginSignupErrorMessage";
import { Post } from "@/Repository/AxiosRepository";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setJwtToken } from "@/Redux/features/users/UsersSlice";
import Cookies from "js-cookie";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const validationSchema = Yup.object({
    username: Yup.string().required("شماره موبایل خود را وارد نمایید"),
    password: Yup.string().required("رمز عبور را وارد نمایید"),
  });

  const formFields = {
    username: "",
    password: "",
  };

  const submitHandler = (values) => {
    Post("users/register", values)
      .then((response) => {
        if (response.data.id === 0) {
          alert("user exists !!!");
        } else {
          Post("users/login", values).then((loginResponse) => {
            //dispatch(setJwtToken(loginResponse.data.token));
            Cookies.set("token", response.data.token);
            router.push("/LandingPage");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`${styles.outerContainer}`}>
      <Formik
        onSubmit={submitHandler}
        initialValues={formFields}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <div className={`${styles.fieldsContainer}`}>
            <Image src="/images/logo.svg" width={150} height={150} />
            <Field
              className={`${styles.field}`}
              type="text"
              name="username"
              placeholder="شماره موبایل"
            />
            <ErrorMessage name="username" component={loginSignupErrorMessage} />
            <Field
              className={`${styles.field}`}
              type="password"
              name="password"
              placeholder="رمز عبور"
            />
            <ErrorMessage name="password" component={loginSignupErrorMessage} />
            <button
              type="submit"
              className={`${styles.loginButton}  ${styles.filed}`}
            >
              ثبت نام
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
