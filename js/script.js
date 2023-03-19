let lodDatas = () => {
  let url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCOuntrise(data));
};

let showCOuntrise = (countrys) => {
  console.log(countrys);

  let get1 = document.getElementById("mahedi");

  for(let country of countrys){
    
console.log(country);
    let create=document.createElement("div")
    create.innerHTML=`
    
    <h1>
    
${country.name.common}
    </h1>
      <img src="${country.flags.png}" alt="">
    
    `
    get1.appendChild(create)
  }


};

lodDatas();
