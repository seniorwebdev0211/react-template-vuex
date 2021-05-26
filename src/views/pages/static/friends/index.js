import { Fragment, useState } from 'react'
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardHeader, CardTitle, CardBody, CardText, Badge, ListGroup, ListGroupItem, Button, CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
import Avatar from '@components/avatar'
import { RotateCcw, UserX } from 'react-feather'
import thumb1 from '@src/assets/images/static/friends/avatar/default-avatar.jpg'
import thumb2 from '@src/assets/images/static/friends/avatar/thumb2.jpg'
import coverImg1 from '@src/assets/images/static/friends/cover/cover1.jpg'
import profileImg1 from '@src/assets/images/static/friends/avatar/avatar1.jpg'
import coverImg2 from '@src/assets/images/static/friends/cover/cover2.jpg'
import profileImg2 from '@src/assets/images/static/friends/avatar/avatar2.jpg'
import coverImg3 from '@src/assets/images/static/friends/cover/cover3.jpg'
import profileImg3 from '@src/assets/images/static/friends/avatar/avatar3.jpg'
import coverImg4 from '@src/assets/images/static/friends/cover/cover4.jpg'
import profileImg4 from '@src/assets/images/static/friends/avatar/avatar4.jpg'
import coverDefault from '@src/assets/images/static/friends/cover/cover-default.jpg'
import profileImg5 from '@src/assets/images/static/friends/avatar/avatar5.jpg'
import profileImg6 from '@src/assets/images/static/friends/avatar/avatar6.jpg'
import profileImg7 from '@src/assets/images/static/friends/avatar/avatar7.jpg'
import coverImg8 from '@src/assets/images/static/friends/cover/cover8.jpg'
import profileImg8 from '@src/assets/images/static/friends/avatar/avatar8.jpg'
import coverImg9 from '@src/assets/images/static/friends/cover/cover9.jpg'
import profileImg9 from '@src/assets/images/static/friends/avatar/avatar9.jpg'
import coverImg10 from '@src/assets/images/static/friends/cover/cover10.jpg'
import profileImg10 from '@src/assets/images/static/friends/avatar/avatar10.jpg'
import "./friends.scss"

