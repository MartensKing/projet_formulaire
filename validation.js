//travail Adam
function validerPassword(valeur) {
    if (!valeur) {
        return { valide: false, message: "le mot de passe est requis" }

    }
    if (valeur.lenght <= 9) {
        return { valide: false, message: "le mot de passe doit contenir au moins 9 caracteres" }
    }
    if (!/\d/.test(valeur)) {
        return { valide: false, message: "le mot de passe doit contenir au moins un chiffre" }
    }
    if (!/[A-Z]/.test(valeur)) {
        return { valide: false, message: "le mot de passe doit contenir au moins une lette majuscule" }
    }
    return { valide: true, message: "Mot de passe valide" }
}
