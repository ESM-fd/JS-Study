'use strict';

{
// No.6～No.8 spinボタンを押す
//   class Panel {
//     constructor() {
//       const section = document.createElement('section');
//       section.classList.add('panel');

//       this.img = document.createElement('img');
//       this.img.src = 'img/seven.png';

//       this.stop = document.createElement('div');
//       this.stop.textContent = 'STOP';
//       this.stop.classList.add('stop');

//       section.appendChild(this.img);
//       section.appendChild(this.stop);

//       const main = document.querySelector('main');
//       main.appendChild(section);
//     }

//     getRandomImage() {
//       const images = [
//         'img/seven.png',
//         'img/bell.png',
//         'img/cherry.png',
//       ];
//       return images[Math.floor(Math.random() * images.length)];
//     }

//     spin() {
//       this.img.src = this.getRandomImage();
//     }
//   }

//   const panels = [
//     new Panel(),
//     new Panel(),
//     new Panel(),
//   ];

//   const spin = document.getElementById('spin');
//   spin.addEventListener('click', () => {
//     panels.forEach(panel => {
//       panel.spin();
//     });
//   });
// }
// No.9～最後
  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        // stopボタンを押したときの処理
        if (this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');

        clearTimeout(this.timeoutId);  //spinの実行を止める

        panelsLeft--;  //-1

        if (panelsLeft === 0) {
          checkResult();
          spin.classList.remove('inactive');
          panelsLeft = 3;
        }
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    getRandomImage() {
      const images = [
        'img/seven.png',
        'img/bell.png',
        'img/cherry.png',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);  //50ミリ秒毎にspin（画像変更）を実行
    }

    isUnmatched(p1, p2) {
    //this.imgがp1,p2どちらとも違う場合にtrue
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatch() {
      //class='unmatched'を追加
      this.img.classList.add('unmatched');
    }
    
    activate() {
      //class='unmatched''inactive'を削除
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }
  }

  function checkResult() {
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  let panelsLeft = 3;

  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    //spinボタンを押したときの処理
    //一度押したらinactiveになって押せない
    if (spin.classList.contains('inactive')) {
      return;
    }
    spin.classList.add('inactive');
    //stopボタンが押せるよう設定、画像をspin
    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  });
}