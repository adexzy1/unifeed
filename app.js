//variables

const url = 'https://dev.to/api/articles?username=abhishekraj272';

//api call
fetch(url)
  .then((Response) => Response.json)
  .then((data) => {
    console.log(data);
  });
