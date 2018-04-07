document.getElementById('popuplogin').style.display='block';
document.getElementById('loginname').style.display='none';

function login(){
    document.getElementById('popuplogin').style.display='none';
    document.getElementById('loginname').style.display='block';
}
function logout(){
    document.getElementById('popuplogin').style.display='block';
    document.getElementById('loginname').style.display='none';
}
function payment(){
    document.getElementById('paymentForm').style.display = 'block';
}

