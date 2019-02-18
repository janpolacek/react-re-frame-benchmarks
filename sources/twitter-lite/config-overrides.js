module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log(`Environment: ${env}`);

    if(env === "production") {
        config.externals = {
            "react" : "React",
            'rxjs': 'rxjs',
            'immutable': 'Immutable',
            'nike-re-framejs': 'reframe'
        }
    }


    return config;
};
