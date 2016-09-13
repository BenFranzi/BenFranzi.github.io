---
layout: post
title:  "React Linking"
date:   2016-09-14 01:41:00 +1000
categories: jekyll update
---


So today I learn a few more things in Facebook's React. My goal was to re-create a simple binding in react with the text being displayed in the next line as a h1 heading. Below are the main links I used and the working example.
- [React Tutorial](https://facebook.github.io/react/docs/tutorial.html)
- [React Forms](https://facebook.github.io/react/docs/forms.html)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)




#### **Example of a Working React Component**
><html>
>  <head>
>    <meta charset="utf-8">
>    <title>React Tutorial</title>
>    <!-- Not present in the tutorial. Just for basic styling. -->
>    <link rel="stylesheet" href="css/base.css" />
>    <script src="https://unpkg.com/react@15.3.0/dist/react.js"></script>
>    <script src="https://unpkg.com/react-dom@15.3.0/dist/react-dom.js"></script>
>    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
>    <script src="https://unpkg.com/jquery@3.1.0/dist/jquery.min.js"></script>
>    <script src="https://unpkg.com/remarkable@1.6.2/dist/remarkable.min.js"></script>
>    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
>    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
>    <style media="screen">
>      div.main {
>        position: absolute;
>        top: 30%;
>        left: 10%;
>      }
>
>      h1 {
>           text-align: left;
>           white-space: -moz-pre-wrap !important;  /* Mozilla, since 1999 */
>           white-space: -pre-wrap;      /* Opera 4-6 */
>           white-space: -o-pre-wrap;    /* Opera 7 */
>           white-space: pre-wrap;       /* css-3 */
>           word-wrap: break-word;       /* Internet Explorer 5.5+ */
>           word-break: break-all;
>           white-space: normal;
>      }
>    </style>
>  </head>
>  <body class="main">
>    <div id="content"></div>
>
>    <script type="text/babel">
>      var FormEntry = React.createClass({
>        getInitialState: function() {
>          return {value: 'Hi :) '};
>        },
>        handleChange: function(event) {
>          this.setState({value: event.target.value});
>        },
>        render: function() {
>          return (
>            <div>
>              <div class="main">
>                <input type="text" value={this.state.value} onChange={this.handleChange}/>
>              </div>
>              <h1>{this.state.value}</h1>
>            </div>
>          );
>        }
>      });
>
>      ReactDOM.render(
>        <FormEntry />,
>        document.getElementById('content')
>      );
>    </script>
>  </body>
></html>
