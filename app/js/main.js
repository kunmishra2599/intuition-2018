window.onscroll = () => {
  const nav = document.querySelector('.navbar');
  if (this.scrollY <= 500) nav.className = 'nav navbar navbar-expand-lg navbar-light fixed-top';

  else nav.className = 'nav navbar navbar-expand-lg navbar-light fixed-top on-scroll';
};
