#  Rapport de Conception Technique - Projet OpenCruise

## 1. Justification du choix de l'automatisation
L'automatisation a été privilégiée pour les scénarios suivants :
* **Flux Critiques :** L'authentification et la souscription sont exécutées fréquemment ; leur automatisation garantit un gain de temps majeur à chaque cycle de test.
* **Fiabilité des données :** L'automate permet de vérifier avec précision les calculs et les données saisies sans risque d'erreur humaine.
* **Tests de Régression :** Assurer que les nouvelles modifications n'impactent pas le parcours client principal.

## 2. Stratégie de Test et Objectifs
L'objectif est de garantir la qualité de l'application OpenCruise à travers une approche de test structurée. Nous mettons l'accent sur l'automatisation des flux critiques pour assurer une non-régression efficace. 

L'analyse du formulaire d'inscription a permis d'identifier les points de validation critiques suivants :
* **Validation des champs obligatoires** (Nom, Prénom, Email, CIN, Mot de passe, etc.).
* **Contrôle d'intégrité** (Rejet des formats invalides comme un Email sans "@" ou des lettres dans le numéro de téléphone).
* **Cinématique de succès** (Validation de la redirection vers l'URL de Login après succès).

## 3. Périmètre (Scope)
Le périmètre de test se concentre sur les modules suivants :
* **Authentification :** Accès sécurisé.
* **Recherche :** Validation des filtres et résultats.
* **Souscription :** Tunnel de réservation et inscription de compte "Particulier" (Zone à risque).

## 4. Choix de l'outil : Playwright
Nous avons sélectionné **Playwright** pour son adéquation avec nos besoins techniques :
* **Multi-navigateur :** Prise en charge de Chromium, Firefox, WebKit.
* **Architecture :** Utilisation du **Page Object Model (POM)** pour une meilleure maintenance et séparation entre les sélecteurs et les tests.
* **Observabilité :** Utilisation du Trace Viewer pour capturer l'état du DOM en cas d'échec de validation (ex: erreurs d'UI ou redirections inattendues).

## 5. Scénarios de Tests Conçus
| ID | Scénario | Type | Objectif |
| :--- | :--- | :--- | :--- |
| **ST-01** | Inscription Nominale | Happy Path | Valider le parcours complet avec des données valides pour un compte Particulier. |
| **ST-02** | Validation Champs Vides | Négatif | Vérifier l'apparition des messages de type "merci de saisir..." en cas de soumission vide. |
| **ST-03** | Formats Invalides | Négatif | Tester la robustesse face aux données erronées (Email mal formaté, mauvais types de caractères). |
| **ST-04** | Cohérence Password | Négatif | Vérifier la validation de complexité (8 caractères, lettres, chiffres) et la confirmation. |