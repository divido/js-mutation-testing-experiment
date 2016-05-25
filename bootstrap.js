var allTestFiles = [];
var TEST_REGEXP = /test_.*\.js$/;

console.log("Hello World");
Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
	    allTestFiles.push(file);
    }
});
console.log('allTestFiles =', allTestFiles);

var dojoConfig = {
	async: true,
	parseOnLoad: true,
	isDebug: false,
	packages: [
        { name: "local", location: "/base/src" },
        { name: "dojo", location: "http://ajax.googleapis.com/ajax/libs/dojo/1.9.1/dojo" },
        { name: "dojox", location: "http://ajax.googleapis.com/ajax/libs/dojo/1.9.1/dojox" }
	]
};


/**
 * This function must be defined and is called back by the dojo adapter
  * @returns {string} a list of dojo spec/test modules to register with your testing framework
 */
window.__karma__.dojoStart = function(){
	return allTestFiles;
}
