//variables

const url = 'https://dev.to/api/articles?username=kerthin';
const blog_post = document.querySelector('.blog_posts');

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
        <a href="${article.url}">
            <img class="cover_img" src="${article.cover_image}"/>
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
        </a>
      `;
      //display the data on screen
      blog_post.appendChild(HTMLUI);
    });
  });
