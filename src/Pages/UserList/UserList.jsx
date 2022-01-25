import { useState } from "react"
import "./UserList.css"
import { userRows } from "../../Dummydata"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

function UserList() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstname",
      headerName: "First Name",
      width: 130,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.firstname}
          </div>
        )
      },
    },
    { field: "lastname", headerName: "Last Name", width: 130, editable: true },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstname || ""} ${params.row.lastname || ""}`,
    },

    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 280,
      valueGetter: (params) => {
        let emailid = params.row.firstname + params.row.lastname
        emailid = emailid.replace(/\s+/g, "")

        return `${emailid.toLowerCase()}@email.com`
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlined
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="userList">
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

export default UserList
