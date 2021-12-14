window.onscroll = () => {
  // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const vh = 100;
  if (document.body.scrollTop > vh || document.documentElement.scrollTop > vh) {
    document.querySelector('nav').classList.add('show')
  } else {
    document.querySelector('nav').classList.remove('show')
  }
}