export declare class PathUtils {
    static GetValue<T = any>(model: any, path: (string | number)[]): T;
    static SetValue(model: any, path: (string | number)[], value: any): void;
}
