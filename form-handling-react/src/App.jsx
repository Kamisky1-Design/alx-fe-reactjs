import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.jsx";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}
