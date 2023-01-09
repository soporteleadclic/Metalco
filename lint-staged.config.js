module.exports = { 
  "**/*.{cls,trigger,page}": (filenames) => { 
    const joinedfiles = '"' + filenames.join('","') + '"'; 
    return `sfdx scanner:run -t "${joinedfiles}" --pmdconfig "./ApexPMD/PMDRulesXML.xml" --engine "pmd" --severity-threshold 1`; 
  }, 
  "force-app/**/*.{cls,cmp,component,css,html,js,json,md,page,trigger,xml,yaml,yml}": (filenames) => { 
    const joinedfiles = '"' + filenames.join('" "') + '"'; 
    return `"prettier --write "${joinedfiles}`; 
  }, 
  "**/{aura,lwc}/**": (filenames) => { 
    const joinedfiles = '"' + filenames.join('" "') + '"'; 
    return `"eslint "${joinedfiles}`; 
  } 
};