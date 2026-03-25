import { test, expect } from '@playwright/test';
import { SubscriptionPage } from '../pages/SubscriptionPage';
import { performLogin } from '../utils/auth';

test('Test Souscription Dynamique', async ({ page }) => {
    const subscriptionPage = new SubscriptionPage(page);

    await performLogin(page);
    
    // chargement page d'accueil 
    await expect(page.getByRole('button', { name: 'Connexion' })).not.toBeVisible({ timeout: 10000 });

    await subscriptionPage.souscrireOffreDynamique();

    // Verification de l'URL contenant le mot 'panier' 'panier' 'reservation'
    await expect(page).toHaveURL(/.*panier|.*reservation|.*recapitulatif/);
});