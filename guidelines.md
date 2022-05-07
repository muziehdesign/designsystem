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
