import { header } from './modules/header';
import { tab } from './modules/tab';
import { scroll } from './modules/scroll';
import { utility } from './modules/utility';
import { modal } from './modules/modal';
import { smooth } from './modules/smooth';
tab();
header();
scroll();
utility();
modal();
smooth();

if(window.document.body.id === 'top') {
  window.addEventListener('load', function () {
    sliderStart();
 });
 
 function sliderStart() {
 
     const slide = document.getElementById('slide_wrap');      //スライダー親
     const slideItem = slide.querySelectorAll('.slide_item');   //スライド要素
     const totalNum = slideItem.length - 1;                     //スライドの枚数を取得
     const FadeTime = 2000;                                     //フェードインの時間
     const IntarvalTime = 5000;                                 //クロスフェードさせるまでの間隔
     let actNum = 0;                                            //現在アクティブな番号
     let nowSlide;                                              //現在表示中のスライド
     let NextSlide;                                             //次に表示するスライド
 
     // スライドの1枚目をフェードイン
     slideItem[0].classList.add('show_', 'zoom_');
 
     // 処理を繰り返す
     setInterval(() => {
         if (actNum < totalNum) {
 
             let nowSlide = slideItem[actNum];
             let NextSlide = slideItem[++actNum];
 
             //.show_削除でフェードアウト
             nowSlide.classList.remove('show_');
             // と同時に、次のスライドがズームしながらフェードインする
             NextSlide.classList.add('show_', 'zoom_');
             //フェードアウト完了後、.zoom_削除
             setTimeout(() => {
                 nowSlide.classList.remove('zoom_');
             }, FadeTime);
 
         } else {
 
             let nowSlide = slideItem[actNum];
             let NextSlide = slideItem[actNum = 0];
 
             //.show_削除でフェードアウト
             nowSlide.classList.remove('show_');
             // と同時に、次のスライドがズームしながらフェードインする
             NextSlide.classList.add('show_', 'zoom_');
             //フェードアウト完了後、.zoom_削除
             setTimeout(() => {
                 nowSlide.classList.remove('zoom_');
             }, FadeTime);
 
         };
     }, IntarvalTime);
 
 }
}


AOS.init({
    offset: 300,
    duration: 300,
    easing: 'ease',
    delay: 50,
    once: false,
    anchorPlacement: 'top-center',
});

