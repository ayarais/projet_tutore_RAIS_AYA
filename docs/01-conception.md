# Stratégie de Test & Conception

## 1. Justification du choix de l'automatisation
L'automatisation a été privilégiée pour les scénarios suivants :
1. **Flux Critiques :** L'authentification et la souscription sont exécutées fréquemment ; leur automatisation garantit un gain de temps majeur à chaque cycle de test.
2. **Fiabilité des données :** L'automate permet de vérifier avec précision les calculs et les données saisies sans risque d'erreur humaine.
3. **Tests de Régression :** Assurer que les nouvelles modifications n'impactent pas le parcours client principal.

## 2. Stratégie de Test
L'objectif est de garantir la qualité de l'application OpenCruise à travers une approche de test structurée. Nous mettons l'accent sur l'automatisation des flux critiques pour assurer une non-régression efficace.

## 3. Périmètre (Scope)
* **Authentification :** Accès sécurisé.
* **Recherche :** Validation des filtres et résultats.
* **Souscription :** Tunnel de réservation (Zone à risque).

## 4. Choix de l'outil : Playwright
* **Multi-navigateur :** Chromium, Firefox, WebKit.
* **Architecture :** Utilisation du Page Object Model (POM) pour une meilleure maintenance.