# 🚨 HTML5 Fullscreen Phishing Demo

🔗 **GitHub Repository**: https://github.com/vanphatit/fullscreen-phishing

**⚠️ CHỈ DÀNH CHO MỤC ĐÍCH GIÁO DỤC VÀ NGHIÊN CỨU BẢO MẬT ⚠️**

Đây là một demo giáo dục về kỹ thuật tấn công phishing sử dụng HTML5 Fullscreen API để tạo ra giao diện browser giả mạo, nhằm mục đích nâng cao nhận thức về bảo mật web.

## 📋 Mô tả Project

Project này mô phỏng một cuộc tấn công phishing tinh vi bằng cách:
- Sử dụng HTML5 Fullscreen API để ẩn thanh địa chỉ của browser
- Hiển thị header browser giả mạo phù hợp với từng loại trình duyệt và hệ điều hành
- Tạo ra trang login Instagram giả để thu thập thông tin đăng nhập
- Phát hiện và cảnh báo người dùng khi họ bị lừa

## 🎯 Mục đích

- **Giáo dục**: Nâng cao nhận thức về các kỹ thuật phishing hiện đại
- **Nghiên cứu**: Demo các lỗ hổng bảo mật trong HTML5 Fullscreen API
- **Đào tạo**: Giúp sinh viên và chuyên gia bảo mật hiểu cách thức hoạt động của phishing

## 🏗️ Cấu trúc Project

```
html5-fullscreen-phishing/
├── 📄 group5.html           # Trang chủ demo
├── 📄 login.html            # Trang login Instagram giả
├── 📄 test.html             # Trang test browser compatibility
├── 📁 css/
│   ├── style.css            # CSS chính cho layout
│   └── facebox.css          # CSS cho popup modal
├── 📁 js/
│   ├── script.js            # JavaScript chính (gốc)
│   ├── plugins.js           # Utility functions
│   └── libs/
│       ├── jquery-1.7.2.js                # jQuery library
│       ├── jquery-ui-1.8.18.custom.min.js # jQuery UI
│       ├── browser-detect.js               # Phát hiện browser và OS
│       ├── fullscreen-api.js          # Fullscreen API compatibility
│       └── facebox.js                      # Modal popup library
├── 📁 images/
│   ├── logo_instagram.png   # Logo Instagram
│   ├── landing-2x.png       # Ảnh preview Instagram
│   ├── chrome-*-header.*    # Fake Chrome headers
│   ├── firefox-*-header.*   # Fake Firefox headers
└── 📁 sound/
    ├── mario-death.mp3      # Âm thanh cảnh báo
```

## 🚀 Cách sử dụng
1. **Bước 1**: Mở `group5.html` - trang chủ với button "Login with Instagram"
2. **Bước 2**: Click vào button sẽ chuyển sang `login.html`
3. **Bước 3**: Trang sẽ tự động request fullscreen và hiện fake browser header (nếu chưa thì thử bấm vào chỗ bất kỳ trên màn hình)
4. **Bước 4**: Người dùng nhập thông tin login vào form giả
5. **Bước 5**: Khi submit form, sẽ hiện popup cảnh báo về việc bị phishing

## 🔧 Tính năng

### ✅ Cross-browser Support
- **Chrome**: ✅ Windows
- **Firefox**: ✅ Windows

### 🎨 Fake Browser Headers
- Tự động phát hiện browser và OS của người dùng
- Hiển thị header browser giả phù hợp:
  - Chrome trên Windows
  - Firefox trên Windows

### 🔊 Audio Warning
- Phát âm thanh Mario death khi bị phishing
- Hỗ trợ format MP3 và OGG

### 📱 Responsive Design
- Hoạt động trên desktop và mobile
- Layout tối ưu cho các kích thước màn hình khác nhau

## 🛡️ Biện pháp Phòng chống

### Cách nhận biết tấn công này:
1. **Kiểm tra URL**: Luôn xem kỹ thanh địa chỉ browser
2. **Fullscreen mode**: Cẩn thận với các trang yêu cầu fullscreen
3. **SSL Certificate**: Kiểm tra chứng chỉ SSL của trang web
4. **Phím F11**: Thử nhấn F11 để thoát fullscreen và xem URL thật

### Khuyến nghị cho Developer:
- Sử dụng Content Security Policy (CSP)
- Hạn chế sử dụng Fullscreen API cho các form nhạy cảm
- Implement proper HTTPS và certificate pinning

## 👥 Team Members (Nhóm 5)

| Tên | MSSV 
|-----|------
| **Lê Văn Phát** | 22110196 
| **Huỳnh Thanh Duy** | 22110118 
| **Trần Như Quỳnh** | 22110218 
| **Nguyễn Chí Thanh** | 22110226 

**Môn học**: Bảo mật Web  
**Giảng viên**: Cô Châu

## 🔍 Browser Compatibility Test

Truy cập `test.html` để kiểm tra tính tương thích của browser:
- Phát hiện browser và OS
- Hiển thị header image tương ứng
- Test fullscreen functionality
- Hiển thị CSS classes được áp dụng

## ⚖️ Legal Disclaimer

**🚨 CẢNH BÁO QUAN TRỌNG:**

- Project này **CHỈ DÀNH CHO MỤC ĐÍCH GIÁO DỤC**
- **KHÔNG** được sử dụng cho các hoạt động bất hợp pháp
- Tác giả **KHÔNG CHỊU TRÁCH NHIỆM** cho việc sử dụng sai mục đích
- Sử dụng project này đồng nghĩa với việc bạn **CHẤP NHẬN TRÁCH NHIỆM** pháp lý

## 🛠️ Technical Details

### Fullscreen API Implementation
```javascript
function requestFullScreen() {
  if (elementPrototype.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (elementPrototype.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (elementPrototype.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  }
}
```

### Browser Detection
- Sử dụng `BrowserDetect.js` để identify browser và OS
- Dynamic loading của header images tương ứng
- CSS classes được áp dụng dựa trên detection results

### Event Handling
- Fullscreen change events để show/hide fake headers
- Form submission handling với shake animation
- Auto-redirect khi thoát fullscreen

## 📚 Tài liệu tham khảo

- [HTML5 Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [Web Security Best Practices](https://owasp.org/www-project-web-security-testing-guide/)
- [Phishing Attack Vectors](https://www.sans.org/white-papers/36972/)