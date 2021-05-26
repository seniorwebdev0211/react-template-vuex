import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./account-store.scss"

const AccountStore = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='AccountStore' breadCrumbParent='Pages' breadCrumbActive='AccountStore' />
      account-store is working
    </Fragment>
  )
}

export default AccountStore
