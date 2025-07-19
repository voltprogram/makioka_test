// ハンバーガーメニュー要素取得
const hamburger = document.querySelector('.hamburger-menu');

// ハンバーガークリック時の開閉動作
hamburger.addEventListener('click', toggleMenu);

// メニュー項目クリック時にメニューを閉じる
document.querySelectorAll('.nav-menu a').forEach(item => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
});

// メニュー開閉の本体処理
function toggleMenu() {
  const sideMenu = document.querySelector('.main-header');
  const overlay = document.querySelector('.overlay');

  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
}

// ファーストヴュー・スライダー
const fvSplide = new Splide("#fv-splide", {
    autoplay: true, // 自動再生
    type: "fade", // フェード
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    arrows: false, // 矢印ボタンを非表示
    pagination: false, // ページネーションを非表示
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 6000, // 自動再生の間隔
    speed: 2000, // スライダーの移動時間
  }).mount();