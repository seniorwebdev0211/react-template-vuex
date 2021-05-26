import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./store.scss"

const Store = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Store' breadCrumbParent='Pages' breadCrumbActive='Store' />
     store is working
    </Fragment>
  )
}

export default Store
