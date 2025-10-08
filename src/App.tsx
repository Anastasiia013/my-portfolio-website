import "./shared/styles/styles.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import PageLayout from "./layouts/PageLayout/PageLayout";
import ScrollToTop from "./shared/components/ScrollToTop/ScrollToTop";
import Navigation from "./Navigation";

function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Header />
      <Navigation />
      <Footer />
    </PageLayout>
  );
}

export default App;
