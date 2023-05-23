import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";


interface SideBarProps{
  activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props:SideBarProps) {

  const { activeMenu } = props;
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem
              title={"Overview"}
              link={"/member"}
              src={"overview"}
              active={activeMenu === "overview"}
            />
            <MenuItem
              title={"Transactions"}
              link={"/member/transaction"}
              src={"transactions"}
              active={activeMenu === "transactions"}
            />
            <MenuItem
              title={"Messages"}
              link={"/member"}
              src={"messages"}
            />
            <MenuItem title={"Card"} link={"/member"} src={"card"} />
            <MenuItem title={"Rewards"} link={"/member"} src={"rewards"} />
            <MenuItem
              title={"Setting"}
              link={"/member/edit-profile"}
              src={"setting"}
              active={activeMenu === "settings"}
            />
            <MenuItem title={"Log Out"} link={"/sign-in"} src={"log-out"} />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
