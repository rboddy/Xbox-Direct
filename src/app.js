export class App {
    configureRouter(config, router) {
      this.router = router;
      config.title = 'Xbox Direct';
      config.map([
        { route: ['', 'search'], name: 'search', moduleId: './search' },
        { route: 'results', name: 'results', moduleId: './results', nav: true }
      ]);
    }
  }