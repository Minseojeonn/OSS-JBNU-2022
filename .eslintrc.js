/*eslint-disable*/
module.exports = {
    "env": {
        "node": true,
	"browser":true,
	"amd": true,
    "jest":true
    },
    "extends": ["airbnb-base"],
    "overrides": [
    ], 
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules":{
	    "no-undef" : "off",
        "prefer-regex-literals" : "off"
    },
    "globals": {
	    window :true,
	    module :true
    }
};

