const submitCommentButton = document.getElementById('submit-comment');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-list');
const comicTitle = "Les Aventures de Tintin"; // Exemple, cela peut être dynamique selon l'URL

// Fonction pour afficher les commentaires
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comicComments = comments.filter(comment => comment.comic === comicTitle);
    
    commentsList.innerHTML = comicComments.map(comment => `<li>${comment.text}</li>`).join('');
}

// Ajouter un nouveau commentaire
submitCommentButton.addEventListener('click', function() {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ comic: comicTitle, text: commentText });
        localStorage.setItem('comments', JSON.stringify(comments));
        commentInput.value = '';
        loadComments(); // Recharger les commentaires
    }
});

// Charger les commentaires existants
loadComments();
