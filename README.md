# Plan de Conception - Projet Tutoré OpenCruise
**Candidat :** RAIS AYA  
[cite_start]**Sujet :** N°3 - Dominante Automatisation (Playwright) [cite: 14]

## 1. Stratégie de Test
[cite_start]L'objectif est d'assurer la qualité de l'application **OpenCruise** (plateforme de réservation de croisières)[cite: 15]. Nous adoptons une approche basée sur les risques, en privilégiant l'automatisation des flux critiques (Smoke Tests) pour garantir la stabilité des fonctionnalités majeures.

## 2. Périmètre (Scope)
Le test se concentre sur les modules suivants :
* [cite_start]**Authentification :** Accès sécurisé à la plateforme[cite: 48].
* **Recherche & Sélection :** Capacité à trouver et choisir une croisière.
* **Souscription :** Processus de réservation finale (identifié comme flux critique).

## 3. Analyse des Exigences et Cas de Test
| ID | Exigence | Cas de Test | Priorité | Type |
|----|-----------|-------------|----------|------|
| **REQ-AUTH-01** | [cite_start]L'utilisateur doit pouvoir se connecter avec des identifiants valides[cite: 48]. | Connexion réussie avec email et mot de passe valides. | P1 (Critique) | Automatisé |
| **REQ-SRCH-02** | L'utilisateur doit pouvoir rechercher une destination spécifique. | Recherche de croisière avec filtres (destination, dates). | P2 (Moyen) | Automatisé |
| **REQ-SUBS-03** | L'utilisateur doit pouvoir finaliser sa souscription. | Processus complet de réservation jusqu'au paiement/confirmation. | P1 (Critique) | Automatisé |

## 4. Justification du choix de l'automatisation
[cite_start]Nous avons choisi d'automatiser ces tests pour les raisons suivantes[cite: 60]:
1. **Tests de Régression :** L'authentification et la souscription sont des flux "vitaux". Leur automatisation permet de détecter rapidement toute rupture de service lors des futurs déploiements.
2. **Gain de Temps :** La recherche de croisière implique plusieurs étapes répétitives qui sont plus rapides à exécuter via un automate.
3. **Fiabilité :** L'automatisation élimine l'erreur humaine sur les processus de calcul ou de saisie de formulaires complexes.

## 5. Environnement de Test
* [cite_start]**Application :** OpenCruise[cite: 15].
* [cite_start]**Framework :** Playwright (TypeScript)[cite: 14, 16].
* **Navigateurs :** Chromium (prioritaire), Firefox et Webkit.
