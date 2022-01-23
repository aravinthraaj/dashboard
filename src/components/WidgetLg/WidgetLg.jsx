import React from "react"
import "./WidgetLg.css"
const Button = ({ type }) => {
  return <button className={`widgetLgButton ${type}`}>{type}</button>
}

function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Last Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Abbirami</span>
          </td>
          <td className="widgetLgDate">02 June 2022</td>
          <td className="widgetLgAmount">$4000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Abbirami</span>
          </td>
          <td className="widgetLgDate">02 June 2022</td>
          <td className="widgetLgAmount">$4000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Abbirami</span>
          </td>
          <td className="widgetLgDate">02 June 2022</td>
          <td className="widgetLgAmount">$4000</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Abbirami</span>
          </td>
          <td className="widgetLgDate">02 June 2022</td>
          <td className="widgetLgAmount">$4000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
