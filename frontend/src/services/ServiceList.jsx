import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import antoanImg from '../assets/images/An-Toan-Icon.svg'
import emotionImg from '../assets/images/Emotional-Icon.svg'
import forestImg from '../assets/images/Forest-Icon.svg'

const servicesData = [
   {
      imgUrl: antoanImg,
      title: `Safe and Kind`,
      desc: `Safety is E-Wander's top priority. Every route is surveyed, rest stops carefully inspected to craft a meticulous and precise journey, paying close attention to every one of your experiences. Together, we make memorable journeys.`,
   },
   {
      imgUrl: emotionImg,
      title: `Emotions`,
      desc: `We journey with you, taking every step, opening our hearts to share and receive... And in each adventure, you have more space to listen to yourself, with nature's embrace, cherishing every moment, finding peace and warmth.`,
   },
   {
      imgUrl: forestImg,
      title: 'Nature',
      desc: `E-Wander collaborates with local support teams to provide a rich indigenous cultural experience. Meanwhile, we continuously strives to protect the environment, preserve natural landscapes, and minimize waste on every journey.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList