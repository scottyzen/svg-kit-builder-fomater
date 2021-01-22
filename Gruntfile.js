module.exports = function(grunt) {

  let names = [];
  
    // This will find every instance of:  data-name="$LAYER_NAME$"
    // and repace it with:                data-name="LAYER_NAME" style="fill: var(--LAYER_NAME)"    
    grunt.initConfig({
        replace: {
            conganSportsSvg: {
              src: ['../orignals/*.svg'],
              overwrite: false,
              replacements: [{
                from: /data-name\=\"\$(.*?)\$"/gi,
                to: function (matchedWord, index, fullText, regexMatches) {
                  
                  let word = regexMatches[0].toLowerCase();

                  names.push(word)



                  const outputWithStyleVariable = `data-name="${word}" style="fill: var(--${word})"`;
                  console.log(outputWithStyleVariable)
                  return outputWithStyleVariable;
                }
              }],
              dest: '../new/'
            }
          },
          printClassNames: {}
    })

    grunt.loadNpmTasks('grunt-text-replace');
    grunt.registerTask('printClassNames', () => {
      console.table([...new Set(names)]); // Print out each layer name
    });
    grunt.registerTask('default', ['replace', 'printClassNames']);
};