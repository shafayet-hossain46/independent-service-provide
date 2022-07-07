import React, { useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../../Components/Service/Service'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Services = () => {
    const [services, setServices] = useServices()

    return (
        <Container>
            <h2 className="text-center my-5">My Services</h2>
            <Row xs={1} md={4}>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;