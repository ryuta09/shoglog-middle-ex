export function utility() {
  flatpickr("#flatpickr", {
    locale:'ja',　//日本語化
    minDate:'today', //現在日より前の日は選択できない
    mode:'multiple',//複数日時選択可
    dateFormat:'Y/n/j',//日付の初期値
    
  });

}