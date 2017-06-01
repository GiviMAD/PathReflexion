export class PathUtils {
    static GetValue<T=any>(model: any, path: (string | number)[]) {
        let _ret = model;
        path.forEach(subPath => {
            if (!_ret) return;
            _ret = _ret[subPath];
        });
        return _ret as T;
    }
    static SetValue(model: any, path: (string | number)[], value: any): void {
        let _ret = model;
        let _path = [...path];
        let last = _path.pop();
        if (!last && last !== 0)
            return;
        _path.forEach(subPath => {
            if (!_ret[subPath]) _ret[subPath] = typeof subPath === "string" ? {} : [];
            _ret = _ret[subPath];
        });
        _ret[last] = value;
    }
}
