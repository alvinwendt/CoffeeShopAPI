const url = "https://localhost:7137/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
  getAllBeanVarieties().then((beanVarieties) => {
    console.log(beanVarieties);
  });
});

function getAllBeanVarieties() {
  return fetch(url).then((resp) => resp.json());
}
