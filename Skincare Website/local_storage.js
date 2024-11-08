window.onload = function() {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('question').value = localStorage.getItem('question') || '';
};
document.getElementById('name').addEventListener('input', function() {
    localStorage.setItem('name', this.value);
});
document.getElementById('email').addEventListener('input', function() {
    localStorage.setItem('email', this.value);
});
document.getElementById('question').addEventListener('input', function() {
    localStorage.setItem('question', this.value);
});
            /*
            const newWindow = window.open('', '', 'width=400,height=300');
            newWindow.document.write('<h2>Saved Form Data</h2>');
            newWindow.document.write(`<p><strong>Name:</strong> ${name}</p>`);
            newWindow.document.write(`<p><strong>Email:</strong> ${email}</p>`);
            newWindow.document.write(`<p><strong>Question:</strong> ${question}</p>`);
*/