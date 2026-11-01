import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Checking backend status...');

  useEffect(() => {
    fetch('http://localhost:5000/health')
      .then(res => res.json())
      .then(data => setStatus('Connected to Backend: ' + data.status))
      .catch(() => setStatus('Backend offline or not running on port 5000'));
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '3rem', textAlign: 'center' }}>
      <h1 style={{ color: '#0f172a' }}>🚀 Welcome to re_dayvlog_sqlite</h1>
      <p style={{ color: '#64748b' }}>Frontend powered by React + Vite</p>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f1f5f9', borderRadius: '8px', display: 'inline-block' }}>
        <strong>Backend Status: </strong>{status}
      </div>
    </div>
  );
}

export default App;
