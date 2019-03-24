fis.config.set('modules.postpackager', 'simple');


fis.config.set('pack', {
    'pkg/lib.js': [
        '/lib/js/**.js'
    ],
    'pkg/all.css':['**.css']
});

//为所有样式资源开启csssprites
fis.config.set('roadmap.path', [{
    reg: '**.css',
    useSprite: true
}]);
//设置csssprites的合并间距
fis.config.set('settings.spriter.csssprites.margin', 20);