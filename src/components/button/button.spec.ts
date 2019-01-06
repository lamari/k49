import { addPrimaryOrDestructive, addFullWidth, addDisabled, addSize } from './model';

/**
 * Unit tests
 */

describe('Model functions', () => {

    it('primary button', () => {
        const primaryObj = { primary: true };
        const primaryButton = addPrimaryOrDestructive(primaryObj, '');
        expect(primaryButton).toEqual(' primary');
    });

    it('destructive button', () => {
        const destructiveObj = { destructive: true };
        const destructiveButton = addPrimaryOrDestructive(destructiveObj, '');
        expect(destructiveButton).toEqual(' destructive');
    });

    it('full width button', () => {
        const fullWidthObj = { full: true };
        const fullWidthButton = addFullWidth(fullWidthObj, '');
        expect(fullWidthButton).toEqual(' full-width');
    });

    it('disabled button', () => {
        const disabledObj = { disabled: true };
        const disabledButton = addDisabled(disabledObj, '');
        expect(disabledButton).toEqual(' disabled');
    });

    it('size button', () => {
        const sizeObj = { size: 'medium' };
        const sizeButton = addSize(sizeObj, '');
        expect(sizeButton).toEqual('medium');
    });

    it('original button', () => {
        const originalObj = {};
        const primaryOrDestructiveButton = addPrimaryOrDestructive(originalObj, '');
        expect(primaryOrDestructiveButton).toEqual('');

        const addFullWidthButton = addFullWidth(originalObj, '');
        expect(addFullWidthButton).toEqual('');

        const addDisabledButton = addDisabled(originalObj, '');
        expect(addDisabledButton).toEqual('');

        const addSizeButton = addSize(originalObj, '');
        expect(addSizeButton).toEqual('');
    });

});
