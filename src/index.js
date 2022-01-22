import getApi from "./data/index.js";
import { url } from "./util/index.js";
import { Cards } from "./ui/index.js";
import { buttonEvents } from "./components/index.js";

const cards = document.getElementById("countries");
const loader = document.getElementById("loader");

const getData = async (url) => {
  try {
    const data = await getApi(url);
    loader.style.display = "none";
    cards.innerHTML = Cards(data);
    buttonEvents(data);
  } catch (err) {
    console.error(err);
  }
};

getData(url);
