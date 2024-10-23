// get data if it there otherwise retrun emply array
// add new visited country in "visitedCountries"
// remove country id
function getVisiteData() {
  const getData = localStorage.getItem("visitedCountries");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
}

function saveData(datas) {
  localStorage.setItem("visitedCountries", JSON.stringify(datas));
}

function setNewVisitedData(id) {
  const allData = getVisiteData();
  for (let ids of allData) {
    if (allData.includes(id)) return;
  }
  allData.push(id);
  saveData(allData);
}

function removeItem(country) {
  let getDatas = getVisiteData();
  let datas = getDatas.filter((id) => id !== country.cca2);

  saveData(datas);
}

export { getVisiteData, removeItem, setNewVisitedData };
