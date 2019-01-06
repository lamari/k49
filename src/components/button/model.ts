import { propEq, always, ifElse, curry, propOr, CurriedFunction2, CurriedFunction4 } from 'ramda';


export let addSize: CurriedFunction2<any, string, string>;
addSize = curry((obj: any, str: string) => propOr(str, 'size')(obj));

export const addPrimaryOrDestructive = curry((obj: Object, str: string) => ifElse(
    propEq('primary', true),
    always(str + ' primary'),
    ifElse(
        propEq('destructive', true),
        always(str + ' destructive'),
        always(str),
    )
)(obj));

let addClassByAttr: CurriedFunction4<string, string, Object, string, string>;
addClassByAttr = curry((attr: string, cls: string, obj: Object, str: string) => ifElse(
    propEq(attr, true),
    always(str + cls),
    always(str),
)(obj));

export let addFullWidth: CurriedFunction2<any, string, string>;
addFullWidth = addClassByAttr('full', ' full-width');

export let addDisabled: CurriedFunction2<any, string, string>;
addDisabled = addClassByAttr('disabled', ' disabled');