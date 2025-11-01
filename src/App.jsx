import { Suspense, lazy } from 'react'
import Header from './components/header'
import Breadcrumbs from './components/ui/breadcrumbs'
import Product from './components/product-layout'

const OtherProducts = lazy(() => import('./components/ui/related-products'))
const Newsletter = lazy(() => import('./components/newsletter'))
const Footer = lazy(() => import('./components/footer'))

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Product />
      <Suspense fallback={<div className="py-12" />}>
        <OtherProducts />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <Newsletter />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
