// Source - https://stackoverflow.com/a/44228423
// Posted by Jurosh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-27, License - CC BY-SA 3.0

declare module '*module.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
