module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest": "server/public/vendors/"
            },

                jquery: {
                    expand: true,
                    cwd: 'node_modules',
                    src: [
                        "jquery/dist/jquery.min.js",
                        "jQuery-Plugin-For-Tabbed-Image-Slider-Navigation-Ottoman-Slider/js/jquery.ottomanslider.js"
                    ],
                    "dest": "server/public/vendors/"
                },
                jqueryCss: {
                    expand: true,
                    cwd: 'node_modules',
                    src: [
                        "jQuery-Plugin-For-Tabbed-Image-Slider-Navigation-Ottoman-Slider/css/memoslider.css"
                    ],
                    "dest": "server/public/assets/styles"
                },
            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "index.html",
                    "mlb.html",
                    "sportsFacts.html",
                    "nhl.html",
                    "nba.html",
                    "nfl.html"
                ],
                "dest": "server/public/assets/views/"
            },
            style: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/styles.css"
                ],
                "dest": "server/public/assets"
            },
            images: {
                expand: true,
                cwd: 'client',
                src:[
                    "images/mlblogo.png",
                    "images/nbalogo.png",
                    "images/nhllogo.png",
                    "images/nfllogo.png",
                    "images/mainbackground.png"
                ],
                "dest": "server/public/assets/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};