import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./checkout-details.scss"

const CheckoutDetails = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='CheckoutDetails' breadCrumbParent='Pages' breadCrumbActive='CheckoutDetails' />
      checkout-details is working
    </Fragment>
  )
}

export default CheckoutDetails
