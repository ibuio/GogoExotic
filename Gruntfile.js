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
						"public_html/*.html",
						"public_html/js/*.js",
						"public_html/js/*.js",
						"public_html/js/controllers/*.js",
						"public_html/js/models/*.js",
						"public_html/js/router/*.js",
						"public_html/js/views/*.js",
						"public_html/js/views/account/*.js",
						"public_html/js/templates/*.tmpl",
						"public_html/js/templates/account/*.tmpl",
						"public_html/scss/*.scss",
						"public_html/json/apps/i18n/en.json",
						"public_html/json/apps/i18n/fr.json"
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
				files: "public_html/scss/*.scss",
				tasks: ['sass']
			}
		},
		// SASS task config
		sass: {
			dev: {
				files: {
				// destination                // source file
				"public_html/css/main.css" : "public_html/scss/main.scss",
				}
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
};
