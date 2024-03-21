import { React, useState } from "react";
import { Form, Input, Button, Card, Select } from "antd";
import "../assets/styles/form-page.css";

export default function FormPage() {
  const [usernameValue, setUsernameValue] = useState("");
  const [codingLanguageValue, setCodingLanguageValue] = useState("");
  const [sourceCodeValue, setSourceCodeValue] = useState("");

  const handleUsernameInput = (e) => {
    setUsernameValue(e.target.value);
  };

  const handleCodingLanguageSelection = (value) => {
    setCodingLanguageValue(value);
  };

  const handleSourceCodeInput = (e) => {
    setSourceCodeValue(e.target.value);
  };

  const handleSubmission = () => {
    var username = usernameValue;
    var codingLanguage = codingLanguageValue;
    var sourceCode = sourceCodeValue;

    var requestPayload = {
      username: username,
      codingLanguage: codingLanguage,
      sourceCode: sourceCode,
    };

    console.log(requestPayload);

    // this.props.formDataSubmission(requestPayload);
  };

  return (
    <Card className="form-card" bordered={false}>
      <div className="form-title">
        CodeSubmit: Your Gateway to Coding Success!
      </div>
      <Form>
        <Form.Item
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            className="form-input"
            placeholder="Username"
            onChange={handleUsernameInput}
            value={usernameValue}
          />
        </Form.Item>
        <Form.Item>
          <Select
            className="form-select"
            placeholder="Select preferred coding language"
            onChange={handleCodingLanguageSelection}
          >
            <Select.Option value="C++">C++</Select.Option>
            <Select.Option value="Python">Python</Select.Option>
            <Select.Option value="Java">Java</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Input.TextArea
            className="form-input"
            placeholder="Source Code"
            value={sourceCodeValue}
            onChange={handleSourceCodeInput}
          />
        </Form.Item>
        <Form.Item>
          <Button className="form-submit" onClick={handleSubmission}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
