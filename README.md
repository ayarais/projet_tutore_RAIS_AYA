# Plan de Conception - Projet Tutoré OpenCruise
**Candidat :** RAIS AYA  
**Sujet :** N°3 - Dominante Automatisation (Playwright)

## 1. Stratégie de Test
L'objectif de ce projet est de garantir la qualité et la stabilité de l'application OpenCruise à travers une approche de test structurée. Nous mettons l'accent sur l'automatisation des flux critiques pour assurer une non-régression efficace sur les fonctionnalités vitales de la plateforme de réservation.

## 2. Périmètre (Scope)
Le périmètre de test couvre les modules essentiels du parcours utilisateur :
* **Authentification :** Vérification de l'accès sécurisé au compte utilisateur.
* **Recherche de Croisières :** Validation des filtres et de l'affichage des résultats.
* **Processus de Souscription :** Test du tunnel de réservation (identifié comme zone à risque).

## 3. Analyse des Exigences et Cas de Test
| ID | Exigence | Cas de Test | Priorité | Type |
|----|-----------|-------------|----------|------|
| ID | Exigence | Cas de Test | Priorité | Type | État |
|----|-----------|-------------|----------|------|------|
| **REQ-AUTH-01** | Connexion sécurisée | Authentification réussie avec des identifiants valides. | P1 | Automatisé |  Pass |
| **REQ-AUTH-02** | Gestion d'erreur (Données) | Vérification de l'affichage du message "mot de passe ou identifiant invalide" suite à une saisie erronée. | P2 | Automatisé | Pass |
| **REQ-AUTH-03** | Validation de saisie (Format) | Vérification de l'affichage des messages d'alerte rouges ("Merci de renseigner...") lorsque les champs sont laissés vides. | P3 | Automatisé |  Pass 
| **REQ-SRCH-02** | Moteur de recherche | Recherche multicritères (destination/date) avec succès. | P2 | Automatisé |
| **REQ-SUBS-03** | Finalisation de commande | Souscription complète à une offre de croisière. | P1 | Automatisé |

## 4. Justification du choix de l'automatisation
L'automatisation a été privilégiée pour les scénarios suivants :
1. **Flux Critiques :** L'authentification et la souscription sont exécutées fréquemment ; leur automatisation garantit un gain de temps majeur à chaque cycle de test.
2. **Fiabilité des données :** L'automate permet de vérifier avec précision les calculs et les données saisies sans risque d'erreur humaine.
3. **Tests de Régression :** Assurer que les nouvelles modifications n'impactent pas le parcours client principal.

## 5. Environnement Technique
* **Application cible :** OpenCruise
* **Framework :** Playwright
* **Langage :** TypeScript / JavaScript
* **Navigateurs :** Chromium (prioritaire), Firefox, WebKit
