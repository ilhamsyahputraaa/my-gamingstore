import React from 'react'
import Profile from './Profile'
import Footer from './Footer'
import MenuItem from './MenuItem'

export default function SideBar() {
  return (
    <>
            <section className="sidebar">
          <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
              <MenuItem title={'Overview'} link={'/overview'} src={'overview'} active/>
              <MenuItem title={'Transactions'} link={'/transactions'} src={'transactions'} />
              <MenuItem title={'Messages'} link={'/messages'} src={'messages'} />
              <MenuItem title={'Card'} link={'/card'} src={'card'} />
              <MenuItem title={'Rewards'} link={'/rewards'} src={'rewards'} />
              <MenuItem title={'Setting'} link={'/setting'} src={'setting'} />
              <MenuItem title={'Log Out'} link={'/log-out'} src={'logout'} />
            </div>
            <Footer />
          </div>
        </section>
    </>
  )
}
