# Architecture du Framework de Test

Ce document détaille l'organisation structurelle du projet d'automatisation pour l'application **OpenCruise**.

## 1. Modèle de Conception : Page Object Model (POM)
Le framework repose sur le design pattern **POM**, qui permet de séparer la logique de test de la structure de l'interface utilisateur (UI). Cela garantit une maintenance simplifiée : si un élément de l'interface change, seul le fichier "Page" correspondant est mis à jour.

### Structure des dossiers :
* **`pages/`** : Contient les définitions des pages de l'application. Chaque fichier correspond à une page spécifique et regroupe ses sélecteurs et ses méthodes d'action.
    * `SubscriptionPage.ts` : Gestion du formulaire d'inscription.
    * `LoginPage.ts` / `LogoutPage.ts` : Gestion de la session utilisateur.
    * `ProfilPage.ts` : Actions liées à la modification du profil.
* **`tests/`** : Contient les scripts de tests fonctionnels (.spec.ts) qui utilisent les classes définies dans le dossier `pages/`.
* **`utils/`** : Fonctions utilitaires partagées, comme la gestion de l'authentification (`auth.ts`).
* **`docs/`** : Documentation technique du projet (Conception, Automatisation, Environnement).

## 2. Flux de Données et Exécution
1. **Initialisation** : Le fichier `playwright.config.ts` définit les paramètres globaux (URL de base, timeouts, navigateurs).
2. **Exécution** : Playwright lance les fichiers dans `tests/`.
3. **Reporting** : En cas d'échec, les résultats sont générés dans `playwright-report/` et les traces détaillées dans `test-results/`.

## 3. Maintenance et Évolutivité
Grâce à cette architecture :
* **Réutilisabilité** : Les méthodes créées dans les "Pages" sont réutilisées dans plusieurs tests.
* **Lisibilité** : Les scripts de tests sont écrits dans un langage proche du métier, facilitant la relecture par les équipes QA.