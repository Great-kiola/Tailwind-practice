import Nftpreview from "./components/Nftpreview"
import OrderSummary from './components/OrderSummary'
import RatingComponent from "./components/RatingComponent"
import Productpreview from './components/Productpreview'
import SocialLinks from "./components/SocialLinks"
import { Route, Routes } from 'react-router-dom'
import ResultSummary from "./components/ResultSummary"

const App = () => {
  return (
    <div>

      <Routes >
        <Route path="/" element= {<OrderSummary />} />
        <Route path='/nftPreview' element= {<Nftpreview />} />
        <Route path='/ratingComponent' element= {<RatingComponent />} />
        <Route path= "/productPreview" element={ <Productpreview />}  />
        <Route path= "/socialLinks" element={ <SocialLinks />}  />
        <Route path= "/resultSum" element={<ResultSummary/> } />
      </Routes>
    </div>
  )
}

export default App