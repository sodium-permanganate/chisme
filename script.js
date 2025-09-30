var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=f95f57ca9ab4a07dc5c79a7018898ed8bab943aeb0b825449b050e93');

request.onreadystatechange = function () {
  switch (this.readyState) {
    case 1:
      console.log("Petición iniciada");
      break;
    case 2:
      console.log("Petición enviada");
      break;
    case 3:
      console.log("Petición procesándose");
      break;
    case 4:
      console.log(this.responseText);
      break;
  }
};

request.send();
