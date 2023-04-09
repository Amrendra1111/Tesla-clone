import React from 'react'
import Section from './Section';
import styled from 'styled-components';

function Home() {
  return (
    <container>
      <Section
        title="Model 3"
        description=" Order Online For "
        description2 = "Touchless Delivery" 
        backgroundImg="model-3.jpg"
      leftBtnText="Coustom Order"
      rightBtnText="Existing Inventory"/> 
      <Section title="Model Y"
       description=" Order Online For "
        description2 = "Touchless Delivery" 
        backgroundImg="model-y.jpg"
      leftBtnText="Coustom Order"
      rightBtnText="Existing Inventory"/> 
      <Section title="Model S"
        description=" Order Online For "
        description2 = "Touchless Delivery" 
        backgroundImg="model-s.jpg"
      leftBtnText="Coustom Order"
      rightBtnText="Existing Inventory"/> 
      <Section title="Model X"
        description=" Order Online For "
        description2 = "Touchless Delivery" 
        backgroundImg="model-x.jpg"
      leftBtnText="Coustom Order"
        rightBtnText="Existing Inventory" /> 
      <Section title="Solar Panels"
        description=" Lowest Cost Solar Panels in America "
        // description2 = "Touchless Delivery" 
        backgroundImg="solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"/>
      <Section title="Solar Roof"
        description=" Produce Clean Energy
                                     From Your Roof "
        // description2 = "Touchless Delivery" 
        backgroundImg="solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"/>
      <Section title="Accessories"
        // description=" Order Online For "
        // description2 = "Touchless Delivery" 
        backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
      />
    </container>
  )
}

export default Home
const container = styled.div`

width:100vw;
height:100vh;

`

