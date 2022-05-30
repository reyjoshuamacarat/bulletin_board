import { createUseStyles } from "react-jss";
export default function ArticleCard({ id, title, content, createdAt }) {
  return (
    <div key={id} className={classes.main}>
      <p>{title}</p>
      <p>{content}</p>
      <p>{createdAt}</p>
      <button type="submit">Edit</button>
      <button type="submit">Delete</button>
    </div>
  );
}

const classes = createUseStyles({
  main: {
    backgroundColor: "black",
    width: "30vw",
  },
});
