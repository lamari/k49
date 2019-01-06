export function handleMouseUpByBlurring(event: MouseEvent): void {
    let element = event.currentTarget as HTMLElement;
    element.blur();
    console.log('bluring', element);
}