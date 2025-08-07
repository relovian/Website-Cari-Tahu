document.addEventListener('DOMContentLoaded', function() {

  const h1 = document.querySelector('.utama h1');
  const p = document.querySelector('.utama p');

  const h1Text = h1.textContent;
  const pText = p.textContent;

  h1.textContent = '';
  p.textContent = '';

  function typeEffect(element, text, delay = 50, callback) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }

  typeEffect(h1, h1Text, 60, function() {
    typeEffect(p, pText, 40);
  });
});


fetch('data/jawaTimur.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(function(data) {

      const container = document.querySelector('.containerJawaTimur');


      let cards = document.createElement('div');
      cards.className = 'cards';
      container.appendChild(cards);
        cards.setAttribute('data-aos', 'flip-down'); 

      let boxImage = document.createElement('div');
      boxImage.className = 'gambar';
      cards.appendChild(boxImage);

      let image = document.createElement('img');
      image.src = `${data.gambar}`;
      boxImage.appendChild(image);

      let paragraft1 = document.createElement('p');
      paragraft1.innerHTML = `Upacara Adat : ${data.nama_upacara}`;
      cards.appendChild(paragraft1);
      
      let paragraft2 = document.createElement('p');
      paragraft2.innerHTML = `Asal : ${data.asal_daerah}`;
      cards.appendChild(paragraft2);

      let button = document.createElement('button');
      button.className = 'btn-info';
      button.innerHTML = 'Selengkapnya';
      cards.appendChild(button);

      let cardsDetails = document.createElement('div');
      cardsDetails.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

      const buttonClose = document.querySelector('.btn-info');
      
      showDetails(button, cards, cardsDetails, data);
      const cardsContainer = document.querySelector('.cards');
      photos(data);
    })

     searchUpacaraAdat(data, cards);
});

fetch('data/jawaBarat.json')
  .then(response => response.json())
  .then(data =>  {
    data.forEach(function(data) {
      const container = document.querySelector('.containerJawaBarat');

     let cards = document.createElement('div');
     cards.className = 'cards';
     container.appendChild(cards);
       cards.setAttribute('data-aos', 'flip-down'); 

     let boxImage = document.createElement('div');
     boxImage.className = 'gambar';
     cards.appendChild(boxImage);

     let image = document.createElement('img');
     image.src = `${data.gambar}`;
     boxImage.appendChild(image);

     let paragraft1 = document.createElement('p');
     paragraft1.innerHTML = `Upacara Adat : ${data.nama_upacara}`;
     cards.appendChild(paragraft1);
     
     let paragraft2 = document.createElement('p');
     paragraft2.innerHTML = `Asal : ${data.asal_daerah}`;
     cards.appendChild(paragraft2);

     let button = document.createElement('button');
     button.className = 'btn-info';
     button.innerHTML = 'Selengkapnya';
     cards.appendChild(button);

     let cardsDetails = document.createElement('div');
     cardsDetails.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

     const buttonClose = document.querySelector('.btn-info');
     
     showDetails(button, cards, cardsDetails, data);
     const cardsContainer = document.querySelector('.cards');
     photos(data);
   })
}) 

fetch('data/jawaTengah.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(function(data) {
      const container = document.querySelector('.containerJawaTengah');

     let cards = document.createElement('div');
     cards.className = 'cards';
     container.appendChild(cards);

     let boxImage = document.createElement('div');
     boxImage.className = 'gambar';
     cards.appendChild(boxImage);

     let image = document.createElement('img');
     image.src = `${data.gambar}`;
     boxImage.appendChild(image);

     let paragraft1 = document.createElement('p');
     paragraft1.innerHTML = `Upacara Adat : ${data.nama_upacara}`;
     cards.appendChild(paragraft1);
     
     let paragraft2 = document.createElement('p');
     paragraft2.innerHTML = `Asal : ${data.asal_daerah}`;
     cards.appendChild(paragraft2);

     let button = document.createElement('button');
     button.className = 'btn-info';
     button.innerHTML = 'Selengkapnya';
     cards.appendChild(button);

     let cardsDetails = document.createElement('div');
     cardsDetails.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
     cards.setAttribute('data-aos', 'flip-down'); 

     const buttonClose = document.querySelector('.btn-info');
     
     showDetails(button, cards, cardsDetails, data);
     const cardsContainer = document.querySelector('.cards');
     photos(data);
   })
})


