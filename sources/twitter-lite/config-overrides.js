module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log(`Environment: ${env}`);

    if(env === "production") {
        config.externals = {
            "react" : "React",
            "react-dom" : "ReactDOM",
            'rxjs': 'rxjs',
            'immutable': 'Immutable',
            'nike-re-framejs': 'reframe'
        }
    }


    return config;
};
