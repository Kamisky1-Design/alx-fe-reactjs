import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>User Registration Forms</h1>

      <div style={{ marginBottom: "40px" }}>
        <RegistrationForm />
      </div>

      <hr />

      <div style={{ marginTop: "40px" }}>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
