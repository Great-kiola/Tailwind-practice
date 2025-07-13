import Nftpreview from "./components/Nftpreview"
import OrderSummary from './components/OrderSummary'
import RatingComponent from "./components/RatingComponent"
import Productpreview from './components/Productpreview'
import SocialLinks from "./components/SocialLinks"
import ResultSummary from "./components/ResultSummary"
import StatsPreview from "./components/StatsPreview"
import Colpreview from "./components/Colpreview"

import { Route, Routes } from 'react-router-dom'

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
        <Route path="/statsPreview" element= {<StatsPreview/>} />
        <Route path="/colPreview" element={<Colpreview/>} />
      </Routes>
    </div>
  )
}

export default App