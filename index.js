"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PathUtils = (function () {
    function PathUtils() {
    }
    PathUtils.GetValue = function (model, path) {
        var _ret = model;
        path.forEach(function (subPath) {
            if (!_ret)
                return;
            _ret = _ret[subPath];
        });
        return _ret;
    };
    PathUtils.SetValue = function (model, path, value) {
        var _ret = model;
        var _path = path.slice();
        var last = _path.pop();
        if (!last && last !== 0)
            return;
        _path.forEach(function (subPath) {
            if (!_ret[subPath])
                _ret[subPath] = typeof subPath === "string" ? {} : [];
            _ret = _ret[subPath];
        });
        _ret[last] = value;
    };
    return PathUtils;
}());
exports.PathUtils = PathUtils;
