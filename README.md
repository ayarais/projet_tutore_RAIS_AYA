
#  Projet d'Automatisation de Tests - OpenCruise

##  Présentation
Ce projet vise à automatiser les tests de non-régression de l'application **OpenCruise** de Sogeti. Le framework est conçu avec **Playwright** et **TypeScript** pour valider les flux critiques tels que l'inscription des utilisateurs "Particulier", l'authentification et la recherche.

##  Structure du Projet
* **`pages/`** : Modèles Page Object (POM) pour une maintenance simplifiée.
* **`tests/`** : Scripts de tests automatisés couvrant les différents modules.
* **`docs/`** : Documentation complète (Conception, Architecture, Anomalies).
* **`utils/`** : Fonctions d'aide (Authentification).

## ⚙️ Installation
1. Cloner le repository.
2. Installer les dépendances :
   ```bash
   npm install
##  Navigation dans la Documentation

*Pour une lecture détaillée, veuillez consulter les rapports suivants :*

* 🏗️ **[Stratégie et Conception](./docs/01-conception.md)** : Justification des choix et périmètre de test.
* 🛠️ **[Configuration Environnement](./docs/02-environnement.md)** : Stack technique et prérequis.
* 📐 **[Architecture du Framework](./docs/03-architecture.md)** : Organisation des dossiers et modèle POM.
* 🤖 **[Rapport d'Automatisation](./docs/04-automatisation.md)** : Détails techniques, problèmes rencontrés et solutions.
* 🐞 **[Rapport d'Anomalies](./docs/05-rapport_anomalies.md)** : Liste des bugs identifiés avec captures d'écran.