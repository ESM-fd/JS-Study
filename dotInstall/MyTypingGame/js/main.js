'use strict';

{
  // // ＊２＊　タイプした文字を取得
  // //イベントオブジェクトをeで受け取る
  // document.addEventListener('keydown', e => {
  //   const target = document.getElementById('target');
  //   // ターゲットのtextContentにタイプした文字を設定
  //   target.textContent = e.key;
  // });

  // // ＊３＊　入力する文字列を画面に表示
  // const word = 'red'; // 入力する文字列
  // let location = 0; // 何文字目かを管理
  // const target = document.getElementById('target');
  // target.textContent = word;
  
  // document.addEventListener('keydown', e => {
  //   if (e.key === word[location]) {
  //     location++;
  //     //1:_ed
  //     //2:__d
  //     //3:___
  //   }
  // });

  // // ＊４＊　入力した文字が合ってたら＿に変換　
  // const word = 'red'; // 入力する文字列
  // let location = 0; // 何文字目かを管理
  // const target = document.getElementById('target');
  // target.textContent = word;
  
  // document.addEventListener('keydown', e => {
  //   if (e.key === word[location]) {
  //     location++;
  //     //1:_ed
  //     //2:__d
  //     //3:___
  //     // ロケーションの数分_を表示して残った 
  //     // wordをlocationの位置から表示する
  //     target.textContent = '_'.repeat(location) + word.substring(location);
  //   }
  // });
  
  // // ＊５＊　早期リターン　
  // const word = 'red'; // 入力する文字列
  // let location = 0; // 何文字目かを管理
  // const target = document.getElementById('target');
  // target.textContent = word;
  // document.addEventListener('keydown', e => {
  //   if (e.key !== word[location]) {
  //   return;
  // }
  // location++;
  // target.textContent = '_'.repeat(location) + word.substring(location);
  // });

  // // ＊６＊　複数文字  
  // const words = [
  //   'red',
  //   'blue',
  //   'pink'
  // ];
  // let word;
  // let location = 0; // 何文字目かを管理
  // const target = document.getElementById('target');
  // word = words[Math.floor(Math.random() * words.length)];
  // console.log(word)
  // target.textContent = word;
  // document.addEventListener('keydown', e => {
  //   if (e.key !== word[location]) {
  //   return;
  //   }
  //   location++;
  //   target.textContent = '_'.repeat(location) + word.substring(location);
  // })

  // // ＊７＊　次の文字を表示
  // function setWord() {
  //   word = words[Math.floor(Math.random() * words.length)];
  //   console.log(word)
  //   target.textContent = word;
  //   location = 0;

  // }
  // const words = [
  //   'red',
  //   'blue',
  //   'pink'
  // ];
  // let word;
  // let location = 0; // 何文字目かを管理
  // const target = document.getElementById('target');

  // setWord();

  // document.addEventListener('keydown', e => {
  //   if (e.key !== word[location]) {
  //   return;
  //   }
  //   location++;
  //   target.textContent = '_'.repeat(location) + word.substring(location);
  //   if (location === word.length) {
  //     setWord();
  //   }
  // })

  // ＊８＊　文字の重複を削除
  // function setWord() {
  //   //ランダムな位置から一文字削除して　wordにセット（spliceの結果は配列になる）
  //   word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  //   console.log(word)
  //   target.textContent = word;
  //   location = 0;

  // }
  // const words = [
  //   'red',
  //   'blue',
  //   'pink'
  // ];
  // let word;
  // let location = 0; // 何文字目かを管理
  // const target = document.getElementById('target');

  // setWord();

  // document.addEventListener('keydown', e => {
  //   if (e.key !== word[location]) {
  //   return;
  //   }
  //   location++;
  //   target.textContent = '_'.repeat(location) + word.substring(location);
  //   // 一文字終わったら次の文字をセット
  //   if (location === word.length) {
  //     // 最後のwordまで行ったら結果を表示
  //     if (words.length === 0) {
  //       const result = document.getElementById('result');
  //       result.textContent = 'Finished';
  //       return;        
  //     }

  //     setWord();
  //   }
  // })

  // ＊９＊　クリックでスタート
  // function setWord() {
  //   //ランダムな位置から一文字削除して　wordにセット（spliceの結果は配列になる）
  //   word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  //   console.log(word)
  //   target.textContent = word;
  //   location = 0;

  // }
  // const words = [
  //   'red',
  //   'blue',
  //   'pink'
  // ];
  // let word;
  // let location = 0; // 何文字目かを管理
  // let startTime;

  // const target = document.getElementById('target');

  // document.addEventListener('click', () => {
  //   startTime = Date.now();
  //   setWord();
  // });

  // document.addEventListener('keydown', e => {
  //   if (e.key !== word[location]) {
  //   return;
  //   }
  //   location++;
  //   target.textContent = '_'.repeat(location) + word.substring(location);
  //   // 一文字終わったら次の文字をセット
  //   if (location === word.length) {
  //     // 最後のwordまで行ったら結果を表示
  //     if (words.length === 0) {
  //       // 完了までにかかった時間を表示
  //       const elaspedTime = ((Date.now() - startTime) / 1000).toFixed(2);
  //       const result = document.getElementById('result');
  //       result.textContent = `Finished! ${elaspedTime} seconds!`;
  //       return;        
  //     }
  //     setWord();
  //   }
  // })
  // ＊１０＊　PLAY中にクリックできない様に修正
  function setWord() {
    //ランダムな位置から一文字削除して　wordにセット（spliceの結果は配列になる）
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    console.log(word)
    target.textContent = word;
    location = 0;

  }
  const words = [
    'red',
    'blue',
    'pink'
  ];
  let word;
  let location = 0; // 何文字目かを管理
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[location]) {
    return;
    }
    location++;
    target.textContent = '_'.repeat(location) + word.substring(location);
    // 一文字終わったら次の文字をセット
    if (location === word.length) {
      // 最後のwordまで行ったら結果を表示
      if (words.length === 0) {
        // 完了までにかかった時間を表示
        const elaspedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elaspedTime} seconds!`;
        return;        
      }
      setWord();
    }
  })
}