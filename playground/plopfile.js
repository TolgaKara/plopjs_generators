module.exports = function (plop) {
    // controller generator
    plop.setGenerator('Boilerplate Generator', {
        description: 'Select the Project Type you want to generate. For example NextJS, Gatsby, Flutter, Python & much more.',
        prompts: [{
            type: 'list',
            name: 'name',
            choices: ['NextJS','Gatsby','Flutter','Python']
        },{
            type: 'list',
            description:'asdasda',
            name: 'style',
            choices: ['TailwindCSS','Styled-Components','Flutter','Python']
        }],
        actions: function(data) {
            let actions = []
            if (data.name === 'NextJS'){
                actions.push({
                    type: 'add',
                    path: 'folder/{{dashCase name}}-NextJSIF.txt',
                });
                if (data.style === 'TailwindCSS'){
                    actions.push({
                        type: 'add',
                        path: 'folder/styles/{{dashCase name}}-Tailwind.css',
                    });
                }else if (data.style === 'Styled-Components'){
                    actions.push({
                        type: 'add',
                        path: 'folder/styles/{{dashCase name}}-StyledComponents.css',
                    });
                } else {
                    actions.push({
                        type: 'add',
                        path: 'folder/styles/{{dashCase name}}-ERROR.css',
                    });
                }
                return actions

            } else if (data.name === 'gatsby'){
                actions.push({
                    type: 'add',
                    path: 'folder/{{dashCase name}}-GatsbyJSIF.txt',
                });
            } else if (data.name.toLowerCase === 'python'){
                actions.push({
                    type: 'add',
                    path: 'folder/{{dashCase name}}-PythonIF.txt',
                });
            } else {
                actions.push({
                    type: 'add',
                    path: './ERROR.txt',
                });
            }
            return actions;
        }
    });
};