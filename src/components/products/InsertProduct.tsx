import React, { Dispatch, SetStateAction, useState } from "react"
import {
  Button, Checkbox, Form, Input, InputNumber, Modal,
} from "antd"
import { API, graphqlOperation } from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult } from "@aws-amplify/api"
import { Products } from "../../API"
import { createProducts } from "../../graphql/mutations"

interface InsertProductPropsForm {
  visible: boolean
  // eslint-disable-next-line no-unused-vars
  onCreate: (values: Products) => void
  onCancel: () => void
}

function InsertProductForm(props: InsertProductPropsForm): React.ReactElement {
  const { visible, onCancel, onCreate } = props
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="Insert a new product"
      okText="Insert"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={async () => {
        const newProduct = await form.validateFields()
        form.resetFields()
        onCreate(newProduct)
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item name="code" label="Code" rules={[{ required: true, message: "Please input the filed" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="lot" label="Lot" rules={[{ required: true, message: "Please input the field" }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input the field" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true, message: "Please input the field" }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="promoPrice" label="Promo Price" rules={[{ required: false }]}>
          <Input />
        </Form.Item>
        <Form.Item name="inPromo" label="In promo" rules={[{ required: true }]} valuePropName="checked">
          <Checkbox defaultChecked={false} />
        </Form.Item>
        <Form.Item
          name="expirationDate"
          label="Expiration Date"
          rules={[{ required: true, message: "Please input the field" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="purchaseDate"
          label="Purchase Date"
          rules={[{ required: true, message: "Please input the field" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>

  )
}

interface InsertProductProps {
  products: Products[]
  setProducts: Dispatch<SetStateAction<Products[]>>
}

export default function InsertProduct(props: InsertProductProps): React.ReactElement {
  const { products, setProducts } = props
  const [visible, setVisible] = useState(false)

  const onCreate = async (values: Products): Promise<void> => {
    const newProduct = values
    newProduct.id = `${values.code}${values.lot}`
    console.log(newProduct)
    try {
      const insertResult = (
        await API.graphql(graphqlOperation(createProducts, { input: newProduct }))
      ) as GraphQLResult<Products>
      console.log(insertResult)
    } catch (e) {
      console.error(e)
    }

    const newProductsList = products.concat(newProduct)
    setProducts(newProductsList)
    setVisible(false)
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        New Product
      </Button>
      <InsertProductForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
      />
    </div>
  )
}
