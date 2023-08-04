export function header() {

  const header = document.querySelector('.j-header');
  const header_btn = document.querySelector('.j-header_btn');
  const header_list = document.querySelector('.l-header_nav');
  header_btn.addEventListener('click', ()=>{
    if(header.classList.contains('active')){
      header.classList.remove('active');
    }else {
      header.classList.add('active');
    }
  });
  header_list.addEventListener('click', ()=>{
    if(header.classList.contains('active')){
      header.classList.remove('active');
    }
  });

}
