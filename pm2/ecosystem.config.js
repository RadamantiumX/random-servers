export const apps = [{
  name: "app",
  script: './index-pm2.js',
  watch: true
},
];

// Con este archivo de configuración podemos ejecutar la aplicación con PM2
// utilizando el siguiente comando: pm2 start ecosystem.config.js
