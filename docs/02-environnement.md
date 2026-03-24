# Suivi des Cas de Tests Automatisés

### Module Authentification
| ID | Exigence | Cas de Test | État |
|:---|:---|:---|:---:|
| **REQ-AUTH-01** | Connexion | Authentification réussie. | Pass |
| **REQ-AUTH-02** | Erreur | Message Toast (Identifiant invalide). | Pass |
| **REQ-AUTH-03** | Validation | Champs vides (Alertes rouges). | Pass |
| **REQ-AUTH-04** | Sécurité | Format Email (manque @). | Pass |

### 🔍 Module Recherche
| ID | Exigence | Cas de Test | État |
|:---|:---|:---|:---:|
| **REQ-SRCH-01** | Recherche | Mot-clé ("Maroc") avec résultats. | Pass |
| **REQ-SRCH-02** | Filtrage | Onglet "AFRIQUE" actif. | Pass |
| **REQ-SRCH-03** | Robustesse | Mot-clé sans résultats ("Nice"). | Pass |

### 🛳️ Module Souscription (À venir)
| ID | Exigence | Cas de Test | État |
|:---|:---|:---|:---:|
| **REQ-SUBS-01** | Achat | Tunnel de réservation complet. | En cours |