// 1. 抓取所有的選項按鈕和確定按鈕
const answers = document.querySelectorAll('.answer');
const submitBtn = document.getElementById('submit-btn');

let selectedAnswer = null; // 用來儲存玩家選了哪一個

// 2. 為每個選項按鈕加入「點擊事件」
answers.forEach(button => {
  button.addEventListener('click', function() {
    // 先移除所有按鈕的「選中狀態」（這需要配合下面的 CSS）
    answers.forEach(btn => btn.classList.remove('selected'));
    
    // 幫現在點擊的這個按鈕加上「選中狀態」
    this.classList.add('selected');
    
    // 紀錄選了哪一個 (例如 A, B 或 C)
    selectedAnswer = this.getAttribute('data-value');
    console.log("當前選擇:", selectedAnswer);
  });
});

// 3. 為「確定」按鈕加入點擊事件
submitBtn.addEventListener('click', function() {
  if (selectedAnswer === null) {
    alert("請先選擇一個答案喔！");
  } else {
    // 假設正確答案是 B
    if (selectedAnswer === "A") {
      alert("答對了！NOT 邏輯閘在特定設計下很省電。");
    } else {
      alert("再試試看，這題的答案是 A 喔！");
    }
  }
});
