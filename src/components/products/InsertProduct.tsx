import React, { Dispatch, SetStateAction, useState } from "react"
import {
  Button, Checkbox, Form, Input, InputNumber, Modal,
} from "antd"
import { API, graphqlOperation } from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult } from "@aws-amplify/api"
import log from "loglevel"
import { createProduct, createProductWarehouse } from "../../graphql/mutations"
import { ProductTable } from "./ProductList"
import { CreateProductMutation, CreateProductWarehouseInput } from "../../API"

interface InsertProductPropsForm {
  visible: boolean
  // eslint-disable-next-line no-unused-vars
  onCreate: (values: ProductTable) => void
  onCancel: () => void
}

function InsertProductForm(props: InsertProductPropsForm): React.ReactElement {
  const logger = log.getLogger("InsertProductForm")
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
        try {
          const newProduct = await form.validateFields()
          onCreate(newProduct)
          form.resetFields()
        } catch (e) {
          logger.error(e)
        }
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
        <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the field " }]}>
          <InputNumber />
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
  products: ProductTable[]
  setProducts: Dispatch<SetStateAction<ProductTable[]>>
}

export default function InsertProduct(props: InsertProductProps): React.ReactElement {
  const logger = log.getLogger("InsertProduct")
  const { products, setProducts } = props
  const [visible, setVisible] = useState(false)

  const onCreate = async (values: ProductTable): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { quantity, ...newProduct } = values
    try {
      const insertResult = (
        await API.graphql(graphqlOperation(createProduct, { input: newProduct }))
      ) as GraphQLResult<CreateProductMutation>

      if (insertResult.data?.createProduct) {
        const warehouseProduct: CreateProductWarehouseInput = {
          productWarehouseProductId: insertResult.data?.createProduct.id,
          quantity,
        }
        await API.graphql(graphqlOperation(createProductWarehouse, { input: warehouseProduct }))
        const newProductsList = products.concat(values)
        setProducts(newProductsList)
      }
    } catch (e) {
      logger.error(e)
    }
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
