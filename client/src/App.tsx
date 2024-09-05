import JobListingPage from "./components/JobListingPage";
import './index.css';

function App() {
  return (
    <div className="App">
      <p className="bg-red-500 text-blue-800">Hello Client!!✅</p>

      <h1 className="m-10 text-3xl text-sky-950 ">Job Listings</h1>
      <JobListingPage />
    </div>
  );
}

export default App;

