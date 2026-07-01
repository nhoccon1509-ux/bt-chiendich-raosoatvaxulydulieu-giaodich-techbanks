/**
 * HỆ THỐNG XỬ LÝ GIAO DỊCH - TECHBANK (Hàm xử lý tập trung)
 * @param {Array} transactions - Mảng các giao dịch trong ngày
 */
function processTransactions(transactions) {
    console.log(`\n--- ĐANG XỬ LÝ MẢNG: [${transactions}] ---`);

    // ==========================================
    // NHIỆM VỤ 1: Tính tổng tiền nhận vào (FOR)
    // ==========================================
    let totalIncome = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i] > 0) {
            totalIncome += transactions[i];
        }
    }

    // ==========================================
    // NHIỆM VỤ 2: Tìm giao dịch đáng ngờ (WHILE)
    // ==========================================
    let hasFraud = false;
    let j = 0;
    while (j < transactions.length) {
        if (transactions[j] > 10000) {
            hasFraud = true;
            break; // Dừng ngay lập tức
        }
        j++;
    }

    // ==========================================
    // NHIỆM VỤ 3: Gửi báo cáo lên Server (DO-WHILE)
    // ==========================================
    let attempts = 0;
    let isSuccess = false;
    do {
        attempts++;
        isSuccess = (Math.random() > 0.8); // Tỉ lệ thành công 20%
    } while (!isSuccess && attempts < 3);


    // ==========================================
    // IN KẾT QUẢ LOG THEO YÊU CẦU
    // ==========================================
    console.log(`1. Tổng tiền nhận vào : $${totalIncome}`);
    console.log(`2. Trạng thái gian lận: ${hasFraud ? "CẢNH BÁO: Phát hiện GD lớn!" : "An toàn"}`);
    console.log(`3. Số lần thử kết nối : ${attempts} lần (${isSuccess ? "Thành công" : "Thất bại"})`);
}

// ==========================================================
// CHẠY KIỂM THỬ VỚI 3 TẬP DỮ LIỆU ĐẦU VÀO KHÁC NHAU
// ==========================================================

// Kịch bản 1: Mảng bình thường (Có âm, có dương, có giao dịch lớn)
const normalData = [200, -50, 15000, 300];
processTransactions(normalData);

// Kịch bản 2: Mảng toàn số âm (Chỉ có rút tiền/chuyển đi)
const allNegativeData = [-100, -500, -20, -90];
processTransactions(allNegativeData);

// Kịch bản 3: Mảng rỗng [] (Không có giao dịch nào trong ngày)
const emptyData = [];
processTransactions(emptyData);