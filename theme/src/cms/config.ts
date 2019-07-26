export default {"backend":{"name":"git-gateway","branch":"master"},"media_folder":"src/cms/img","public_folder":"/img","collections":[{"name":"pages","label":"Pages","files":[{"file":"src/cms/landing.md","label":"Landing Page","name":"index","fields":[{"label":"Template Key","name":"templateKey","widget":"hidden","default":"index-page"},{"label":"Title","name":"title","widget":"string"},{"label":"Image","name":"image","widget":"image"},{"label":"Heading","name":"heading","widget":"string"},{"label":"Subheading","name":"subheading","widget":"string"},{"label":"Mainpitch","name":"mainpitch","widget":"object","fields":[{"label":"Title","name":"title","widget":"string"},{"label":"Description","name":"description","widget":"text"}]},{"label":"Description","name":"description","widget":"string"},{"label":"Intro","name":"intro","widget":"object","fields":[{"label":"Heading","name":"heading","widget":"string"},{"label":"Description","name":"description","widget":"text"},{"label":"Blurbs","name":"blurbs","widget":"list","fields":[{"label":"Image","name":"image","widget":"image"},{"label":"Text","name":"text","widget":"text"}]}]},{"label":"Main","name":"main","widget":"object","fields":[{"label":"Heading","name":"heading","widget":"string"},{"label":"Description","name":"description","widget":"text"},{"label":"Image1","name":"image1","widget":"object","fields":[{"label":"Image","name":"image","widget":"image"},{"label":"Alt","name":"alt","widget":"string"}]},{"label":"Image2","name":"image2","widget":"object","fields":[{"label":"Image","name":"image","widget":"image"},{"label":"Alt","name":"alt","widget":"string"}]},{"label":"Image3","name":"image3","widget":"object","fields":[{"label":"Image","name":"image","widget":"image"},{"label":"Alt","name":"alt","widget":"string"}]}]}]},{"file":"src/cms/about.md","label":"About","name":"about","fields":[{"label":"Template Key","name":"templateKey","widget":"hidden","default":"about-page"},{"label":"Title","name":"title","widget":"string"},{"label":"Body","name":"body","widget":"markdown"}]}]},{"name":"news","label":"News","folder":"src/cms/news","create":true,"slug":"{{year}}-{{month}}-{{day}}-{{slug}}","fields":[{"label":"Template Key","name":"templateKey","widget":"hidden","default":"blog-post"},{"label":"Title","name":"title","widget":"string"},{"label":"Publish Date","name":"date","widget":"datetime"},{"label":"Description","name":"description","widget":"text"},{"label":"Featured Image","name":"featuredimage","widget":"image"},{"label":"Body","name":"body","widget":"markdown"}]}]}