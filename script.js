document.getElementById('revealButton').addEventListener('click', function() {
    var surprise = document.getElementById('surprise');
    if (surprise.classList.contains('hidden')) {
        surprise.classList.remove('hidden');
        this.textContent = 'Klik untuk Sembunyikan';
    } else {
        surprise.classList.add('hidden');
        this.textContent = 'Klik untuk Kejutan';
    }
});
