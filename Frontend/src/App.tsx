import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomepagePage from './pages/HomepagePage';
import DealerListingsPage from './pages/DealerListingsPage';
import TractorListingsPage from './pages/TractorListingsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<HomepagePage />} /> {/* Changed path to "/" */}
        {/* Route for DealerListings Page */}
        <Route path="/DealerListings" element={<DealerListingsPage />} /> {/* Added a new route for the Dealer Listings page */}
        {/* Route for TractorListings Page */}
        <Route path="/TractorListings" element={<TractorListingsPage />} /> {/* Changed path to "/TractorListings" */}
      </Routes>
    </Router>
  );
}

export default App;
