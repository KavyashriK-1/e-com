
import React from 'react';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/Navbar';
import ContactBar from './components/ContactBar/contact';

function App() {
  return (
    <div className="page-wrapper">
      <ContactBar/>
      <Navbar/>
       <main className="main-content">
    {/* Your page routes or content */}
  </main>
  
      <Footer />
      
    </div>
  );
}

export default App;

<div className="page-wrapper">
  <Navbar />
  <main className="main-content">
    {/* Your page routes or content */}
  </main>
  <Footer />
</div>
