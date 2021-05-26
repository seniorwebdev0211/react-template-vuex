import { Fragment } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import "./account-store-addresses-create-ong.scss"

const AccountStoreAddressesCreateOng = () => {
 
  const counties = [
    { value: '01', label: 'Alba'},
    { value: '02', label: 'Arad'},
    { value: '03', label: 'Arges'},
    { value: '04', label: 'Bacau'},
    { value: '05', label: 'Bihor'},
    { value: '06', label: 'Bistrita-Nasaud'},
    { value: '07', label: 'Botosani'},
    { value: '08', label: 'Braila'},
    { value: '09', label: 'Brasov'},
    { value: '10', label: 'Bucuresti'},
    { value: '11', label: 'Buzau'}
  ]

  const cities = [
    { value: '11902978', label: 'Abrud'},
    { value: '686710', label: 'Abrud-Sat'},
    { value: '686702', label: 'Achimetesti'},
    { value: '686696', label: 'Acmariu'},
    { value: '686590', label: 'Aiud'},
    { value: '686589', label: 'Aiudul de Sus'},
    { value: '686578', label: 'Alba Iulia'},
    { value: '686580', label: 'Albac'},
    { value: '686508', label: 'Alecus'},
    { value: '686446', label: 'Almasu de Mijloc'},
    { value: '11903019', label: 'Ambru'}
  ]

  return (
    <Fragment>
      <div className='account-store-addresses-create-ong container'>
        <Row>
          <Col sm='0' md='0' lg='2'></Col>
          <Col sm='12' md='12' lg='8'>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <Card>
                  <CardHeader>
                    <CardTitle tag='h4'>Adauga adresa ONG</CardTitle>
                  </CardHeader>
                  <hr className='divider' />
                  <CardBody>
                    <CardText tag='h5'>
                      Detalii adresa ONG
                    </CardText>
                    <hr className='sub-divider' />
                    <Row>
                    <Col md='6'>
                        <FormGroup className='mb-2'>
                          <Label for='company_name'>Numele companiei</Label>
                          <Input type='text' id='company_name' bsSize='lg' placeholder='' />
                        </FormGroup>
                      </Col>
                      <Col md='2'>
                        <FormGroup className='mb-2'>
                          <Label for='cui'>CUI</Label>
                          <Input type='select' bsSize='lg' id='cui'>
                            <option>-</option>
                            <option>RO</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md='4'>
                        <FormGroup className='mb-2'>
                          <Label for='company_cui'>CUI companie de la adresa</Label>
                          <Input type='text' id='company_cui' bsSize='lg' placeholder='' />
                        </FormGroup>
                      </Col>
                      <Col md='6'>
                        <FormGroup className='mb-3'>
                          <Label for='company_bank'>Banca</Label>
                          <Input type='text' id='company_bank' bsSize='lg' placeholder='' />
                        </FormGroup>
                      </Col>
                      <Col md='6'>
                        <FormGroup className='mb-3'>
                          <Label for='company_account'>Cont</Label>
                          <Input type='text' id='company_account' bsSize='lg' placeholder='' />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <CardText tag='h5'>
                      Sediul central
                    </CardText>
                    <hr className='sub-divider' />
                    <Row>
                      <Col md='12'>
                        <FormGroup className='mb-2'>
                          <Label for='address'>Adresa</Label>
                          <Input type='text' id='address' bsSize='lg' placeholder='ex: Strada, numar, bloc, scara, etaj, apartament' />
                        </FormGroup>
                      </Col>
                      <Col md='6'>
                        <FormGroup className='mb-3'>
                          <Label for='county'>Judet</Label>
                          <Input type='select' bsSize='lg' id='county'>
                            <option>-</option>
                            {
                              counties.map((county, index) => {
                                return (
                                  <option key={index} value={county.value}>
                                    {county.label}
                                  </option>
                                )
                              })
                            }
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md='6'>
                        <FormGroup className='mb-3'>
                        <Label for='city'>Oras</Label>
                          <Input type='select' bsSize='lg' id='city'>
                            <option>-</option>
                            {
                              cities.map((city, index) => {
                                return (
                                  <option key={index} value={city.value}>
                                    {city.label}
                                  </option>
                                )
                              })
                            }
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col md='12' className='text-right'>
                        <Button.Ripple color='primary' size='lg'>
                          Salveaza
                        </Button.Ripple>
                      </Col>
                    </Row>
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

export default AccountStoreAddressesCreateOng
