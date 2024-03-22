import { Container } from "@mui/material";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
// import SearchBar from "./components/Search/SearchBar";
import TopCopanies from "./components/TopCopanies/TopCopanies";
import Jobs from "./components/Jobs/Jobs";
import TopJobs from "./components/TopJobs/TopJobs";
import Footer from "./components/Footer/Footer";
import JobCards from "./components/JobCards/JobCards";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <NavBar />
        {/* <SearchBar /> */}
        <Provider store={store}>
          <JobCards /> {/* Or any other components needing Redux */}
        </Provider>
        <Banner />
        <TopCopanies />
        <Jobs />
        <TopJobs />
        <Footer />
      </Container>
    </>
  );
}

export default App;
