const modal = (ele) => {
  return `
  <div id="modal-${ele.ccn3}" class="card-modal">
  <div class="card-modal-content">
    <span class="card-modal-close" id="close-modal-${ele.ccn3}">&times;</span>
    <h1 class="card-modal-title">${ele.name.common}</h1>
    <h2 class="card-modal-title-second">${ele.subregion}</h2>
    <div class="card-modal-img">
        <img src=${ele.coatOfArms.png}/>
    </div>
 
  </div>
</div>
  `;
};

export const Card = (data) => {
  let countries = [];

  if (data.length > 0) {
    countries = [...data].map(
      (ele) => `
        <div class="card" id=${ele.ccn3}>
        <div class="card-flag">
            <img src="${ele.flags.png}"/>
        </div>
        <div class="card-content">
            <h2 class="card-title">${ele.name.common}</h2>
            <p class="card-text">${ele.capital[0]}</p>
            <button class="card-button" id="btn-${ele.ccn3}">Read more</button>
        </div>
        </div>
        ${modal(ele)}
        `
    );
  }

  return countries.join("");
};
