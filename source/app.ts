import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// export function main() {
//   return platformBrowserDynamic().bootstrapModule(AppModule);
// }

// if (document.readyState === 'complete') {
//   main();
// } else {
//   document.addEventListener('DOMContentLoaded', main);
// }


// import { enableProdMode } from '@angular/core';
// // depending on the env mode, enable prod mode or add debugging modules
// // if (process.env.ENV === 'build') {
// //   enableProdMode();
// // }
