import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./account-email.scss"

const AccountEmail = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='AccountEmail' breadCrumbParent='Pages' breadCrumbActive='AccountEmail' />
      account-email is working
    </Fragment>
  )
}

export default AccountEmail
