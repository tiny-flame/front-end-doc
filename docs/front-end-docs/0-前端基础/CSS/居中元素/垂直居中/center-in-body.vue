
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>垂直居中</title>
  </head>
  <style>
  body {
 display: flex;
 justify-content: center;
 align-items: center;
}
    .wrapper {
      overflow: hidden;
      width: 600px;
      height: 500px;
      background: #999;
    }
    .center {
      width: 18em;
      height: 10em;
      text-align: center;
      background-color: orange;
      color: #fff;

      margin: 50vh auto;
      transform: translateY(-50%);
    }
  </style>
  <body>
    <div class="wrapper">
      <div class="center">
        基于视口的垂直居中<br />
        不要求原生有固定的宽高。<br />
        但是这种居中是在整个页面窗口内居中，不是基于父元素<br />
      </div>
    </div>
  </body>
</html>
