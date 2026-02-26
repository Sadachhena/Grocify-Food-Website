import React from 'react'
import Heading from '../Heading/Heading'
import Card from './Card/Card'

export default function Category() {
  return (
    <section>
      <Heading highlight="Shop" text="by Category" />
      <div>
        <Card />
      </div>
    </section>
  )
}