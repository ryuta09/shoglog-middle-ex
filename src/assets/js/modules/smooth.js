export function smooth() {
  jQuery('a[href^="#"]').click(function() {
    //ヘッダーの高さを取得
  　let header = jQuery(".l-header").innerHeight();
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得してスクロールした時にヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position
     },
      speed
    );
    return false;
  });
  
}