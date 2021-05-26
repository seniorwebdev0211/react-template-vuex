import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./wishlist-view.scss"

const WishlistView = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='WishlistView' breadCrumbParent='Pages' breadCrumbActive='WishlistView' />
      wishlist-view is working
    </Fragment>
  )
}

export default WishlistView