const Friends = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const requestAuthors = [
    {
      authorId: 1,
      authorThumb: thumb1,
      authorName: 'Cristian Matei',
      authorLink: '#'
    },
    {
      authorId: 2,
      authorThumb: thumb2,
      authorName: 'Alin Stan',
      authorLink: '#'
    }
  ]

  const friends = [
    {
      id: 1,
      coverImg: coverImg1,
      profileImg: profileImg1,
      name: 'Bogdy Peligrad',
      startDate: 'June 2018',
      profileLink: '#'
    },
    {
      id: 2,
      coverImg: coverImg2,
      profileImg: profileImg2,
      name: 'Bogdy Peligrad',
      startDate: 'July 2018',
      profileLink: '#'
    },
    {
      id: 3,
      coverImg: coverImg3,
      profileImg: profileImg3,
      name: 'Raluca Ganea',
      startDate: 'October 2018',
      profileLink: '#'
    },
    {
      id: 4,
      coverImg: coverImg4,
      profileImg: profileImg4,
      name: 'Stefanescu Mihai',
      startDate: 'June 2018',
      profileLink: '#'
    },
    {
      id: 5,
      coverImg: coverDefault,
      profileImg: profileImg5,
      name: 'Adrian George',
      startDate: 'July 2018',
      profileLink: '#'
    },
    {
      id: 6,
      coverImg: coverDefault,
      profileImg: profileImg6,
      name: 'Marian Malahin',
      startDate: 'July 2018',
      profileLink: '#'
    },
    {
      id: 7,
      coverImg: coverDefault,
      profileImg: profileImg7,
      name: 'Catalin Matei',
      startDate: 'July 2018',
      profileLink: '#'
    },
    {
      id: 8,
      coverImg: coverImg8,
      profileImg: profileImg8,
      name: 'Razvan Cojocaru',
      startDate: 'September 2018',
      profileLink: '#'
    },
    {
      id: 9,
      coverImg: coverImg9,
      profileImg: profileImg9,
      name: 'Peligrad Bogdan',
      startDate: 'September 2018',
      profileLink: '#'
    },
    {
      id: 10,
      coverImg: coverImg10,
      profileImg: profileImg10,
      name: 'Gabe Devo',
      startDate: 'October 2018',
      profileLink: '#'
    }
  ]
  
  const recommendFriends = [
    {
      id: 1,
      profileImg: thumb1,
      name: 'Dragos Alexandrescu',
      profileLink: '#'
    },
    {
      id: 2,
      profileImg: thumb1,
      name: 'A\'ncuta Laiu',
      profileLink: '#'
    },
    {
      id: 3,
      profileImg: thumb1,
      name: 'Ildikó Kozma',
      profileLink: '#'
    },
    {
      id: 4,
      profileImg: thumb1,
      name: 'Mihaela Nicoleta',
      profileLink: '#'
    }
  ]

  return (
    <Fragment>
      <div className='friends container'>
        <Row>
          <Col lg='12' md='12' sm='12' xs='12'>
            <Card className='friends-requests-box'>
              <CardBody>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      active={active === '1'}
                      onClick={() => {
                        toggle('1')
                      }}
                    >
                      <span className='align-middle'>Cereli de prietenie</span>&nbsp;
                      <Badge color={active === '1' ? 'primary' : 'secondary'} pill className={active === '1' ? 'badge-grow' : ''}>0</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === '2'}
                      onClick={() => {
                        toggle('2')
                      }}
                    >
                      <span className='align-middle'>Cereri trimise</span>&nbsp;
                      <Badge color={active === '2' ? 'primary' : 'secondary'} pill className={active === '2' ? 'badge-grow' : ''}>2</Badge>
                    </NavLink>
                  </NavItem>
                </Nav>
                
                <TabContent activeTab={active}>
                  <TabPane tabId='1'>
                    <CardText tag='h5' className='text-center no-item-text'>Nicio cerere noua de prietenie</CardText>
                  </TabPane>
                  <TabPane tabId='2'>
                    <ListGroup className='friend-requests-list'>
                      {
                        requestAuthors.map((author, index) => {
                          return (
                            <ListGroupItem className='d-flex' key={index}>
                              <span className='mr-1'>
                                <Avatar img={author.authorThumb} size='lg' />
                              </span>
                              <span className='author-name'>
                                <Link to={author.authorLink} className='author-link'>
                                  {author.authorName}
                                </Link>
                              </span>
                              <span className='author-action'>                                  
                                <Button.Ripple className='btn-icon' color='danger'>
                                  <UserX size={16} />
                                </Button.Ripple>
                              </span>
                            </ListGroupItem>
                          )
                        })
                      }                        
                    </ListGroup>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl='9' lg='8' md='8' sm='12' xs='12'>
            <Card className='friends-box'>
              <CardHeader>
                <CardTitle>
                  Prietenii mei
                </CardTitle>
              </CardHeader>
              <hr className='divider' />
              <CardBody>
                <Col md='12'>
                  <Row>
                    {
                      friends.map((friend, index) => {
                        return (
                          <Col xl='3' lg='4' md='4' key={index}>
                            <Card className='card-profile friend-item'>
                              <CardImg className='img-fluid' src={friend.coverImg} top />
                              <CardBody>
                                <div className='profile-image-wrapper'>
                                  <div className='profile-image'>
                                    <Avatar img={friend.profileImg} />
                                  </div>
                                </div>
                                <Link to={friend.profileLink}>
                                  <h4 className='friend-name'>{friend.name}</h4>
                                </Link>
                                <h6 className='text-muted'>Prieteni din:</h6>
                                <h5 className=''>{friend.startDate}</h5>
                              </CardBody>
                            </Card>
                          </Col>
                        )
                      })
                    }
                    
                  </Row>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col xl='3' lg='4' md='4' sm='12' xs='12'>
            <Card>
              <CardHeader>
                <CardTitle>
                  Importa contacte
                </CardTitle>
              </CardHeader>
              <hr className='divider' />
              <CardBody>
                <Button.Ripple block color='primary'>
                  <RotateCcw size={14} />
                  <span className='align-middle ml-25'>Importa contacte de la Google</span>
                </Button.Ripple>
              </CardBody>
            </Card>

            <Card className='friends-recommmend-box'>
              <CardHeader>
                <CardTitle>
                  Prieteni Recomandati
                </CardTitle>
              </CardHeader>
              <hr className='divider' />
              <CardBody>
                <ListGroup className='friend-requests-list'>
                    {
                      recommendFriends.map((friend, index) => {
                        return (
                          <ListGroupItem className='d-flex' key={index}>
                            <span className='mr-1'>
                              <Avatar img={friend.profileImg} size='lg' />
                            </span>
                            <span className='author-name'>
                              <Link to={friend.profileLink} className='author-link'>
                                {friend.name}
                              </Link>
                            </span>
                            <span className='author-action'>                                  
                              <Button.Ripple className='btn-icon' color='primary'>
                                <UserX size={16} />
                              </Button.Ripple>
                            </span>
                          </ListGroupItem>
                        )
                      })
                    }                        
                  </ListGroup>
              </CardBody>

            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Friends
