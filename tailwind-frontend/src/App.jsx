import Nftpreview from "./components/Nftpreview"
import OrderSummary from './components/OrderSummary'
import RatingComponent from "./components/RatingComponent"
import Productpreview from './components/Productpreview'
import SocialLinks from "./components/SocialLinks"
import ResultSummary from "./components/ResultSummary"
import StatsPreview from "./components/StatsPreview"
import Colpreview from "./components/Colpreview"
import MortgageCalc from "./components/MortgageCalc"
import Home from "./Pages/Home"

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Routes >
        <Route path="/" element= {<Home />} />
        <Route path='/nftPreview' element= {<Nftpreview />} />
        <Route path='/orderSumm' element= {<OrderSummary />} />
        <Route path='/ratingComponent' element= {<RatingComponent />} />
        <Route path= "/productPreview" element={ <Productpreview />}  />
        <Route path= "/socialLinks" element={ <SocialLinks />}  />
        <Route path= "/resultSum" element={<ResultSummary/> } />
        <Route path="/statsPreview" element= {<StatsPreview/>} />
        <Route path="/colPreview" element={<Colpreview/>} />
        <Route path="/mortgageCalc" element={<MortgageCalc/>} />
      </Routes>
    </div>
  )
}

export default App