const { Plugins, Actions, log } = require('./utils/plugin');

const plugin = new Plugins();

// 操作一
plugin.action1 = new Actions({
    default: {},
    _willAppear({ context }) {
        plugin.setTitle(context, "Hello world!");
    },
    _willDisappear(data) { },
    _propertyInspectorDidAppear(data) { },
    dialRotate(data) {//旋钮旋转
        log.info(data);
    },
    dialDown(data) {//旋钮按下
        log.info(data);
    }
});