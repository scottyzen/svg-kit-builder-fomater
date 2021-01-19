module.exports = function(grunt) {

    // This will find every instance of:  data-name="$LAYER_NAME$"
    // and repace it with:                data-name="LAYER_NAME" style="fill: var(--LAYER_NAME)"    
    grunt.initConfig({
        replace: {
            conganSportsSvg: {
              src: ['orignals/*.svg'],
              overwrite: false,
              replacements: [{
                from: /data-name\=\"\$(.*?)\$"/gi,
                to: function (matchedWord, index, fullText, regexMatches) {
                  const outputWithStyleVariable = `data-name="${regexMatches[0]}" style="fill: var(--${regexMatches[0]})"`;
                  console.log(outputWithStyleVariable)
                  return outputWithStyleVariable;
                }
              }],
              dest: 'new/'
            }
          }
    })

    grunt.loadNpmTasks('grunt-text-replace');
    grunt.registerTask('default', ['replace']);
};