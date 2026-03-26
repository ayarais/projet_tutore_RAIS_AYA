#  Configuration de l'Environnement de Test

Ce document décrit l'environnement technique nécessaire pour l'exécution et le développement des tests automatisés sur le projet **OpenCruise**.

## 1. Stack Technique
L'automatisation repose sur les technologies suivantes :
* **Langage :** TypeScript (v5.x) pour un typage statique et une meilleure maintenance du code.
* **Framework de Test :** Playwright (v1.x).
* **Runtime :** Node.js (v18+ recommandé).
* **Gestionnaire de paquets :** npm (via `package.json` et `package-lock.json`).

## 2. Configuration du Navigateur
Les tests sont configurés pour s'exécuter sur le moteur **Chromium**.
* **Mode d'exécution :** Headed (visible) lors du développement/debug, et Headless pour les exécutions rapides.
* **Résolution :** Viewport standard Desktop (1280x720).

## 3. Plateforme Cible (SUT)
* **Application :** OpenCruise.
* **Environnement :** Recette / QA.
* **URL de base :** `https://opencruise-ok.sogeti-center.cloud/register`.

## 4. Outils de Reporting et Debugging
* **Playwright Trace Viewer :** Utilisé pour l'analyse post-exécution. Il permet de visualiser les étapes (Actions), les Snapshots du DOM, et les erreurs console en cas d'échec.
* **Logs Console :** Capture des erreurs JavaScript et des appels réseaux.

## 5. Installation et Exécution
Pour initialiser l'environnement localement :
1. Installer les dépendances : `npm install`.
2. Installer les navigateurs Playwright : `npx playwright install`.
3. Lancer les tests : `npx playwright test`.