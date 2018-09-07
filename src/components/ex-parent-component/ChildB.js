import React from "react";
import { Form, Input } from "antd";

const FormItem = Form.Item;

export default props => (
  <div style={{ marginTop: '0.5rem' }}>
    <FormItem
      label="ChildB"
      {...props.formItemLayout}
    >
      <Input />
    </FormItem>
  </div>
);
