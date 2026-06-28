//travail Adam
function validerPassword(valeur) {
    if (!valeur) {
        return { valide: false, message: "le mot de passe est requis" }

    }
    if (valeur.lengh <= 7) {
        return { valide: false, message: "le mot de passe ne contien pas assez de caracteres" }
    }
    if (!/\d/.test(valeur)) {
        return { valide: false, message: "le mot de passe doit contenir au moins un chiffre" }
    }
    if (!/[A-Z]/.test(valeur)) {
        return { valide: false, message: "le mot de passe doit contenir au moins une lette majuscule" }
    }
    return { valide: true, message: "Mot de passe valide" }
}
