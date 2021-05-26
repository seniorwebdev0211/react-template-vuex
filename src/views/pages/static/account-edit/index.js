import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./account-edit.scss"

const AccountEdit = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='AccountEdit' breadCrumbParent='Pages' breadCrumbActive='AccountEdit' />
      account-edit is working
    </Fragment>
  )
}

export default AccountEdit
