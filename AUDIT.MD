# Lazyloading

(with LazyLoading)[with-lazy-loading.png]
The website loading with lazyloading. The red line is the indicator that the loading is done but there are things to be loaded in.
After the red line the images load in because you scrolled there.

```JS

const images = document.querySelectorAll('[data-src]');
const config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
};
let loaded = 0;

const observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      self.unobserve(entry.target);
    }
  });
}, config);

images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) { return; }
  img.src = src;
}

```
