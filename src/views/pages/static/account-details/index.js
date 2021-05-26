import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./account-details.scss"

const AccountDetails = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='AccountDetails' breadCrumbParent='Pages' breadCrumbActive='AccountDetails' />
      account-details is working
    </Fragment>
  )
}

export default AccountDetails
