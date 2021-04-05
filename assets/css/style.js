// Tạo nút thêm và xóa
var add = document.getElementsByTagName('li'); // lấy thẻ li
var i; // biến xóa
for(i = 0; i < add.length; i++){
    var btn = document.createElement('button'); // tạo thêm thẻ button bằng cách ấn onclick
    var cancel = document.createTextNode('\u00D7'); // tạo dấu x để xóa
    btn.className = 'close'; // thêm hoặc update class vào thẻ button
    btn.appendChild(cancel); // thêm dấu x vào cuối thẻ button khi ấn nút thêm mới
    add[i].appendChild(btn); // thêm vào cuối danh sách
}
// XÓA (BẢN CHẤT LÀ ẨN THẺ LI ĐC CHỌN)
// khi nút xóa đc ấn thì ẩn thẻ li chứa nó
var hidden = document.getElementsByClassName('close');
for(i = 0; i < hidden.length; i++){
    hidden[i].onclick = function(){
        this.parentElement.style.display = 'none'; // ẩn thành phần cha (tức là thẻ li)
    }
}

// thêm class checked vào thẻ li khi đc click
var list = document.querySelector('ul'); // chọn phần tử đầu tiên của thẻ ul
list.addEventListener('click', function(ev) { // thêm sự kiện click và gọi hàm ev khi xảy ra sự kiện
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('list__content');
    }
}, false);

// thêm công việc mới khi đc click
function newAdd() {
    var lii = document.createElement('li'); // tạo thêm thẻ li
    var inputValue = document.getElementById('input').value; // lấy giá trị từ ô input
    var t = document.createTextNode(inputValue); //tạo nội dung văn bản
    lii.appendChild(t); //gán cho biến lii tạo phía trên
    // kiểm tra nếu k nhập gì thì báo nhập lại
    if(inputValue === ''){
        alert('Không được để trống');
    }else{
        document.getElementById("ulList").appendChild(lii);
    }

    // xóa giá trị thẻ input
    document.getElementById('input').value = '';
    // thêm button xóa vào thẻ li mới tạo
    var btn = document.createElement('button');
    var cancel = document.createTextNode('\u00D7');
    btn.className = 'close';
    btn.appendChild(cancel);
    lii.appendChild(btn);
    // gán lại sự kiện cho các button xóa
    for(i = 0; i < hidden.length; i++){
        hidden[i].onclick = function(){
            this.parentElement.style.display = 'none';
        }
    }
}