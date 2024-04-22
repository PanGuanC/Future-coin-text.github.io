// 點擊白皮書按鈕顯示白皮書內容
document.getElementById("whitepaper-btn").addEventListener("click", function() {
    document.getElementById("whitepaper-content").style.display = "block";
});

// 點擊叉叉按鈕關閉白皮書內容
document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("whitepaper-content").style.display = "none";
});

// 點擊免責聲明按鈕顯示免責聲明內容
document.getElementById("disclaimer-btn").addEventListener("click", function() {
    document.getElementById("disclaimer-content").style.display = "block";
});

// 點擊免責聲明內容的叉叉按鈕關閉免責聲明內容
document.getElementById("disclaimer-close-btn").addEventListener("click", function() {
    document.getElementById("disclaimer-content").style.display = "none";
});

// 監聽接受免責聲明的選項
document.getElementById("accept-checkbox").addEventListener("change", function() {
    const acceptBtn = document.getElementById("accept-btn");
    if (this.checked) {
        acceptBtn.disabled = false;
    } else {
        acceptBtn.disabled = true;
    }
});

// 點擊確定按鈕
document.getElementById("accept-btn").addEventListener("click", function() {
    if (document.getElementById("accept-checkbox").checked) {
        // 在這裡執行當用戶確定時的操作
        alert("You have accepted the disclaimer!");
        // 關閉免責聲明內容
        document.getElementById("disclaimer-content").style.display = "none";
        // 顯示成為計畫人員的按鈕
        document.getElementById("become-member-btn").style.display = "inline-block";
    } else {
        alert("Please accept the disclaimer first!");
    }
});

// 點擊成為計畫人員按鈕顯示成為計畫人員內容
document.getElementById("become-member-btn").addEventListener("click", function() {
    // 在這裡執行成為計畫人員的操作
    document.getElementById("become-member-content").style.display = "block";
});

// 點擊成為計畫人員內容的叉叉按鈕關閉內容
document.getElementById("become-member-close-btn").addEventListener("click", function() {
    document.getElementById("become-member-content").style.display = "none";
});

// 圖片加載錯誤時的提示
document.querySelector(".cover img").addEventListener("error", function() {
    alert("Failed to load cover image!");
});

// 更新公告內容
document.getElementById("update-announcement-btn").addEventListener("click", function() {
    const newAnnouncement = prompt("Enter the new announcement:");
    if (newAnnouncement !== null) {
        document.getElementById("announcement-content").innerHTML = newAnnouncement;
    }
});
