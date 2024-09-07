import JobListingPage from "./components/JobListingPage";
import './index.css';

function App() {
  return (
    <div className="App">

      <p className="box-border hover:box-content bg-gradient-to-br from-indigo-600 to-pink-500 text-white px-10 my-3 font-bold text-5xl">Job Listings</p>
      <JobListingPage />
    </div>
  );
}

export default App;

