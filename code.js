// 1
// function showSize() {
//     alert(Ширина окна: ${window.innerWidth}, Высота окна: ${window.innerHeight});
//   }

//   function checkVerticalScroll() {
//     if (document.documentElement.clientHeight < window.innerHeight) {
//       alert('Вертикальная прокрутка присутствует');
//     } else {
//       alert('Вертикальная прокрутка отсутствует');
//     }
//   }

//   function checkHorizontalScroll() {
//     if (document.documentElement.clientWidth < window.innerWidth) {
//       alert('Горизонтальная прокрутка присутствует');
//     } else {
//       alert('Горизонтальная прокрутка отсутствует');
//     }
//   }

// 2
// function showHeightWithScroll() {
//     let scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//     );
//     alert(высота с учетом прокрученной части: ${scrollHeight});
//   }

//   function showWidthWithScroll() {
//     let scrollWidth = Math.max(
//       document.body.scrollWidth, document.documentElement.scrollWidth,
//       document.body.offsetWidth, document.documentElement.offsetWidth,
//       document.body.clientWidth, document.documentElement.clientWidth
//     );
//     alert(ширина с учетом прокрученной части: ${scrollWidth});
//   }

//   function showHiddenHeight() {
//     let hiddenHeight = document.body.scrollHeight - window.innerHeight;
//     alert(высота спрятанная под прокруткой: ${hiddenHeight});
//   }

// 3
// function showVerticalScroll() {
//     let yOffset = window.pageYOffset;
//     alert(прокручено окно по вертикали: ${yOffset});
//   }

//   function showRemainingScroll() {
//     let remainingScroll = document.body.scrollHeight - window.innerHeight - window.pageYOffset;
//     alert(осталось до конца прокрутки по вертикали: ${remainingScroll});
//   }

// 4
// function scrollToPosition(position) {
//     document.documentElement.scrollTop = position;
//   }

//   function scrollToTop() {
//     document.documentElement.scrollTop = 0;
//   }

//   function scrollToBottom() {
//     document.documentElement.scrollTop = document.body.scrollHeight - window.innerHeight;
//   }

// 5
// function scrollToPosition(position) {
//     window.scrollTo({
//       top: position,
//       behavior: 'auto'
//     });
//   }

//   function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }

//   function scrollToBottom() {
//     window.scrollTo({
//       top: document.body.scrollHeight,
//       behavior: 'smooth'
//     });
//   }

// 6
// function scrollByPosition(x, y) {
//     window.scrollBy(x, y);
//   }

//   function smoothScrollByPosition(x, y) {
//     window.scrollBy({
//       top: y,
//       left: x,
//       behavior: 'smooth'
//     });
//   }

// 7
// function scrollToElement() {
//     var element = document.getElementById('scrollToElement');
//     element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
//   }

// 8
// window.addEventListener('scroll', function() {
//     console.log(window.pageYOffset);
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//       var message = document.createElement('div');
//       message.textContent = 'Вы достигли конца страницы!';
//       document.body.appendChild(message);
//     }
//   });
  