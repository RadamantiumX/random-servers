const config = {
    apps: [
        {
            name: 'app',
            script: './index-pm2.js',
            watch: true,
            ignore_watch: ['node_modules', 'logs']
        }
    ]
}

export {config}