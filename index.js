'use strict';

/**
 * 增加gfis全局变量
 * @param  {Object}   options  插件配置
 * @param  {Object}   modified 修改了的文件列表（对应watch功能）
 * @param  {Object}   total    所有文件列表
 * @param  {Function} next     调用下一个插件
 * @return {undefined}
 */
module.exports = function(options, modified, total, next) {

    modified.forEach(function(file) {

        if (options.needGfisGlobalVar && (file.isText() || typeof(file.getContent()) === 'string')) {
            var content = file.getContent();

            //包含html基本结构的入口文件
            var isEntryFile = (~content.indexOf('/html') || ~content.indexOf('/HTML')) && (~content.indexOf('/head') || ~content.indexOf('/HEAD')) && (~content.indexOf('/body') || ~content.indexOf('/BODY'));

            //html入口文件
            if (/\.(html|ftl|tpl)/.test(file.rExt) && isEntryFile) {
                //gfis相关目录变量
                content = content.replace(/(<script[\s\S]*?>)/im, options.gfisGlobalVarStr + '\r\n$1');
                file.setContent(content);
            }

        }
    });

    next();
};
