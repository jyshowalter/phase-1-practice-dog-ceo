console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", loadImages)

function loadImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => {
        const images = data.message;
        images.forEach(image => {
            const p = document.createElement('span');
            document.querySelector('#dog-image-container').appendChild(p);
            p.innerHTML = `<img src='${image}' alt='dog' height='250'/>`;
        })
    })
}

function loadBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
        const breeds = data.message;
        for (let breed in breeds) {
            const li = document.createElement('li');
            document.querySelector('#dog-breeds').appendChild(li);
            li.innerText = breed;
            li.addEventListener('click', () => {
                li.style.color = 'orange';
        })
    }
    })
}

loadBreeds()

document.addEventListener("DOMContentLoaded", function(){
    let breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function() {
      let breedUrl = "https://dog.ceo/api/breeds/list/all";
      fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
          let breeds = data.message;
          let breedList = document.getElementById("dog-breeds");
          breedList.innerHTML = "";
          for (let breed in breeds) {
            if (breed.startsWith(breedDropdown.value)) {
              let breedItem = document.createElement("li");
              breedItem.innerText = breed;
              breedList.appendChild(breedItem);
            }
          }
        });
    });
  });