import { Fragment } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import "./account-store-addresses.scss"
import { Home, Plus } from 'react-feather'

const AccountStoreAddresses = () => {

  const addresses = [
    {
      firstname: 'Alin',
      lastname: 'Stan',
      phone: '0721012653',
      address: 'Nord City Tower, Bd. Pipera 1/VII, Et. 9',
      county: 'Ilfov',
      city: 'Voluntari'
    },
    {
      firstname: 'Alin',
      lastname: 'Stan',
      phone: '0721012653',
      address: 'ADRESA DE TEST',
      county: 'Bacau',
      city: 'Bacau'
    },
    {
      firstname: 'Alin',
      lastname: 'Stan',
      phone: '0721012653',
      address: 'Ion Mihalache 42',
      county: 'Bucuresti',
      city: 'Bucuresti'
    },
    {
      firstname: 'Alin',
      lastname: 'Stan',
      phone: '0721012653',
      address: '18 Unirii Boulevard, Block 5B, Entrance 2, Apartment 42',
      county: 'Bucuresti',
      city: 'Bucuresti'
    }
  ]

  return (
    <Fragment>
      <div className='account-store-addresses container'>
        <Row>
          <Col sm='0' md='0' lg='2'></Col>
          <Col sm='12' md='12' lg='8' className='account-store-addresses-section'>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <Card>
                  <CardHeader>
                    <CardTitle tag='h5'>Adrese personale</CardTitle>
                  </CardHeader>
                  <hr className='divider' />
                  <CardBody>
                    <div className='account-store-addresses-list'>
                    {
                      addresses.map((address, index) => {
                        return (
                          <Row className='address-item'>
                            <Col md='12'>
                              <Row>
                                <Col md='8' className='address-item-left'>
                                  <span className='mr-2 address-item-icon'>
                                    <Home size='36' />
                                  </span>
                                  <span className='address-item-text'>
                                    <strong className='address-item-title'>{address.firstname} {address.lastname} - {address.phone}</strong>
                                    <br />
                                    {address.address}
                                    <br />
                                    {address.county}, {address.city}
                                  </span>
                                </Col>
                                <Col md='4' className='address-item-right'>
                                  <Button.Ripple color='info'>Editeaza</Button.Ripple>
                                  <Button.Ripple color='flat-danger'>sterge</Button.Ripple>
                                </Col>
                              </Row>
                            </Col>
                            <Col md='12'>
                              <hr className='sub-divider' />
                            </Col>
                          </Row>
                        )
                      })
                    }
                    </div>

                    <div className='text-center'>
                      <Button.Ripple color='primary'>
                        <Plus size={16} />
                        <span className='align-middle ml-25'>Adauga adresa personala</span>
                      </Button.Ripple>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle tag='h5'>Adrese companie</CardTitle>
                  </CardHeader>
                  <hr className='divider' />
                  <CardBody>
                    <CardText>Nu ai setat nicio adresa</CardText>
                    <div className='text-center'>
                      <Button.Ripple color='primary'>
                        <Plus size={16} />
                        <span className='align-middle ml-25'>Adauga adresa companiei</span>
                      </Button.Ripple>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle tag='h5'>Adrese ONG</CardTitle>
                  </CardHeader>
                  <hr className='divider' />
                  <CardBody>
                    <CardText>Nu ai setat nicio adresa</CardText>
                    <div className='text-center'>
                      <Button.Ripple color='primary'>
                        <Plus size={16} />
                        <span className='align-middle ml-25'>Adauga adresa ONG-ului</span>
                      </Button.Ripple>
                    </div>
                  </CardBody>
                </Card>

              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default AccountStoreAddresses
