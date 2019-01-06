import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';
import { pipe } from 'ramda';

import { addPrimaryOrDestructive, addFullWidth, addDisabled, addSize } from './model';
import { handleMouseUpByBlurring } from '../../helpers/mouseUp';
import { handleStopEvent } from '../../helpers/stopEvent';

@Component({
  tag: 'k49-button',
  styleUrl: './button.scss',
  shadow: true
})
export class Button {

  constructor() {
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  @Element() el: HTMLElement;

  /** 
   * Provides extra visual weight and identifies the primary action in a set of buttons
   * @default false
   * */
  @Prop() primary?: boolean = false;
  /** 
   * Indicates a dangerous or potentially negative action
   * @default false
   * */
  @Prop() destructive?: boolean = false;
  /** 
   * Disables the button, disallowing merchant interaction
   * @default false
   * */
  @Prop() disabled?: boolean = false;
  /** 
   * Replaces button text with a spinner while a background action is being performed
   * @default false
   * */
  @Prop() loading?: boolean = false;
  /**
   * Changes the size of the button, giving it more or less padding
   * @default 'medium'
   */
  @Prop() size?: 'slim' | 'medium' | 'large' = 'medium';
  /** 
   * Allows the button to grow to the width of its container 
   * @default false
   * */
  @Prop() full?: boolean = false;
  /** 
   * Allows the button to submit a form
   * @default false
   * */
  @Prop() submit?: boolean = false;

  /** Event Callback when clicked */
  @Event({ bubbles: true, composed: true }) buttonClick: EventEmitter<
    string
  >;
  /** Event Callback when button becomes focussed */
  @Event({ bubbles: true, composed: true }) buttonFocus: EventEmitter<
    string
  >;
  /** Event Callback when focus leaves button */
  @Event({ bubbles: true, composed: true }) buttonBlur: EventEmitter<
    string
  >;

  onClick(event: MouseEvent) {
    handleStopEvent(event);
    this.buttonClick.emit('click');
  }

  onFocus(event: FocusEvent) {
    handleStopEvent(event);
    this.buttonFocus.emit('focus');
  }

  onBlur(event: FocusEvent) {
    handleStopEvent(event);
    this.buttonBlur.emit('blur');
  }

  getClassName(): string {
    const el = this;
    return pipe(
      addSize(el),
      addDisabled(el),
      addFullWidth(el),
      addPrimaryOrDestructive(el),
    )('');
  }

  render() {
    const mainText = <slot />;

    let content = (
      <span class="k49-Button__Content">
        <span>{mainText}</span>
      </span>
    );

    if (this.loading) {
      content = <k49-spinner />;
    }

    return (
      <button
        onClick={this.onClick}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onMouseUp={handleMouseUpByBlurring}
        class={this.getClassName()}
        disabled={this.disabled}
        role={this.loading ? 'alert' : undefined}
        aria-busy={this.loading ? true : undefined}
      >
        {content}
      </button>
    );
  }
}