function showDetails(button, cards, cardsDetails, data){
  button.addEventListener('click', function() {
    const popUpInformation = document.querySelector('.popUpInformation');

    popUpInformation.style.display = 'block';
    popUpInformation.innerHTML = '';

    let iconClose = document.createElement('img');
    iconClose.src = 'image/close.png';
    iconClose.className = 'icon';
    popUpInformation.appendChild(iconClose);
    iconClose.style.display = 'block';

    let informationBox = document.createElement('div');
    informationBox.className = 'informationBox';
    popUpInformation.appendChild(informationBox);

    let judul = document.createElement('p');
    judul.innerHTML = `<span>Nama Upacara Adat : </span> ${data.nama_upacara}`;
    judul.className = 'judul';
    informationBox.appendChild(judul);
    judul.style.display = 'block';

    let videos = document.createElement('iframe');
    videos.className = 'videos';
    videos.src = data.videos_src;
    videos.title = "YouTube video player";
    videos.frameborder = "0";
    videos.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    videos.referrerPolicy = "strict-origin-when-cross-origin";
    videos.allowFullscreen = true;
    informationBox.appendChild(videos);
    
    let asalDaerah = document.createElement('p');
    let span = document.createElement('span');
    asalDaerah.innerHTML = `<span>Berasal Dari : </span> ${data.asal_daerah}`;
    informationBox.appendChild(asalDaerah);
    asalDaerah.style.display = 'block';
    
    let waktuPelaksanaan = document.createElement('p');
    waktuPelaksanaan.innerHTML = `<span>Waktu Pelaksanaan : </span> ${data.waktu_pelaksanaan}`;
    informationBox.appendChild(waktuPelaksanaan);
    waktuPelaksanaan.style.display = 'block';
    
    let makna = document.createElement('p');
    makna.innerHTML = `<span>Makna : </span> ${data.makna}`;
    informationBox.appendChild(makna);
    makna.style.display = 'block';
 // bersihkan isi sebelumnya

    // Tambahkan class untuk animasi
    setTimeout(() => {
      popUpInformation.classList.add('show-popup');
    }, 10); // beri sedikit delay agar animasi berjalan
    popUpInformation.style.display = 'block';
    
    let deskripsi = document.createElement('p');
    deskripsi.innerHTML = `<span>Deskripsi : </span> ${data.deskripsi}`;
    informationBox.appendChild(deskripsi);
    deskripsi.style.display = 'block';

    searchUpacaraAdat(undefined, undefined, judul);


    
    const close = document.querySelector('.icon');
    close.addEventListener('click', function() {
        popUpInformation.classList.remove('show-popup');
    // Setelah animasi selesai, sembunyikan elemen sepenuhnya
        popUpInformation.classList.remove('show-popup');
        setTimeout(() => {
          popUpInformation.style.display = 'none';
          popUpInformation.innerHTML = '';
        }, 400);
    
    })
  })
}

function searchUpacaraAdat(data = 'unonymus', cards, judul){

  // console.log(data);

  const submit = document.querySelector('.submit');
  const inputUpacaraAdat = document.querySelector('.inputUpacaraAdat');
  
  inputUpacaraAdat.addEventListener('keydown', function(event) {
    // console.log(submit);
    if(event.key === 'Enter'){
      event.preventDefault();
      submit.click();
    }

  })

  submit.addEventListener('click', function(){
    const inputValue = inputUpacaraAdat.value;
  
      const allCards = document.querySelectorAll('.cards');
      const container = document.querySelector('.container');

      let found = false;
      
      allCards.forEach(card => {
         const namaUpacara = card.querySelector('p').textContent.replace('Upacara Adat : ', '');
          const asalDaerah = card.querySelectorAll('p')[1].textContent.replace('Asal : ', '').toLowerCase();

        if(namaUpacara.toLowerCase().includes(inputValue.toLowerCase()) || inputValue === '' || asalDaerah.toLowerCase().includes(inputValue.toLowerCase())) {
          found = true;
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      })

       if (!found && inputValue !== '') {
        alert('Upacara tidak ditemukan');
         allCards.forEach(card => card.style.display = 'block');
      }

      if (inputValue === '') {
        // Jika input kosong, tampilkan semua
        allCards.forEach(card => card.style.display = 'block');
      }
  })
}

searchUpacaraAdat();

function autoScrollCards() {
  const containerJabar = document.querySelector('.containerJawaBarat');
  const cardsJabar = containerJabar.querySelectorAll('.cards');

  const containerJateng = document.querySelector('.containerJawaTengah');
  const cardsJateng = containerJateng.querySelectorAll('.cards');

  const containerJatim = document.querySelector('.containerJawaTimur');
  const cardsJatim = containerJatim.querySelectorAll('.cards');
  let current = 0;

  setInterval(() => {
    current++;
    if (current >= cardsJabar.length) {
      current = 0;
      // Scroll ke paling kiri (awal container)
      containerJabar.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const card = cardsJabar[current];
      containerJabar.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
    }
  }, 3500);

  setInterval(() => {
    current++;
    if (current >= cardsJatim.length) {
      current = 0;
      // Scroll ke paling kiri (awal container)
      containerJatim.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const card = cardsJatim[current];
      containerJatim.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
    }
  }, 3000);

  setInterval(() => {
    current++;
    if (current >= cardsJateng.length) {
      current = 0;
      // Scroll ke paling kiri (awal container)
      containerJateng.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const card = cardsJateng[current];
      containerJateng.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
    }
  }, 4000);
}

window.addEventListener('load', () => {
  setTimeout(autoScrollCards, 1000);
});

window.addEventListener('scroll', function() {
  const about = document.querySelector('.about');
  const aboutRect = about.getBoundingClientRect();

  function animateWords(element, color, delay = 50) {
    const text = element.textContent;
    const words = text.split(' ');
    element.innerHTML = ''; // kosongkan dulu
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.transition = 'color 0.3s';
      element.appendChild(span);
      setTimeout(() => {
        span.style.color = color;
      }, delay * i);
    });
  }

  function resetWords(element) {
    // Kembalikan ke warna semula
    const text = element.textContent;
    element.innerHTML = text;
    element.style.color = '';
  }

  if (aboutRect.top < window.innerHeight / 2) {
    about.querySelectorAll('h1, p').forEach(el => animateWords(el, 'black'));
  } else {
    about.querySelectorAll('h1, p').forEach(resetWords);
  }
});

function photos(data){
  const photosContainer = document.querySelector('.photos');
  const image = document.createElement('img');
  image.src = data.gambar;
  image.setAttribute('data-aos', 'zoom-in-up'); 
  photosContainer.appendChild(image);
}