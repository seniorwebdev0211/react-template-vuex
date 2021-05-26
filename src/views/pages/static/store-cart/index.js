import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./store-cart.scss"

const StoreCart = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='StoreCart' breadCrumbParent='Pages' breadCrumbActive='StoreCart' />
      store-cart is working
    </Fragment>
  )
}

export default StoreCart
