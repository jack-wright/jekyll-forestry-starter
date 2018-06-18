import CMS from 'netlify-cms'
console.log('hello world');
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate)
