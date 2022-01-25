import React from "react"
import "./NewUser.css"

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <from className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">User Name</label>
          <input type="text" className="newUserInput" placeholder="Krish69" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="Krishnamurthy"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="newUserInput"
            placeholder="krishnamurthy@gmail.com"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="newUserInput"
            placeholder="******"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="+91 9994546325"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="Trichy | India"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Gender</label>
          <div className="newUserGender">
            <input type="radio" id="male" value="male" name="gender" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="female" name="gender" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="others" value="others" name="gender" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Gender</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </from>
    </div>
  )
}

export default NewUser
