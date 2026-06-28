//travail Adam
//creation de la fonction qui verifie le mot de passe
function validerPassword(valeur) {
    //si la valeur est vide retour faux
    if (!valeur) {
        return { valide: false, message: "le mot de passe est requis" }
    }
    //condition qui oblige a avoir au moins 7 caracteres dans le mot de passe
    if (valeur.length <= 7) {
        return { valide: false, message: "le mot de passe ne contient pas assez de caracteres" }
    }
    //\d signifie un chiffre et !/ inverse le resultat
    if (!/\d/.test(valeur)) {
        return { valide: false, message: "le mot de passe doit contenir au moins un chiffre" }
    }
    //[A-Z] designe une lettre majuscule et !/ inverse le resultat
    if (!/[A-Z]/.test(valeur)) {
        return { valide: false, message: "le mot de passe doit contenir au moins une lettre majuscule" }
    }
    //si toutes les conditions sont remplies le mot de passe est valide
    return { valide: true, message: "Mot de passe valide" }
}
