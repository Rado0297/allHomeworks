var jade = require('jade');
var fs = require('fs');
var templateFilePath = 'app/index.jade';
var outputFilePath = 'templates/navigation.html';

fs.readFile(templateFilePath, 'utf-8', function (err, content) {
    if (err) throw err;
    var template = jade.compile(content);

    var model = {
        nav: [{
            url: '#/home',
            title: 'Home'
        }, {
            url: '#/smartphones',
            title: 'Smartphones'
        }, {
            url: '#/tablets',
            title: 'Tablets'
        }, {
            url: '#/wearables',
            title: 'Wearables'
        }],
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, eos, nostrum commodi nihil blanditiis quam recusandae praesentium deserunt consequatur dignissimos nemo earum distinctio mollitia sapiente numquam sed a facere rerum.'
    };

    var output = template(model);

    fs.writeFile(outputFilePath, output, 'utf-8', function (err) {
        if (err) throw err;
        console.log('Template parsed');
    });
});