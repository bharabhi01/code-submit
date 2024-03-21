import React from "react";
import { Form, Input, Button, Card } from "antd";
import "./form-page.css";

export default function FormPage() {
  return (
    <Card className="form-card" bordered={false}>
      <div className="form-title">
        CodeSubmit: Your Gateway to Coding Success!
      </div>
      <Form>
        <Form.Item
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input className="form-input" placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Input
            className="form-input"
            placeholder="Preferred Coding language"
          />
        </Form.Item>
        <Form.Item>
          <Input.TextArea
            className="form-input"
            placeholder="Source Code"
            showCount
            maxLength={100}
          />
        </Form.Item>
        <Form.Item>
          <Button className="submit-button">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
