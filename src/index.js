import getApi from "./data/index.js";
import { url } from "./util/index.js";
import { Card } from "./ui/index.js";
import { buttonEvents } from "./components/index.js";

const cards = document.getElementById("countries");

const getData = async (url) => {
  try {
    const data = await getApi(url);
    cards.innerHTML = Card(data);
    buttonEvents(data);
  } catch (err) {
    console.error(err);
  }
};

getData(url);
