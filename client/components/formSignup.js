import React from "react";
import { Button, Checkbox, Form, Input, Select, DatePicker } from "antd";
import ButtonCustom from "./button";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignInForm = () => (
  <Form
    name="basic"
    layout="vertical"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <div className="grid grid-cols-2 gap-3">
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="Nguyễn Huy Thành" />
      </Form.Item>
      <Form.Item
        label="ID/Passport"
        name="cccd"
        rules={[
          {
            required: true,
            message: "Please input your ID/Passport!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="huythanhreceptionist" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="•••••••••••" />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="0777467444" />
      </Form.Item>
      <Form.Item initialValue="vn" label="Nationality" name="nationality">
        <Select>
          <Select.Option value="vn">Vietnamese</Select.Option>
          <Select.Option value="cn">Chinese</Select.Option>
          <Select.Option value="us">American</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item initialValue="male" label="Gender" name="gender">
        <Select>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        initialValue="receptionist"
        label="Department"
        name="department"
      >
        <Select>
          <Select.Option defaultValue value="manager">
            Manager
          </Select.Option>
          <Select.Option value="receptionist">Receptionist</Select.Option>
          <Select.Option value="security">Security</Select.Option>
          <Select.Option value="labor">Labor</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input placeholder="123 Đường ABC, TP-HCM" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="huythanh@gmail.com" />
      </Form.Item>
      <Form.Item
        label="Birthday"
        name="birthday"
        rules={[
          {
            required: true,
            message: "Please input your birthday!",
            pattern: RegExp(
              /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
            ),
          },
        ]}
      >
        <Input placeholder="MM/DD/YYYY" />
      </Form.Item>
      <ButtonCustom color="blue" content="Create" />
    </div>
  </Form>
);
export default SignInForm;
