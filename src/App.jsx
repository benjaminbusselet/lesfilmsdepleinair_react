import Navbar from './components/Navbar';
import Header from './components/Header';
import AssociationSection from './components/AssociationSection';
import ProgrammationSection from './components/ProgrammationSection';
import ParcSection from './components/ParcSection';
import InscriptionSection from './components/InscriptionSection';
import Footer from './components/Footer';



export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AssociationSection />
      <ProgrammationSection />
      <ParcSection />
      <InscriptionSection />
      <Footer />
    </div>
  );
}