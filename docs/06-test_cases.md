# Cahier de Test - Détail des 18 Scénarios Automatisés

Ce document répertorie l'ensemble des cas de tests exécutés via Playwright sur l'application OpenCruise.

| ID | Titre du Cas de Test | Priorité | Résultat Attendu | Résultat Obtenu |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Authentification valide | Haute | Connexion réussie et redirection Dashboard | ✅ Pass |
| **TC-02** | Inscription : Champs obligatoires vides | Haute | Affichage des messages "merci de saisir..." | ✅ Pass |
| **TC-03** | Inscription : Format Email invalide | Haute | Blocage et message "format incorrect" | ✅ Pass |
| **TC-04** | Inscription : Passwords non identiques | Haute | Message "ne correspondent pas" | ✅ Pass |
| **TC-05** | Inscription : Format Password invalide | Moyenne | Validation de la Regex (8 car., 1 maj, 1 chiffre) | ❌ Fail (Bug détecté) |
| **TC-06** | Inscription : Nom/Prénom avec chiffres | Faible | Rejet des caractères numériques | ❌ Fail (Bug détecté) |
| **TC-07** | Déconnexion (Logout) | Haute | Retour à la page de login et session fermée | ✅ Pass |
| **TC-08** | Profil : Modification Nom/Prénom | Moyenne | Mise à jour réussie dans la base | ✅ Pass |
| **TC-09** | Profil : Annulation modification | Faible | Les données restent inchangées | ✅ Pass |
| **TC-10** | Profil : Accès après déconnexion | Haute | Redirection vers Login (Sécurité) | ✅ Pass |
| **TC-11** | Recherche : Filtres par pays | Moyenne | Affichage des croisières correspondantes | ✅ Pass |
| **TC-12** | Recherche : Aucun résultat trouvé | Faible | Message "Aucune croisière trouvée" | ✅ Pass |
| **TC-13** | Inscription : Inscription complète (Particulier) | Haute | Succès et redirection URL Login | ✅ Pass |
| **TC-14** | Password : Changement de mot de passe | Moyenne | Nouveau pass opérationnel au prochain login | ✅ Pass |
| **TC-15** | Profil : Champs obligatoires vides en édit | Moyenne | Validation bloquante | ✅ Pass |
| **TC-16** | Sécurité : Injection SQL basique (Input) | Haute | Caractères échappés ou erreur de validation | ✅ Pass |
| **TC-17** | Inscription : Validation Date de Naissance | Moyenne | Rejet des dates futures ou formats incohérents | ✅ Pass |
| **TC-18** | Navigation : Liens réseaux sociaux | Faible | Redirection vers les bonnes pages externes | ✅ Pass |

---

## 📈 Récapitulatif de l'exécution
* **Total des tests** : 18
* **Succès (Pass)** : 16
* **Échecs (Fail)** : 2 (Voir [Rapport d'Anomalies](./05-rapport_anomalies.md))
* **Taux de réussite** : 88.8%