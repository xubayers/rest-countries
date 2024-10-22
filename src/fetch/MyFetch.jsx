function MyFetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    // contentType: "application/json",
    xhr.onload = function () {
      const response = JSON.parse(xhr.response);
      resolve(response);
    };
  });
}

export default MyFetch;
