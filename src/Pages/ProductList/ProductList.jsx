import { useState } from "react"
import "./ProductList.css"
import { productRows } from "../../Dummydata"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

function ProductList() {
  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.productname}
          </div>
        )
      },
    },
    { field: "stock", headerName: "Stock", width: 130, editable: true },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },

    {
      field: "action",
      headerName: "Action",
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlined
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList
