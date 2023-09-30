declare module '*.css';
declare module '*.module.css';
declare module '*.less';
declare module '*.module.less';
declare module '*.scss';
declare module '*.module.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'throttle-debounce';
declare module 'react-color';

/**
 * 从某一类型中选出某些字段为可选
 * @example  Optional<{ name:string, age:number, date:Date },'date'>
 *
 * */
declare type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
