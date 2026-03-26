# Rapport Technique d'Automatisation - Playwright Framework

## 1. Architecture Technique (Page Object Model)
Nous avons adopté l'architecture **Page Object Model (POM)** pour structurer le framework, garantissant ainsi la maintenabilité et la lisibilité des tests :

* **`pages/`** : Contient les classes POM encapsulant les sélecteurs et les méthodes d'interaction avec l'interface :
    * `SubscriptionPage.ts` : Centralise les sélecteurs complexes du formulaire d'inscription (Particulier/Pro).
    * `LoginPage.ts`, `LogoutPage.ts` : Gestion du cycle d'authentification.
    * `ProfilPage.ts`, `SearchPage.ts` : Modélisation des modules de gestion de profil et de recherche de croisières.

## 2. Inventaire des Scénarios Automatisés
Le dossier `tests/` contient un total de **18 fichiers de test (.spec.ts)**, couvrant les flux nominaux, alternatifs et les regressions de bugs :

* **Flux Nominaux (Happy Paths)** : `auth.spec.ts`, `subscription.spec.ts`, `search.spec.ts`.
* **Tests Négatifs & de Validation** : `inscrit_champs_vides.spec.ts`, `inscrit_invalid_data.spec.ts`, `inscrit_password_non_identique.spec.ts`.
* **Tests de Régression (Bugs fixés)** : `password_edit_passant.spec.ts`, `profil_security.spec.ts`, `profil_after_logout.spec.ts`.

## 3. Problèmes Techniques & Stratégies de Correction
L'automatisation a relevé plusieurs défis techniques inhérents à l'application OpenCruise :

### A. Problème : Strict Mode Violation (Sélecteurs Multiples)
* **Détection** : Le test échouait sur les champs comme `formcontrolname="prenom"`, présents en double exemplaire dans le DOM (un pour le profil Particulier, un pour Professionnel).
* **Stratégie de correction** : Implémentation du **filtrage par parent**. Nous avons isolé le formulaire principal avec `locator('form').first()` avant de cibler les inputs, assurant l’unicité de l'élément.

### B. Problème : Désynchronisation du Chargement Dynamique (Ville/Pays)
* **Détection** : Playwright tentait de sélectionner une ville avant que la liste déroulante ne soit peuplée après le choix du pays.
* **Stratégie de correction** : Ajout d'une assertion d'attente explicite : `await expect(mainForm.locator('select[formcontrolname="ville"] option')).not.toHaveCount(0)`. Cette stratégie force le test à attendre le chargement réel de l'API des villes.

### C. Problème : Instabilité de la Validation Real-time (Angular/React)
* **Détection** : La méthode standard `fill()` remplissait les champs trop rapidement, ne déclenchant pas toujours les scripts de validation front-end. Cela entraînait de fausses erreurs ("mismatch password") ou bloquait le bouton "Créer".
* **Stratégie de correction** : Remplacement de `fill()` par **`pressSequentially(text, { delay: 100 })`**. Cette approche simule une frappe humaine, donnant au front-end le temps nécessaire pour calculer la validité du formulaire.

## 4. Cadre d'Exécution
Les tests ont été exécutés et analysés dans l'environnement suivant :
* **Navigateur** : Chromium.
* **Configuration** : `playwright.config.ts`.
* **Outils de Debug** : Playwright Trace Viewer pour l'inspection des Snapshots et des logs réseaux lors des échecs.
* **Génération de données** : Utilisation de `Date.now()` pour générer des emails uniques à chaque exécution (`aya.qa.${Date.now()}@protonmail.com`).