const LISTA_URL= "https://raw.githubusercontent.com/thematititas/To-do/e670c76c9ce0e700963a7d1e0beb8078a72d89fc/lista.json?token=GHSAT0AAAAAACJNKOLEVCFGFTIR6YYFOIAOZJZUNRA";


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

  