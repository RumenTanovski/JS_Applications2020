/* global $, Sammy*/
import home from './controllers/home.js';
import about from './controllers/about.js';
import register, {registerPost} from './controllers/register.js';
import login,{loginPost} from './controllers/login.js';
import logout from './controllers/logout.js';

import catalog from './controllers/catalog.js';
import details from './controllers/details.js';


$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        //this === Sammy.Application

        this.userData = {
            loggedIn: false,
            hasTeam: false,
            username: undefined,
            userId: undefined,
            teamId: undefined
        };

        
        this.get('index.html', home);
        this.get('#/home', home);
        this.get('/', home);

        this.get('#/about', about);

        this.get('#/register', register );
        this.post('#/register', (ctx) => {registerPost.call(ctx);});
        

        this.get('#/login', login);
        this.post('#/login',(ctx) => {loginPost.call(ctx);});

        this.get('#/catalog', catalog);
        this.get('#/catalog/:id', details);

        this.get('#logout', logout);

    });

    app.run();
});