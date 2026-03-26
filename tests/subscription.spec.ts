import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth2';

import { SubscriptionPage } from '../pages/SubscriptionPage';

test('User can reserve a cruise in Africa', async ({ page }) => {
    const subscription = new SubscriptionPage(page);
    // 1. Login
    await performLogin(page);
/*
    // 2. Navigation (Force click pur eviter le random )
    await page.getByRole('tab', { name: 'AFRIQUE' }).click({ force: true });
    
    // 3. Sélection (On attend que l'élément soit là)
    const enSavoirPlus = page.getByRole('button', { name: 'En savoir plus' }).nth(3);
    await enSavoirPlus.waitFor({ state: 'visible' });
    await enSavoirPlus.click();

    await page.getByRole('button', { name: 'Réserver' }).click();
*/
    // 2. Navigation et Sélection (Etape 2 & 3 )
    await subscription.selectCruiseAndReserve();

    // 4. FIX EL ASSERTION HOUNI:
    //  capture verif URL est /reservation/... pas /detail
    await page.waitForURL(/.*reservation/); 
    await expect(page).toHaveURL(/.*reservation/, { timeout: 10000 });
    
   // 5. Suite mta3 el Cas Passant: Cabine & Panier
    // Houni nestamlu el méthode el jdida
    await subscription.addCabineToPanier();

    // 6. Assertion Finale: Thabbet el Toast Success
    // Nesta3mlou RegExp /.../ bech n'lawjou 3la kelmet "ajoutée au panier" khater akid mawjouda
    //const toastSuccess = page.getByText(/ajoutée au panier/i); 

    // Nzidou timeout khater el toast najem yabta chwaya bech yokhroj
    //await expect(toastSuccess).toBeVisible({ timeout: 10000 });
  

    await subscription.addCabineToPanier();
    console.log("Subscription Tunnel Complété avec succès !");
});