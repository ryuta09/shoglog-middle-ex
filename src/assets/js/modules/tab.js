export function tab() {

$(function() {
 
  // ①タブをクリックしたら発動
  $('.p-top_news_tag li').click(function() {
 
    // ②クリックされたタブの順番を変数に格納
    const index = $('.p-top_news_tag li').index(this);
 
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.p-top_news_area ul').removeClass('show').eq(index).addClass('show');
 
  });
});
}

