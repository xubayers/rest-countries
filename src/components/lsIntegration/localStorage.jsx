// get data if it there otherwise retrun emply array
// add new visited country in "visitedCountries"
//
function getVisiteData() {
  const getData = localStorage.getItem("visitedCountries");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
}

function setNewVisitedData(id) {
  const allData = getVisiteData();
  allData.push(id);
  localStorage.setItem("visitedCountries", JSON.stringify(allData));
}

export { getVisiteData, setNewVisitedData };
