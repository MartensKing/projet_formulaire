function validerEmail(valeur) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!valeur) {
    return { valide: false, message: "L'email est obligatoire." };
  }
  if (!regex.test(valeur)) {
    return { valide: false, message: "Format d'email invalide." };
  }
  return { valide: true, message: "" };
}