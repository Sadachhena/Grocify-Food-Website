import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import CustomerSaying from '../Customer/CustomerSaying'
import Footer from '../Footer/Footer'


export default function Home() {
  return (
    <>
      
      <Banner />
      <Category />
      <Products />
     <Discount />
     <Process />
     <CustomerSaying />
    
    </>
  )
}