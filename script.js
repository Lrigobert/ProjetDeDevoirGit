// Fichier: script.js (Ajoute de l'interactivité dynamique)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Rendre le bouton CTA dynamique
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert("Merci d'explorer notre collection ! Redirection...");
            // Logique de redirection future, par exemple vers page2.html
            // window.location.href = 'page2.html';
        });
    }

    // 2. Afficher une information dynamique dans le pied de page
    const footerData = document.getElementById('footer-data');
    if (footerData) {
        // Simule l'affichage d'une donnée chargée dynamiquement (ici, depuis le JSON)
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                footerData.textContent = `Projet: ${data.project_name} | Fichiers: ${data.required_files} | Statut: ${data.current_status}`;
            })
            .catch(() => {
                footerData.textContent = "Erreur de chargement des données.";
            });
            console.log('L6: Conflit ici');
    }
});