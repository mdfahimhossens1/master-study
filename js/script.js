$(document).ready(function () {
  $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: true,
    draggable: true,
    fade: true,
    speed: 1000,
    nextArrow: '<button type="button" class="slick-next-custom"><i class="fa-solid fa-chevron-left"></i></button>',
    prevArrow: '<button type="button" class="slick-prev-custom"><i class="fa-solid fa-chevron-right"></i></button>',
  });
});

$('.popular_inner').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

$('.testi_inner').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next-custom-one"><i class="fa-solid fa-chevron-left"></i></button>',
  prevArrow: '<button type="button" class="slick-prev-custom-one"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// ===========================Form Validated Code=========================

const form = document.getElementById('form');
const fName = document.getElementById('name');
const emailAddress = document.getElementById('email');
const phoneNumber = document.getElementById('phone');
const validError = document.getElementById('vld_error_msg');

function checkInputs() {
  let items = document.querySelectorAll('.item');
  for (const item of items) {
    if (item.value == "") {
      item.classList.add('error')
      item.parentElement.classList.add('error')
    };

    if (items[1].value !== "") {
      checkMail();
    };

    items[1].addEventListener('keyup', () => {
      checkMail();
    });

    item.addEventListener('keyup', () => {
      if (item.value !== '') {
        item.classList.remove('error')
        item.parentElement.classList.remove('error')
      } else {
        item.classList.add('error')
        item.parentElement.classList.add('error')
      }
    })
  }
}

function checkMail() {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ;
  const errorTextEmail = document.querySelector('.error_txt.email');

  if (emailAddress.value !== "") {
    errorTextEmail.innerHTML = 'Email address seems invalid.';
  } else {
    errorTextEmail.innerHTML = "Please fill in the required field.";
  }

  if (!emailAddress.value.match(re)) {
    emailAddress.classList.add('error')
    emailAddress.parentElement.classList.add('error')
  } else {
    emailAddress.classList.remove('error')
    emailAddress.parentElement.classList.remove('error')
  }
}

function validerrorMsg() {

  if (checkInputs() !== checkMail()) {
    console.log('nahh');
  } else {
    validError.style.display = 'block';
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
  validerrorMsg();

  if (!fName.classList.contains("error") && !emailAddress.classList.contains("error") && !phoneNumber.classList.contains("error")) {
    ;

    form.reset();
    return false;
  }
})

/*===================Menu Bar==================*/
const hamburger = document.querySelector(".toggle_bar");
const navMenu = document.querySelector(".main_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));