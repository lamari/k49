export function handleStopEvent(event: UIEvent): void {
    event.stopPropagation()
    event.preventDefault();
}