import React from 'react';
import { Row, Col, Hidden } from 'react-grid-system';
import styled from 'styled-components';

const StyledBox = styled.div`
background-color: gray;
color: white;
margin: auto;
display: flex;
height: 50px;
width: 80px;
align-items: center;
padding: 2%;
text-align: center;
justify-content: center;
border-radius: 5px;
margin-top: 20px;
flex-direction: row;
font-size: 0.6em;
font-weight: 500;
box-sizing: border-box;
box-shadow: 1px 1px 2px cyan;
`;

const Box = (props) => (
	<StyledBox>
		<div>{props.children}</div>
	</StyledBox>
);

const FeatureBox = (props) => (
	<Row style={{ marginTop: '40px' }}>
		<Hidden xs>
			<Col xs={3}></Col>
		</Hidden>

		{/* --------- Feature box -------- */}
			<Box>Search for any videos</Box>	
			<Box>VIDFINDER returns your results</Box>
			<Box>Enjoy!</Box>

		<Hidden xs>
			<Col xs={3}></Col>
		</Hidden>
	</Row>
);


export default FeatureBox;