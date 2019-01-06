import { newE2EPage } from '@stencil/core/testing';

it('should create button', async () => {
    const page = await newE2EPage();

    await page.setContent(`<k49-button full primary size="slim"></k49-button>`);
    const k49Button = await page.find('k49-button');
    const button = await page.find('k49-button >>> button');

    expect(button).toHaveClasses(['slim', 'full-width', 'primary']);
    expect(button).not.toHaveClass('medium');
    expect(button).not.toHaveClass('destructive');


    k49Button.setProperty('disabled', true);
    await page.waitForChanges();
    expect(button).toHaveAttribute('disabled');


    const onClick = await page.spyOnEvent('buttonClick');
    button.triggerEvent('click');
    await page.waitForChanges();
    expect(onClick).toHaveReceivedEventDetail('click');

    const onFocus = await page.spyOnEvent('buttonFocus');
    button.triggerEvent('focus');
    await page.waitForChanges();
    expect(onFocus).toHaveReceivedEventDetail('focus');

    const onBlur = await page.spyOnEvent('buttonBlur');
    button.triggerEvent('blur');
    await page.waitForChanges();
    expect(onBlur).toHaveReceivedEventDetail('blur');

    // Working on Navigator but not with E2E
    // const onMouseUp = await page.spyOnEvent('buttonBlur');
    // button.triggerEvent('click');
    // await page.waitForChanges();
    // expect(onMouseUp).toHaveReceivedEventDetail('blur');
});
