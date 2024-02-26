[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13275248&assignment_repo_type=AssignmentRepo)
<br/>
<br/>

[![alt text](https://x4w8f4y8.rocketcdn.me/wp-content/uploads/2020/05/iod_h_tp_white_c.png)](#)

<!-- _class: lead -->

![](./images/iod.png)

# Module 4 | Lab 5

<br/>

## Manage Data 1

In this lab you will show your
understanding of using very simple
templates.

We are syncing what is on the screen
with what is in the data. In the future
we will make it much more complex,
but for now, we are really just after the
concepts.

### **Part 1**
Use the following array to populate
a web page which contains news. When the
page loads up, it will display the news in the
array.

Use an interval function to read the array
every 5 seconds. Every time the array is
read, remove all news elements from the
news container and fill it in with the latest
news – so it is always in sync.

```
let news=[

{ id: 1, title: 'News1', content:"bla"},
{ id: 2, title: 'News2', content:"ble"},
{ id: 3, title: 'News3', content:"blu"}
];
```
</br>

<br/>

## Manage Data 2

### **Part 2**

This time you will need to add news to the previous array. So when the
interval function come through, it will add your latest post.

To update the array, create a form somewhere in
your page, you will pass the title of the news and
the content.

There is a trick here, if you use a form and submit,
it will trigger a page reload. There are two ways of
solving this.

</br>

1) You can research the prevent default
behavior, which stops the form from doing a
normal post.

```
Some prevent default behaviour links:

1. W3Schools
2. Mozilla MDN Web Docs
```

2) You can simply recreate the form without
using an actual html form. Use Text areas and
normal buttons instead.

</br>
</br>

<hr>

<br/>

This assignment includes an in-class directive.

In case you missed any of the instructions in the class, please refer to the recording:

[![Maintainer](https://custom-icon-badges.demolab.com/badge/-ZOOM%20CLASS%20RECORDING-gold?style=for-the-badge&logo=google-logo&logoColor=black)](https://docs.google.com/spreadsheets/d/1ToABwZF6np66kwIxg-qORVwkW-G__6FBbsPHdmH6rOA/edit#gid=0{:target="_blank})

<br/>
<br/>

<html>
  <div align='center'>
    <h4>Please don't forget to add "<b>COMPLETED</b>" into your commit description when your assignment is ready for checking.</h4>
  </div>
</html>

<br/>
<br/>
<br/>
