let i = 0;
function ekle() {
  i++;
  let textim = document.getElementById("metinal").value;
  if (!textim) {
    alert("Lütfen Bir Görev Girin");
} else {
    let divolustur = document.createElement("div");
    document.getElementById("anagovde").appendChild(divolustur);
    divolustur.setAttribute("class", "listoge");
    divolustur.setAttribute("id", "div" + i);

    let yaziolustur = document.createElement("p");
    document.getElementById("div" + i).appendChild(yaziolustur);
    yaziolustur.innerHTML = textim;
    yaziolustur.setAttribute("id", "yazi" + i);
    yaziolustur.setAttribute("class", "yazilar");

    let duzenleolustur = document.createElement("button");
    document.getElementById("div" + i).appendChild(duzenleolustur);
    duzenleolustur.setAttribute("id", "duzenle" + i);
    duzenleolustur.innerText = "Edit";
    duzenleolustur.setAttribute("onclick", `duzenle("yazi${i}",div${i})`);

    let silolustur = document.createElement("button");
    document.getElementById("div" + i).appendChild(silolustur);
    silolustur.setAttribute("id", "sil" + i);
    silolustur.innerText = "Delete";
    silolustur.setAttribute("onclick", "sil(div" + i + ")");
  }
}
let hey = 0;
function duzenle(yaziid, divid) {
  hey++;

  let yeniyazi = document.createElement("input");
  yeniyazi.setAttribute("type", "text");
  divid.appendChild(yeniyazi);
  yeniyazi.setAttribute("id", "yeni" + hey);
  let yazi1 = document.getElementById("yeni" + hey).value;


  let yenibuton = document.createElement("button");
  yenibuton.setAttribute("id","silinecek"+hey)
  yenibuton.setAttribute("onclick", `hadi("yeni${hey}",${yaziid},"silinecek${hey}")`);
  yenibuton.innerHTML = "Confirm";
  divid.appendChild(yenibuton);
}
function hadi(gelenimiz, yazim,silbunu) {
  let yenidegisken = document.getElementById(gelenimiz).value;
  yazim.innerHTML = yenidegisken;
  document.getElementById(gelenimiz).remove();
  document.getElementById(silbunu).remove();
}
function sil(id) {
  document.getElementById("anagovde").removeChild(id);
}