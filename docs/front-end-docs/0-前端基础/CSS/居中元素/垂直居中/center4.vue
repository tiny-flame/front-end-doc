<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>垂直居中</title>
  </head>
  <style>
    .wrapper {
      width: 80%;
      height: 500px;
      background: #999;

      display: flex;
    }
    .center {
      width: 18em;
      height: 10em;
      text-align: center;
      background-color: orange;
      color: #fff;

      margin: auto;
    }
  </style>
  <body>
    <div class="wrapper">
      <div class="center">
        使用flex居中<br />
        父元素 display: flex; <br />
        居中块： margin: auto;
      </div>
    </div>
  </body>
</html>
