function showTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.querySelector('.tab-btn[onclick="showTab(\''+tab+'\')"]').classList.add('active');
    document.getElementById(tab).classList.add('active');
}
function openModal(src) {
    document.getElementById('modal-img').src = src;
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}