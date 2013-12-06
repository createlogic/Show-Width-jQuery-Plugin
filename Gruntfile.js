module.exports = function(grunt) {

	grunt.initConfig({
		jshint:{
			all:['show-width-0.1.js']
		},
		uglify:{
			build:{
				options:{
					banner:'/*This has been created using grunt*/\n'
				},
				files:{
					'show-width-0.1.min.js':['show-width-0.1.js']
					
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['jshint','uglify','cssmin','cslint']);
};