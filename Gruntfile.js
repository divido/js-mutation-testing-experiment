
module.exports = function(grunt) {
	grunt.initConfig({
		mutationTest: {
			options: {
				testFramework: 'karma',

				karma: {
					configFile: 'karma.conf.js'
				},

				reporters: {
					html: {
						dir: 'reports/grunt-mutation-testing',
						successThreshold: 90
					},
					console: true
				},

				logLevel: 'DEBUG'
			},
			target: {
				options:{
					code: ['src/*.js', 'bootstrap.js'],
					specs: 'test/test_*.js',
					mutate: 'src/*.js'

				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-mutation-testing');

	// Default task(s).
	grunt.registerTask('default', ['mutationTest']);

};
