import logo from './berkane3.jpg';

function Logo() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img src={logo} alt="Illustration" width="250" style={{ borderRadius: '8px' }} />
      <p>Illustration intégrée dynamiquement avec React</p>
    </div>
  );
}

export default Logo;