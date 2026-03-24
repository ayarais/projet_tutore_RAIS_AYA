import { Page, Locator } from '@playwright/test';

/*
  Page Object Model pour la page de Connexion d'OpenCruise.
 */
export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Utilisation de formcontrolname (Angular spec)pour plus de stabilité
        this.usernameInput = page.locator('input[formcontrolname="username"]');
        this.passwordInput = page.locator('input[formcontrolname="password"]');
        
        // Sélecteur pour le bouton bleu de connexion
        this.loginButton = page.locator('button.btn-primary');
    }

    //Navigue vers la page de login d'OpenCruise
    
    async goto() {
        // URL de l'environnement "OK" de Sogeti
        await this.page.goto('https://opencruise-ok.sogeti-center.cloud/login');
    }

    /**
     * Remplit le formulaire et soumet la connexion
     * @param user L'identifiant utilisateur (email)
     * @param pass Le mot de passe
     */
    async login(user: string, pass: string) {
        // Remplissage des champs
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        
        // Clic sur le bouton de connexion
        await this.loginButton.click();
    }
}