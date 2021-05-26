import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./store-brands.scss"

const StoreBrands = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='StoreBrands' breadCrumbParent='Pages' breadCrumbActive='StoreBrands' />
     store-brands is working
    </Fragment>
  )
}

export default StoreBrands
