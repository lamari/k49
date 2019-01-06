---
name: Button
category: Forms
keywords:
  - primary
  - action
  - basic button
  - plain
  - destructive
  - slim
  - large
  - full-width
  - disabled
  - disabled
  - button
  - click
  - submit
---

# Button

Buttons are used to make common actions immediately visible and easy to perform with one click or tap. Users can use it to navigate, or take action.

---

## Best practices

Buttons should:

- Be clearly and accurately labeled.
- Lead with strong, actionable verbs.
- Use established button colors appropriately. For example, only use a red
  button for an action that’s difficult or impossible to undo.
- Prioritize the most important actions. Too many calls to action can cause
  confusion and make users unsure of what to do next.
- Be positioned in consistent locations in the interface.

---

## Content guidelines

Buttons should be clear and predictable—users should be able to anticipate what will happen when they click a button. Never deceive users by mislabeling a button.

Buttons should always lead with a strong verb that encourages
action. To provide enough context to users use the {verb}+{noun} format on
buttons except in the case of common actions like Save, Close, Cancel, or OK.

---

## Examples

### Basic button

Used most in the interface. Only use another style if a button requires more or less visual weight.

```jsx
<Button>Add product</Button>
```

### Plain button

Use for less important or less commonly used actions since they’re less prominent. For example, plain buttons are used as actions in cards.

```jsx
<Button plain>View shipping settings</Button>
```

### Primary button

Use to highlight the most important actions in any experience. Don’t use more than one primary button in a section or screen to avoid overwhelming users.

```jsx
<Button primary>Save theme</Button>
```

### Destructive button

Use when the action will delete user data or be otherwise difficult to recover from. Destructive buttons should trigger a confirmation dialog before the action is completed. Be thoughtful about using destructive buttons because they can feel stressful for users.

```jsx
<Button destructive>Delete theme</Button>
```

### Slim button

Use when a table or list has a set of actions on each item to avoid making items taller than they need to be. Don’t use slim buttons for primary actions.

```jsx
<Button size="slim">Save variant</Button>
```

### Large button

Use for the main call to action in empty states or for calls to action shown with large illustrations.

```jsx
<Button size="large">Create store</Button>
```

### Full-width button

Use for buttons placed in a narrow column (especially when stacking multiple buttons) or for creating a set of buttons of equal width. Full-width buttons should rarely exceed 320 px wide.

```jsx
<Button fullWidth>Add customer</Button>
```

### Disabled state

Use for actions that aren’t currently available. The surrounding interface should make it clear why the button is disabled and what needs to be done to enable it.

```jsx
<Button disabled>Buy shipping label</Button>
```

### Loading state

Use when a button has been pressed and the associated action is in progress.

```jsx
<Button loading>Save product</Button>
```

---

## Related components

- To learn how to combine or lay out multiple buttons, [use the button group component](/components/form/button-group)
- To embed an action into a line of text, [use the link component](/components/navigation/link)