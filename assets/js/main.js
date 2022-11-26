const API_KEY = "1d7d90773a32bdec29dbdc2da86f8bdf";
const API_URL = "https://api.themoviedb.org/3/movie/";
const img = 'https://image.tmdb.org/t/p/w300';
const originalImg = 'https://image.tmdb.org/t/p/original';
const main = document.querySelector('.main');
const home = document.querySelector('.home');
const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


var homeIMG = fetch(urlPopular).then(res => res.json()).then(out =>{
        var random = Math.floor(Math.random() * 20);
        var orgimgpage1 = out.results;
        console.log(out);
        var orgimg = orgimgpage1[random];
        console.log(orgimg);
        var imagehome = orgimg.backdrop_path;
        const orgImg = document.createElement('div');
        orgImg.classList.add('org-img');
        orgImg.innerHTML = `
        <img src="${originalImg}${imagehome}" />
        `
        home.appendChild(orgImg);
})

var page = fetch(urlPopular).then(res => res.json()).then(out =>{
    var page1 = out.results;
    console.log(page1);
  main.innerHTML = '';
    page1.forEach(movie => {
        const {title, overview, backdrop_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('box');
        movieEl.innerHTML = `
        <h1>${title}</h1>
        <img src="${img}${backdrop_path}" />
        <p>${overview}</p>
        `
        main.appendChild(movieEl);
    });   
})

const header = document.querySelector("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg14")
const remove_class_on_scroll = () => header.classList.remove("bg14")

window.addEventListener('scroll', function() { 
  
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})