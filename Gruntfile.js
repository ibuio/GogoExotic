/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"public_html/assets/scss/*.sass",
						"public_html/*.html",
						"public_html/js/*.js",
						"public_html/js/*.js",
						"public_html/js/controllers/*.js",
						"public_html/js/models/*.js",
						"public_html/js/router/*.js",
						"public_html/js/views/*.js",
						"public_html/js/templates/*.tmpl",
					]
				}
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./public_html"
				},
				port: 8088
			}
		},

		// Watch task config
		watch: {
			sass: {
				files: "public_html/assets/css/*.sass",
				tasks: ['sass']
			}
		},
		// SASS task config
		sass: {
			dev: {
				files: {
				// destination                      // source file
				"public_html/assets/scss/main.css" : "public_html/assets/css/main.sass",
				}
			}
		}
    });

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['browserSync', 'watch']);
};
