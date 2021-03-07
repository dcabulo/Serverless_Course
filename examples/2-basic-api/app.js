const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    //const { data } = await axios.get("/.netlify/functions/1-hello");
    const { data } = await axios.get("/api/2-basic-api");
    const product = data
      .map((item) => {
        const {
          image: { url },
          name,
          price,
        } = item;
        return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`;
      })
      .join("");
    result.innerHTML = product;
  } catch (er) {
    result.innerHTML = `<h4>There was an error, please try againg later</h4>`;
    //result.textContent = er.response.data;
  }
};

fetchData();
