<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <script>
      var startTime = Date.now();
      const largeCalc = () => {
        for (let i = 0; i < 100000; i++) {
          for (let j = 0; j < 100000; j++) {}
        }
      };
      largeCalc();
    </script>
    <div>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        alert('DOMContentLoaded ' + JSON.stringify(Date.now() - startTime));
      });
    </script>
  </body>
</html>
