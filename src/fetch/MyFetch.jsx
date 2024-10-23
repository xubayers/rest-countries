function MyFetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    // contentType: "application/json",

    xhr.onload = function () {
      const response = JSON.parse(xhr.response);
      if (response.status >= 400) {
        reject("No Data Found");
      } else {
        resolve(response);
      }
    };
  });
}

export default MyFetch;
