import './Components.css';

export default function WelcomeCard({ name = "Guest" }) {
  return (
    <div className="welcome-card">
      <h2 className="welcome-title">Welcome, {name}!</h2>
      <p className="welcome-subtitle">We're glad to have you here</p>
    </div>
  );
}