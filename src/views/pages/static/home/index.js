import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import "./home.scss"

const Home = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Home' breadCrumbParent='Pages' breadCrumbActive='Home' />
     home is working
    </Fragment>
  )
}

export default Home
