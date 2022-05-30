let articleData = [
  {
    id: 1,
    title: "Article 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date().toDateString(),
  },
];

export let counter = 1;

export function getArticles() {
  return articleData;
}

export function getCounter() {
  return counter;
}

export function addCounter() {
  counter++;
}
