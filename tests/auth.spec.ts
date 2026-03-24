import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Authentification sur OpenCruise', () => {
    
    test('REQ-AUTH-01 : Connexion avec succès', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // 1. Navigation vers l'URL de test
        await page.goto('https://opencruise-ok.sogeti-center.cloud/login');

        // 2. Action de connexion
        // # Utilisation des identifiants récupérés
        await loginPage.login('eyarayes@protonmail.com', 'Passw0rdAdmin');

        // 3. Vérification
        // # On attend que l'URL ne contienne plus "/login" ou qu'on soit sur la home
        await expect(page).not.toHaveURL(/.*login/);
    });


    test('REQ-AUTH-02 : Échec de connexion avec identifiants invalides', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // 1. Navigation
        await page.goto('https://opencruise-ok.sogeti-center.cloud/login');

        // 2. Action : Saisir un compte qui n'existe pas
        // # Cas non-passant
        await loginPage.login('wrong-user@test.com', 'WrongPassword123');

        // On vérifie que le texte du toast s'affiche à l'écran
        const errorToast = page.getByText('mot de passe ou identifiant invalide');
        await expect(errorToast).toBeVisible();

        // On vérifie qu'on est toujours sur la page login
        await expect(page).toHaveURL(/.*login/);
    }); 

    test('REQ-AUTH-03 : Validation des champs obligatoires (Champs vides)', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await page.goto('https://opencruise-ok.sogeti-center.cloud/login');

        // On clique sur Connexion sans rien remplir
        await loginPage.loginButton.click();

        // --- VÉRIFICATION DES MESSAGES DE VALIDATION ---
        const errorUsername = page.getByText('Merci de renseigner votre identifiant');
        const errorPassword = page.getByText('Merci de renseigner votre mot de passe');

        await expect(errorUsername).toBeVisible();
        await expect(errorPassword).toBeVisible();
    });


});