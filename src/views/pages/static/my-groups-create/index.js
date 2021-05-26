import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./my-groups-create.scss"

const MyGroupsCreate = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='MyGroupsCreate' breadCrumbParent='Pages' breadCrumbActive='MyGroupsCreate' />
      my-groups-create is working
    </Fragment>
  )
}

export default MyGroupsCreate
