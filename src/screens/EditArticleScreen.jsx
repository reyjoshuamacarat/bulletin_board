import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { addCounter, getArticles, getCounter } from "../data";

export default function EditArticleScreen() {
  const articleData = getArticles();
  const navigate = useNavigate();
  function onSubmit(values) {
    addCounter();
    articleData.push({
      id: getCounter(),
      title: values.title,
      content: values.content,
      createdAt: new Date().toDateString(),
    });
    navigate("/");
  }
  return (
    <div>
      <Formik initialValues={{ title: "", content: "" }} onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="title"
            />
            {errors.title && touched.title && errors.title}
            <textarea
              type="content"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              placeholder="content"
            />
            {errors.content && touched.content && errors.content}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
