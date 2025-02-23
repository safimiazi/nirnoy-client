"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const onFinish = (values: any) => {
    try {
      if (isLogin) {
        const data = {
          email: values.email,
          password: values.password,
        };
      } else {
        const data = {
          password: values.password,
          student: {
            name: values.name,
            email: values.email,
            contactNo: values.contactNo,
          },
        };
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg w-96 transform transition-all duration-500 ease-in-out hover:scale-105">
        <h1 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
          {isLogin ? "Login" : "Register"}
        </h1>

        <Form name="auth-form" onFinish={onFinish}>
          {!isLogin && (
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                prefix={
                  <UserOutlined className="site-form-item-icon text-black dark:text-white" />
                }
                placeholder="Name"
                className="text-black dark:text-white dark:placeholder-gray-300"
              />
            </Form.Item>
          )}

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={
                <MailOutlined className="site-form-item-icon text-black dark:text-white" />
              }
              placeholder="Email"
              className="text-black dark:text-white dark:placeholder-gray-300"
            />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="contactNo"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
              ]}
            >
              <Input
                prefix={
                  <PhoneOutlined className="site-form-item-icon text-black dark:text-white" />
                }
                placeholder="Contact Number"
                className="text-black dark:text-white dark:placeholder-gray-300"
              />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={
                <LockOutlined className="site-form-item-icon text-black dark:text-white" />
              }
              placeholder="Password"
              className="text-black dark:text-white dark:placeholder-gray-300"
            />
          </Form.Item>

          {/* {!isLogin && (
            <Form.Item
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined className="site-form-item-icon text-black dark:text-white" />
                }
                placeholder="Confirm Password"
                className="text-black dark:text-white dark:placeholder-gray-300"
              />
            </Form.Item>
          )} */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full text-white"
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <span className="text-gray-600 dark:text-gray-300">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <Button
            type="link"
            onClick={toggleForm}
            className="dark:text-white text-black dark:hover:text-gray-50"
          >
            {isLogin ? "Register here" : "Login here"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
