# Setting up new project
1. Use angular-cli to generate project, with routing and scss
1. Add tailwind
2. Add prettier config
3. Add eslint package

## Extensions
Project should be setup using extensions
- Prettier
- Angular Language Service
- Tailwind CSS IntelliSense

# Naming conventions
## Enum
```
state.enum.ts
```

## EventEmitter
Event emitter names should be the event name, camelCase. For example, an EventEmitter that emits the event of opening a card should be called `open`. An EventEmitter that emits the event of a page change should be called `pageChange`.

# Css

https://stackblitz.com/edit/web-platform-4rgi2e?file=index.html

```html
<div class="gadget active">
  <div class="gadget-title">Anywhere Door</div>
  <div class="gadget-body">
    <div class="gadget-thumbnail">
      <img
        src="http://1.bp.blogspot.com/-hxRhIiEkYW8/UDe7LLfiNtI/AAAAAAAAAQ8/_NKkWEz7588/s1600/dokodemo+door.jpg"
      />
      <p>lorem ipsum</p>
    </div>
  </div>
</div>
```
- a block's name should represent what it is
- parts specific to a block should use the block's name as prefix
- state of a block should be a separate css class that's an adjective that describes the state
- when querying a specific block state, should use both block name and state, never query state alone

# Birthdate
Api returns birthdates in ISO 8601 format, such as `1994-01-01T00:00:00Z`. Because Angular formats dates in local time automatically, for birthdates to be displayed correctly, we'd need the date object to retain month, day, and year but with the browser's local timezone. Function below does the conversion:
```
import { parseISO } from 'date-fns';

export function parseBirthdate(iso: string) : Date {
  const date = parseISO(iso);
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
```
In a scenario where the api returns `1994-01-01T00:00:00Z`, this would end up creating a date such as `1994-01-01T07:00:00.000Z` in browser that is UTC-7 at time of date. Default Angular date pipe would display this as `Jan 1, 1994 `.
