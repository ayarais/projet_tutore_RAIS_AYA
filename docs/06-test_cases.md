# 📊 Cahier de Test - Détail des 21 Scénarios (Playwright)

Ce document récapitule l'ensemble des tests automatisés et manuels effectués sur l'application **OpenCruise**.

| ID | Titre du Cas de Test | Priorité | Résultat Attendu | Résultat Obtenu |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Authentification valide | Haute | Redirection vers le Dashboard | ✅ Pass |
| **TC-02** | Inscription : Champs obligatoires vides | Haute | Messages d'erreur affichés | ✅ Pass |
| **TC-03** | Inscription : Format Email invalide | Haute | Blocage et message "format incorrect" | ✅ Pass |
| **TC-04** | Inscription : Passwords non identiques | Haute | Message "ne correspondent pas" | ✅ Pass |
| **TC-05** | Inscription : Format Password complexe | Haute | Acceptation des MDP avec caractères spéciaux | ❌ Fail (Bug #01) |
| **TC-06** | Inscription : Email incohérent (Console) | Moyenne | Validation stricte du format user@domain | ❌ Fail (Bug #02) |
| **TC-07** | Inscription : Téléphone (Lettres) | Haute | Restriction aux caractères numériques | ❌ Fail (Bug #03) |
| **TC-08** | Inscription : Code Postal (Lettres) | Moyenne | Restriction aux chiffres uniquement | ❌ Fail (Bug #04) |
| **TC-09** | Inscription : Longueur Numéro Passeport | Moyenne | Limitation à 9-10 caractères max | ❌ Fail (Bug #05) |
| **TC-10** | Inscription : Format Adresse (Incohérent) | Faible | Masquage ou validation de structure | ❌ Fail (Bug #06) |
| **TC-11** | Inscription : Date de naissance (Aujourd'hui) | Moyenne | Rejet d'une date de naissance < 18 ans | ❌ Fail (Bug #07) |
| **TC-12** | Déconnexion (Logout) | Haute | Session fermée et retour au Login | ✅ Pass |
| **TC-13** | Profil : Modification Nom/Prénom | Moyenne | Mise à jour réussie des données | ✅ Pass |
| **TC-14** | Profil : Annulation modification | Faible | Retour aux valeurs précédentes | ✅ Pass |
| **TC-15** | Recherche : Filtres par pays | Moyenne | Affichage des croisières filtrées | ✅ Pass |
| **TC-16** | Recherche : Aucun résultat | Faible | Affichage "Aucune croisière trouvée" | ✅ Pass |
| **TC-17** | Inscription : Inscription complète (Particulier) | Haute | Succès et redirection finale | ✅ Pass |
| **TC-18** | Password : Changement de mot de passe | Moyenne | Nouveau MDP opérationnel | ✅ Pass |
| **TC-19** | `validation_date.spec.ts` | Moyenne | Rejet Date du jour/Future |  ✅ Pass  |
| **TC-20** | Sécurité : Injection SQL basique | Haute | Caractères échappés proprement | ✅ Pass |
| **TC-21** | UI : Responsive Design (Mobile) | Moyenne | Formulaire lisible sur petits écrans | ✅ Pass |

---

## 📈 Statistiques de Qualité
* **Total des tests** : 21
* **Succès (Pass)** : 14
* **Échecs (Fail)** : 7 (Voir [Rapport d'Anomalies](./05-rapport_anomalies.md))
* **Taux de réussite** : 66.6%
* **Risque de livraison** : **Moyen** (Bugs critiques sur la validation des données d'entrée).

---
**Dernière mise à jour :** 27 Mars 2026