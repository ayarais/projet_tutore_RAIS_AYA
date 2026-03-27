# 🐞 Rapport d'Anomalies (Bugs Found)

Ce document récapitule les dysfonctionnements identifiés lors des tests automatisés et manuels sur le formulaire d'inscription OpenCruise.

---

## 🔴 Anomalie 01 : Fausse Alerte de Validation Password
**Statut :** Ouvert | **Priorité :** Haute | **Type :** UI/UX Bug

### Description
Le système affiche un message d'erreur "le mot de passe doit contenir des lettres..." même lorsque l'utilisateur saisit un mot de passe valide respectant tous les critères (Majuscule, chiffre, 8+ caractères). 

### Preuve (Screenshot)
![Erreur Validation Password](./Anomalie%2001%20.png)
*(Note: Le mot de passe contient bien des points, indiquant une saisie complexe, mais l'erreur persiste)*.

### Impact
L'utilisateur est induit en erreur et peut abandonner le processus d'inscription car il pense que son mot de passe est invalide.

---

## 🟠 Anomalie 02 : Absence de Validation du Format Email (Real-time)
**Statut :** Ouvert | **Priorité :** Moyenne | **Type :** Functional Bug

### Description
Bien qu'un message d'erreur s'affiche ("le format est incorrect"), le champ accepte des saisies incohérentes dans la console ou ne bloque pas immédiatement l'interaction de manière stricte.

### Preuve (Screenshot)
![Erreur Format Email](../image_679aea.jpg)
*(Note: Saisie de caractères aléatoires "kjhgfdghjkl" sans structure d'email valide)*.

### Impact
Risque de pollution de la base de données avec des adresses emails non fonctionnelles si la validation côté serveur n'est pas renforcée.

---

## 🟡 Anomalie 03 : Absence de Masquage de Caractères Spéciaux (Nom/Prénom)
**Statut :** Ouvert | **Priorité :** Faible | **Type :** Data Integrity

### Description
Les champs "Nom" et "Prénom" acceptent des chiffres (ex: "1245") et des caractères spéciaux (ex: "!!!") sans déclencher d'alerte immédiate.

### Preuve (Screenshot)
![Données Invalides Nom/Prénom](../image_6796ed.png)
*(Note: Le prénom est rempli avec "!!!" et le nom avec "12345")*.

### Impact
Mauvaise qualité des données utilisateur recueillies.

---

## 🛠️ Recommandations Techniques
1. **Password** : Revoir la Regex de validation dans le composant Angular pour déclencher le `onKeyUp` correctement.
2. **Email** : Implémenter une validation HTML5 `type="email"` plus stricte.
3. **Input Masking** : Ajouter des filtres pour n'autoriser que les caractères alphabétiques dans les champs d'identité.