var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=f95f57ca9ab4a07dc5c79a7018898ed8bab943aeb0b825449b050e93');

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
};

request.send();
