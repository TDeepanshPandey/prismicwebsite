import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const CallToAction = ({ slice }) => (
  <section>   
    <PrismicRichText field={slice.primary.title} />
    <PrismicRichText field={slice.primary.description} />
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    <span >{ slice.primary.buttontext }</span>
  </section>
  
)

export default CallToAction