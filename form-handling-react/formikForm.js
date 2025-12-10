import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik Submitted:", values);
  };

  return (
    <div>
      <h2>Formik Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Submit with Formik</button>
        </Form>
      </Formik>
    </div>
  );
}
