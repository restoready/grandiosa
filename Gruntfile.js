module.exports = function(grunt) {

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'javascripts/src/*.js',
                dest: 'javascripts/script.min.js'
            }
        },
        cssmin: {
            options: {
                banner: '/*! CSS Build - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'stylesheets/src/*.css',
                dest: 'stylesheets/app.min.css'
            }
        },
        watch: {
            scripts: {
                files: ['javascripts/src/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
        },

        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                  expand: true,                  // Enable dynamic expansion
                  cwd: 'images',                   // Src matches are relative to this path
                  src: ['*.{png,jpg}'],   // Actual patterns to match
                  dest: 'images/dest/'                  // Destination path prefix
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['uglify','cssmin','imagemin']);
}