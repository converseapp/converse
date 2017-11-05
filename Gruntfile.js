module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['scss/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);
};
