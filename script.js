const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) observer.unobserve(entry.target), entry.target.classList.add('visible');
}), { threshold: 0.12 });
reveals.forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
