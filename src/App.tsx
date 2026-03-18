import React from 'react';
import Layout from './components/Layout'; // ✅ default import
import Courses from './pages/Courses'; // ✅ default import

function App() {
  return (
    <Layout>
      <Courses />
    </Layout>
  );
}

export default App;