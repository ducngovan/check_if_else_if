function getcheck() {
    // Nếu tên nhập vào là Admin thì yêu cầu nhập mật khẩu.
    //     Nếu mật khẩu là TheMaster thì in ra chuỗi Welcome.
    //     Nếu mật khẩu nhập vào là null in ra chuỗi Canceled.
    //     Còn lại in ra chuỗi Wrong password.
    //     Nếu tên nhập vào là null in ra chuỗi canceld.
    //     Còn lại in ra chuỗi “I don’t know you
    let nhap, pass;
    nhap=document.getElementById('nhap').value;
    if(nhap=="Admin"){
        pass=prompt("hay nhap mat khau");
        if(pass=="TheMaster"){
            alert("Welcome");
        } else if(pass==""){
            alert("Canceld");
        }else{
            alert("Wrong password");
        }
    }else if(nhap==""){
        alert("canceld");
    }else{
        alert("I don’t know you");
    }
}