//variables

const url = 'https://dev.to/api/articles?username=karankmr';
const blog_post = document.querySelector('.blog_post');

//api call
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let articles = data;

    //loop trough data returned
    articles.forEach((article) => {
      console.log(article);
      //create template litereals for each article
      const HTMLUI = document.createElement('div');
      HTMLUI.classList = 'blog_post';

      HTMLUI.innerHTML = `
      <img src="${article.cover_image}"/>
        <section class="blog_details">
          <h1>${article.title}</h1>
          <p>
            ${article.description}
          </p>
          <div class="author">
            <img src="${article.user.profile_image}" alt="" />
            <div>
              <h5>${article.user.name}</h5>
              <span>${article.tag_list[0]}</span>
            </div>
          </div>
        </section>
      `;
      //display the data on screen
      blog_post.appendChild(HTMLUI);
    });
  });
