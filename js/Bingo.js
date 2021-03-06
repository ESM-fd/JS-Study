(function() {
    'use strict';

    // //ビンゴの数字の数 75
    var Bingo = (function(from, to) {
    for(var tmp = []; from <= to; from++) {
        tmp.push(('0' + from).slice(-2));
        }
        return tmp;
    })(1, 75);

    var timers = [];
    var stopCount = 0;
    var isPlaying = false;

    //乱数によってセレクトされた数字
    var bingoNum = 0;

    //bingoNumでセレクトされた数字をBingo配列から削除する変数
    var delArrayNum = 0;

    var panel10 = document.getElementById('panel10');
    var panel1 = document.getElementById('panel1');
    var btn0 = document.getElementById('btn0');
    var spinButton = document.getElementById('spinButton');

    var soundManager = SoundManager();


    // ビンゴの結果エリアのレンダリング
    var renderBingo = function(){
        var fragment= document.createDocumentFragment();
        var divWrapper;
        Bingo.forEach(function(elem, index){
            if( index % 15 === 0 ){
                divWrapper = fragment.appendChild(document.createElement("div"));
            }
            var numDiv = divWrapper.appendChild(document.createElement("div"));
            numDiv.className = "bingoNo";
            numDiv.innerHTML = elem;
        });
        var result = document.getElementById("result");
        result.appendChild(fragment);
    };
    renderBingo();

    //『SPIN』ボタン押下後の処理
    spinButton.addEventListener('click', function() {
        if (isPlaying) return;

        soundManager.playDrum();

        isPlaying = true;
        this.className = 'btn inactive';
        btn0.className = 'btn';

        panel10.className = 'panel';
        panel1.className = 'panel';

        runSlot();
    });

    //『SPIN』ボタン押下後の処理
    function runSlot() {

        var num = Bingo[Math.floor(Math.random() * Bingo.length)];
        bingoNum = num;

        //ランダムで表示されている数字を1のくらいと、10のくらいで分割して表示させる
        var num10 = num.substr(0,1); 
        var num1 = num.substr(1,2); 

        //表示
        panel10.innerHTML = num10;
        panel1.innerHTML = num1;

        timers = setTimeout(function() {
            runSlot()
        }, 25);

    }

    btn0.addEventListener('click', function() {
        stopSlot(0, panel10 ,panel1, this);
    });

    //『STOP』ボタン押下後の処理
    function stopSlot(n, panel10, panel1, btn) {
        if (!isPlaying) return;
        btn.className = 'btn inactive';

        soundManager.stopDrum();
        soundManager.playCymbal();

        clearTimeout(timers);

        //ランダムで選択された数字bingoNumをBingo配列から選定
        delArrayNum = Bingo.indexOf(bingoNum);
        if(delArrayNum >= 0){
            //Bingo配列から削除
            Bingo.splice(delArrayNum,1);
        }

        stopCount++;

        if (stopCount === 1) {

            stopCount = 0;
            spinButton.className = '';

            var bingoDiv = document.querySelectorAll(".bingoNo");

            // change color
            bingoDiv[bingoNum-1].innerHTML;
            bingoDiv[bingoNum-1].className = 'bingoNo unmatched';

            // init
            isPlaying = false;
            spinButton.className = 'btn';
            timers = 0;
        }
    }

    //wavファイルを実行するメソッド
    function SoundManager(){
        var drum = document.getElementById('audio_drum');
        var cymbal = document.getElementById('audio_cymbal');
        return {
          playDrum    : playDrum,
          stopDrum    : stopDrum,
          playCymbal  : playCymbal
        }

        function playDrum(){
          if(drum == null){
            return;
          }
          drum.currentTime = 0;
          drum.play();
        }

        function stopDrum(){
          if(drum == null){
            return;
          }
          drum.pause();
        }

        function playCymbal(){
          if(cymbal == null){
            return;
          }
          cymbal.currentTime = 0;
          cymbal.play();
        }
    }

})();