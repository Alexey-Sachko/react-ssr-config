export default function({ body, title }) {
  return `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <div id="root">${body}</div>
  <script type="text/javascript" src="main.js"></script>
  </body>
  </html>
  `
}