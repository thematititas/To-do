const LISTA_URL= "https://raw.githubusercontent.com/thematititas/To-do/main/lista.json?token=GHSAT0AAAAAACJNKOLEAI3YOIGBCIB7FULGZJZU42Q";


var getJSONData = function (url) {
    var result = {};
    showSpinner();
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(function (response) {
        result.status = 'ok';
        result.data = response;
        hideSpinner();
        return result;
      })
      .catch(function (error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
      });
  }

  