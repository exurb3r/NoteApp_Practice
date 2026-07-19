import { Helmet } from "react-helmet-async";
import "../styles/pages/PersonalNotes.css"; // Import the CSS file for styling

export default function PersonalNotes() {
  return (
    <>
      <Helmet>
        <title>Personal Notes</title>
      </Helmet>

      <div className="personal-notes-page">
        <h1>Personal Notes Page</h1>
      </div>
    </>
  );
}