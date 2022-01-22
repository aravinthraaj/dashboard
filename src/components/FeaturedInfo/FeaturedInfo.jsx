import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import React from "react"
import "./FeaturedInfo.css"

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredItemTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2567</span>
          <span className="featuredMoneyRate">
            -11.9 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSubtitle">Compared to Last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredItemTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2567</span>
          <span className="featuredMoneyRate">
            -11.9 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSubtitle">Compared to Last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredItemTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2567</span>
          <span className="featuredMoneyRate">
            -11.9 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSubtitle">Compared to Last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
